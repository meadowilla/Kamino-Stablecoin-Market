import * as anchor from '@coral-xyz/anchor';
import { AddressLookupTableProgram, Connection, PublicKey, SYSVAR_INSTRUCTIONS_PUBKEY, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import * as fs from 'fs';
import { SYSTEM_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/native/system";
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import kaminoLendingIdl from './target/idl/kamino_lending.json';
import { KaminoLending } from './target/types/kamino_lending';
import { BN } from '@coral-xyz/anchor';
import { Program, AnchorProvider } from "@project-serum/anchor";


// Load keypair
const wallet = anchor.web3.Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(fs.readFileSync('phantom-mainnet-keypair.json', 'utf8')))
);

// Create connection
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
const provider = new AnchorProvider(connection, new anchor.Wallet(wallet), {
  commitment: 'confirmed',
});

// Load the program
const PROGRAM_IDS = {
  kaminoLending: new PublicKey('KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD'),
  kaminoFarm: new PublicKey('FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr'),
}

const TOKEN_MINTS = {
  usdcMint: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
}

const KAMINO_FARM_ACCOUNTS = {
  usdcReserveFarmState: new PublicKey("EGDhupegCXLtonYDSY67c4dzw86S9eMxsntQ1yxWSoHv"),
  obligationFarm: (obligation: PublicKey, reserveFarmState: PublicKey) => PublicKey.findProgramAddressSync(
    [
      Buffer.from("user"),
      reserveFarmState.toBuffer(),
      obligation.toBuffer(),
    ],
    PROGRAM_IDS.kaminoFarm
  )[0],
}

const kaminoLendingProgram: Program<KaminoLending> = new Program(kaminoLendingIdl as any, PROGRAM_IDS.kaminoLending, provider);

const KAMINO_LENDING_ACCOUNTS = {
  lendingMarket: new PublicKey("DxXdAyU3kCjnyggvHmY5nAwg5cRbbmdyX3npfDMjjMek"),
  usdcReserve: new PublicKey("Ga4rZytCpq1unD4DbEJ5bkHeUz9g3oh9AAFEi6vSauXp"),
  scopePrices: new PublicKey("3NJYftD5sjVfxSnUdZ1wVML8f3aC6mp1CXCL6L7TnU8C"),
  usdcLendingMarketAuthority: new PublicKey("B9spsrMK6pJicYtukaZzDyzsUQLgc3jbx5gHVwdDxb6y"),
  usdcReserveLiquiditySupply: new PublicKey("GENey8es3EgGiNTM8H8gzA3vf98haQF8LHiYFyErjgrv"),
  usdcReserveCollateralMint: new PublicKey("32XLsweyeQwWgLKRVAzS72nxHGU1JmmNQQZ3C3q6fBjJ"),
  usdcReserveCollateral: new PublicKey("6WnymZBTAekuHf9DgsaDKJ397oEZ3qMApNMHg9qjqhgm"),
  userMetadata: (authority: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [
        Buffer.from('user_meta'),
        authority.toBuffer(),
      ],
      PROGRAM_IDS.kaminoLending
    )[0],
  obligation: (authority: PublicKey, lendingMarket: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [
        Buffer.from([0]),
        Buffer.from([0]),
        authority.toBuffer(),
        lendingMarket.toBuffer(),
        SYSTEM_PROGRAM_ID.toBuffer(),
        SYSTEM_PROGRAM_ID.toBuffer()
      ],
      PROGRAM_IDS.kaminoLending
    )[0],
}
console.log("Obligation Address:", KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket).toBase58());

const createUserLookupTable = async () => {
  const recentSlot = await connection.getSlot("finalized");
  const [tx, userLookupTable] = AddressLookupTableProgram.createLookupTable({
    authority: provider.wallet.publicKey,
    payer: provider.wallet.publicKey,
    recentSlot,
  });
  console.log("Transaction creating user lookup table signature:", tx);
  return userLookupTable;
}

const initUserMetadata = async (userLookupTable: PublicKey) => {
  const tx = await kaminoLendingProgram.methods.initUserMetadata(userLookupTable)
    .accounts({
      owner: provider.wallet.publicKey,
      feePayer: provider.wallet.publicKey,
      userMetadata: KAMINO_LENDING_ACCOUNTS.userMetadata(provider.wallet.publicKey),
      referrerUserMetadata: PROGRAM_IDS.kaminoLending,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SYSTEM_PROGRAM_ID,
    })
    .rpc();
  console.log("Transaction initializing user metadata signature:", tx);
}


const initObligation = async () => {
  const tx = await kaminoLendingProgram.methods.initObligation({ tag: 0, id: 0 })
    .accounts({
      obligationOwner: provider.wallet.publicKey,
      feePayer: provider.wallet.publicKey,
      obligation: KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket),
      lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
      seed1Account: SYSTEM_PROGRAM_ID,
      seed2Account: SYSTEM_PROGRAM_ID,
      ownerUserMetadata: KAMINO_LENDING_ACCOUNTS.userMetadata(provider.wallet.publicKey),
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SYSTEM_PROGRAM_ID,
    })
    .rpc();
  console.log("Transaction initializing obligation signature:", tx);
}

const initObligationFarmsForReserve = async () => {
  const tx = await kaminoLendingProgram.methods.initObligationFarmsForReserve(0)
    .accounts({
      payer: provider.wallet.publicKey,
      owner: provider.wallet.publicKey,
      obligation: KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket),
      lendingMarketAuthority: KAMINO_LENDING_ACCOUNTS.usdcLendingMarketAuthority,
      reserve: KAMINO_LENDING_ACCOUNTS.usdcReserve,
      reserveFarmState: KAMINO_FARM_ACCOUNTS.usdcReserveFarmState,
      obligationFarm: KAMINO_FARM_ACCOUNTS.obligationFarm(KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket), KAMINO_FARM_ACCOUNTS.usdcReserveFarmState),
      lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
      farmsProgram: PROGRAM_IDS.kaminoFarm,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SYSTEM_PROGRAM_ID,
    })
    .rpc();
  console.log("Transaction initializing obligation farms for reserve signature:", tx);
}

const depositReserveLiquidityAndObligationCollateralV2 = async (amount: BN) => {
  const tx = await kaminoLendingProgram.methods.depositReserveLiquidityAndObligationCollateralV2(amount)
    .accounts({
      depositAccounts: {
        owner: provider.wallet.publicKey,
        obligation: KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket),
        lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
        lendingMarketAuthority: KAMINO_LENDING_ACCOUNTS.usdcLendingMarketAuthority,
        reserve: KAMINO_LENDING_ACCOUNTS.usdcReserve,
        reserveLiquidityMint: TOKEN_MINTS.usdcMint,
        reserveLiquiditySupply: KAMINO_LENDING_ACCOUNTS.usdcReserveLiquiditySupply,
        reserveCollateralMint: KAMINO_LENDING_ACCOUNTS.usdcReserveCollateralMint,
        reserveDestinationDepositCollateral: KAMINO_LENDING_ACCOUNTS.usdcReserveCollateral,
        userSourceLiquidity: getAssociatedTokenAddressSync(TOKEN_MINTS.usdcMint, provider.wallet.publicKey),
        placeholderUserDestinationCollateral: PROGRAM_IDS.kaminoLending,
        collateralTokenProgram: TOKEN_PROGRAM_ID,
        liquidityTokenProgram: TOKEN_PROGRAM_ID,
        instructionSysvarAccount: SYSVAR_INSTRUCTIONS_PUBKEY
      },
      farmsAccounts: {
        obligationFarmUserState: KAMINO_FARM_ACCOUNTS.obligationFarm(KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket), KAMINO_FARM_ACCOUNTS.usdcReserveFarmState),
        reserveFarmState: KAMINO_FARM_ACCOUNTS.usdcReserveFarmState,
      },
      farmsProgram: PROGRAM_IDS.kaminoFarm
    })
    .rpc();
  console.log("Transaction depositing signature:", tx);
}

const withdrawObligationCollateralAndRedeemReserveCollateralV2 = async (collateralAmount: BN) => {
  const tx = await kaminoLendingProgram.methods.withdrawObligationCollateralAndRedeemReserveCollateralV2(collateralAmount)
    .accounts({
      withdrawAccounts: {
        owner: provider.wallet.publicKey,
        obligation: KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket),
        lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
        lendingMarketAuthority: KAMINO_LENDING_ACCOUNTS.usdcLendingMarketAuthority,
        withdrawReserve: KAMINO_LENDING_ACCOUNTS.usdcReserve,
        reserveLiquidityMint: TOKEN_MINTS.usdcMint,
        reserveSourceCollateral: KAMINO_LENDING_ACCOUNTS.usdcReserveCollateral,
        reserveCollateralMint: KAMINO_LENDING_ACCOUNTS.usdcReserveCollateralMint,
        reserveLiquiditySupply: KAMINO_LENDING_ACCOUNTS.usdcReserveLiquiditySupply,
        userDestinationLiquidity: getAssociatedTokenAddressSync(TOKEN_MINTS.usdcMint, provider.wallet.publicKey),
        placeholderUserDestinationCollateral: PROGRAM_IDS.kaminoLending,
        collateralTokenProgram: TOKEN_PROGRAM_ID,
        liquidityTokenProgram: TOKEN_PROGRAM_ID,
        instructionSysvarAccount: SYSVAR_INSTRUCTIONS_PUBKEY
      },
      farmsAccounts: {
        obligationFarmUserState: KAMINO_FARM_ACCOUNTS.obligationFarm(KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket), KAMINO_FARM_ACCOUNTS.usdcReserveFarmState),
        reserveFarmState: KAMINO_FARM_ACCOUNTS.usdcReserveFarmState,
      },
      farmsProgram: PROGRAM_IDS.kaminoFarm
    })
    .rpc();
  console.log("Transaction withdrawing signature:", tx);
}

const refreshReserve = async () => {
  const tx = await kaminoLendingProgram.methods.refreshReserve()
    .accounts({
      reserve: KAMINO_LENDING_ACCOUNTS.usdcReserve,
      lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
      pythOracle: PROGRAM_IDS.kaminoLending,
      switchboardPriceOracle: PROGRAM_IDS.kaminoLending,
      switchboardTwapOracle: PROGRAM_IDS.kaminoLending,
      scopePrices: KAMINO_LENDING_ACCOUNTS.scopePrices,
    })
    .rpc();
  console.log("Transaction refreshing reserve signature:", tx);
}

const refreshObligation = async () => {
  const obligation = await kaminoLendingProgram.account.obligation.fetch(KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket)) as any;

  let isVaultExhausted: boolean;
  if (obligation.deposits[0].depositedAmount == 0) {
    isVaultExhausted = true;
  } else {
    isVaultExhausted = false;
  }
  const tx = await kaminoLendingProgram.methods.refreshObligation()
    .accounts({
      lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
      obligation: KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket),
    })
    .remainingAccounts(isVaultExhausted ? [] : [{ pubkey: KAMINO_LENDING_ACCOUNTS.usdcReserve, isWritable: true, isSigner: false }])
    .rpc();
  console.log("Transaction refreshing obligation signature:", tx);
}

const refreshObligationFarmsForReserve = async () => {
  const tx = await kaminoLendingProgram.methods.refreshObligationFarmsForReserve(0)
    .accounts({
      crank: provider.wallet.publicKey,
      baseAccounts: {
        obligation: KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket),
        lendingMarketAuthority: KAMINO_LENDING_ACCOUNTS.usdcLendingMarketAuthority,
        lendingMarket: KAMINO_LENDING_ACCOUNTS.lendingMarket,
        reserve: KAMINO_LENDING_ACCOUNTS.usdcReserve,
        reserveFarmState: KAMINO_FARM_ACCOUNTS.usdcReserveFarmState,
        obligationFarmUserState: KAMINO_FARM_ACCOUNTS.obligationFarm(KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket), KAMINO_FARM_ACCOUNTS.usdcReserveFarmState),
      },
      farmsProgram: PROGRAM_IDS.kaminoFarm,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SYSTEM_PROGRAM_ID,
    })
    .rpc();
  console.log("Transaction refreshing obligation farms for reserve signature:", tx);
}

(async () => {
  console.log("Balance of USDC:", (await connection.getTokenAccountBalance(getAssociatedTokenAddressSync(TOKEN_MINTS.usdcMint, provider.wallet.publicKey))));
  try {
    // const userLookupTable = await createUserLookupTable();
    // console.log("User lookup table created successfully.");

    // // Initialize user metadata if it doesn't exist
    // const userMetadataAddress = KAMINO_LENDING_ACCOUNTS.userMetadata(provider.wallet.publicKey);
    // const userMetadataInfo = await kaminoLendingProgram.account.userMetadata.fetchNullable(userMetadataAddress);
    // if (!userMetadataInfo) {
    //   console.log("User metadata does not exist, initializing...");
    //   await initUserMetadata(userLookupTable);
    // }

    // Itialize obligation if it doesn't exist
    const obligationAddress = KAMINO_LENDING_ACCOUNTS.obligation(provider.wallet.publicKey, KAMINO_LENDING_ACCOUNTS.lendingMarket);
    const obligationInfo = await kaminoLendingProgram.account.obligation.fetchNullable(obligationAddress);
    console.log("obligationInfo:", obligationInfo);
    // if (!obligationInfo) {
    //   console.log("Obligation does not exist, initializing...");
    //   await initObligation();
    // }

    // Initalize obligation farms for reserve if it doesn't exist
    // await initObligationFarmsForReserve();

    // await refreshReserve();
    // console.log("Reserve refreshed successfully.");
    // await refreshObligation();
    // console.log("Obligation refreshed successfully.");
    // // Refresh reserve to ensure it's up-to-date
    // await refreshReserve();
    // await refreshObligation();


    // await refreshReserve();
    // await refreshReserve();

    // Deposit USDC
    // const depositAmount = new BN(500000); // 0.5 USDC in smallest unit (6 decimals)
    // console.log(`Depositing ${depositAmount.toString()} USDC...`);

    // await depositReserveLiquidityAndObligationCollateralV2(depositAmount);

    // // Withdraw USDC
    // const withdrawAmount = new BN(200000); // 0.2 USDC in smallest unit (6 decimals)
    // console.log(`Withdrawing ${withdrawAmount.toString()} USDC...`);
    // await withdrawObligationCollateralAndRedeemReserveCollateralV2(withdrawAmount);
    // console.log("Withdrawal successful!");
  } catch (error) {
    console.error("Error during deposit/withdrawal:", error);
  }
})();

