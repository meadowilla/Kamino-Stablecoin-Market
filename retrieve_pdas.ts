import { PublicKey} from "@solana/web3.js";
import { SYSTEM_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/native/system";
import {fetchEncodedAccount, createSolanaRpc, address} from "@solana/kit";
import * as anchor from '@coral-xyz/anchor';
import * as fs from 'fs';

const LENDING_MARKET_AUTH = Buffer.from("lma");
const RESERVE_LIQ_SUPPLY = Buffer.from("reserve_liq_supply");
const FEE_RECEIVER = Buffer.from("fee_receiver");
const RESERVE_COLL_MINT = Buffer.from("reserve_coll_mint");
const RESERVE_COLL_SUPPLY = Buffer.from("reserve_coll_supply");
const BASE_SEED_REFERRER_TOKEN_STATE = Buffer.from("referrer_acc");
const GLOBAL_CONFIG_STATE = Buffer.from("global_config");

const programId = new PublicKey("KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD");
const farmProgramId = new PublicKey("FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr");
const market = new PublicKey("DxXdAyU3kCjnyggvHmY5nAwg5cRbbmdyX3npfDMjjMek");
const mint = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

export const markets = new Map<string, PublicKey>([
  ["Maple Market", new PublicKey("6WEGfej9B9wjxRs6t4BYpb9iCXd8CpTpJ8fVSNzHCC5y")],
  ["Main Market", new PublicKey("7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF")],
  ["JPL Market", new PublicKey("DxXdAyU3kCjnyggvHmY5nAwg5cRbbmdyX3npfDMjjMek")],
  ["Adrena Market", new PublicKey("CTthJu49dgPkCgu9TKQProuaQnkHsRPQV33sSJ96vxpG")],
  ["Fartcoin Market", new PublicKey("4UwtBqa8DDtcWV6nWFregeMVkGdfWfiYeFxoHaR2hm9c")],
  ["BONK Market", new PublicKey("7WQeTuLsFrZsgnHW7ddFdNfhfJAViqH4mvcFZPQ5zuQ9")],
  ["Bitcoin Market", new PublicKey("GMqmFygF5iSm5nkckYU6tieggFcR42SyjkkhK5rswFRs")],
  ["JTO Market", new PublicKey("9wmqLq3n3KdQBbNfwqrF3PwcLgZ9edZ7hW5TsaC3o6uj")],
  ["Jupiter Market", new PublicKey("3EZEy7vBTJ8Q9PWxKwdLVULRdsvVLT51rpBG3gH1TSJ5")],
  ["Ethena Market", new PublicKey("BJnbcRHqvppTyGesLzWASGKnmnF1wq9jZu6ExrjT7wvF")],
  ["Altcoin Market", new PublicKey("ByYiZxp8QrdN9qbdtaAiePN8AAr3qvTPppNJDpf5DVJ5")],
  ["Apolo Market", new PublicKey("3koBPZPPV4Ag4DPWCyTdAVGxzxABWw9vEZ9vX8sjbbM2")],
]);

export const mints = new Map<string, PublicKey>([
  ["USDC", new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v")],
  ["USDT", new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB")],
  ["USDG", new PublicKey("2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH")],
  ["USDS", new PublicKey("USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA")],
  ["FDUSD", new PublicKey("9zNQRsGLjNKwCUU5Gq5LR8beUCPzQMVMqKAi3SSZh54u")],
  ["PYUSD", new PublicKey("2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo")],
  // ["EURC", new PublicKey("EGPE45iPkme8G8C1xFDNZoZeHdP3aRYtaAfAQuuwrcGZ")],
  ["USDE", new PublicKey("DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT")],
]);

export const reserves = new Map<string, Map<string, PublicKey>>();
reserves.set("Maple Market", new Map([
  ["USDC", new PublicKey("Atj6UREVWa7WxbF2EMKNyfmYUY1U1txughe2gjhcPDCo")],
  ["USDG", new PublicKey("HokDw9LaDf9qNzJf4F21RjHU3K4pRBkGQENvWnRGyRbn")],
  ["USDS", new PublicKey("BiSRKTadXSiyTSpiqw9nJge33N32AXewUPY7skFJwMvA")],
]));
reserves.set("Main Market", new Map([
  ["USDC", new PublicKey("D6q6wuQSrifJKZYpR1M8R4YawnLDtDsMmWM1NbBmgJ59")],
  ["USDG", new PublicKey("ESCkPWKHmgNE7Msf77n9yzqJd5kQVWWGy3o5Mgxhvavp")],
  ["USDS", new PublicKey("BHUi32TrEsfN2U821G4FprKrR4hTeK4LCWtA3BFetuqA")],
  ["USDT", new PublicKey("H3t6qZ1JkguCNTi9uzVKqQ7dvt2cum4XiXWom6Gn5e5S")],
  // ["EURC", new PublicKey("EGPE45iPkme8G8C1xFDNZoZeHdP3aRYtaAfAQuuwrcGZ")], // Is EURC stablecoin supported?
  ["FDUSD", new PublicKey("Bpc4kAh29J3YDQUMJJdGdr1zBAhTQjC48R1B8YTWudsi")],
  ["PYUSD", new PublicKey("2gc9Dm1eB6UgVYFBUN9bWks6Kes9PbWSaPaa9DqyvEiN")],
]));
reserves.set("JPL Market", new Map([
  ["USDC", new PublicKey("Ga4rZytCpq1unD4DbEJ5bkHeUz9g3oh9AAFEi6vSauXp")],
  ["USDT", new PublicKey("2ov3CMqPBYG3jNBmmpXgK9KMW5GmU5GWZNGcwf7w3BC1")],
  ["PYUSD", new PublicKey("FswUCVjvfAuzHCgPDF95eLKscGsLHyJmD6hzkhq26CLe")],
  ["USDG", new PublicKey("8rM1AY8M4YP4xNVmxhKnEUnj5CRWrcbcHpcgMoDfgqVi")],
]));
reserves.set("Adrena Market", new Map([
  ["USDC", new PublicKey("5bgPMvzZv29jkFEuMwxQRJQf64gKcPfLEEUHhyrP8tce")]
]));
reserves.set("Fartcoin Market", new Map([
  ["USDC", new PublicKey("F22tnLsbv66vEU2GZRc7coaqZsr8UcBbyp9V2kqWAiWK")],
  ["USDT", new PublicKey("FCiu3ZDsyMQXEeLsa3k2P9NnaPtbX8w2RCG9aKL2dnJP")],
]));
reserves.set("BONK Market", new Map([
  ["USDC", new PublicKey("2187ciVuR8fScuGkQYJBtgTjgXFjdKNefafxUSvHjh2T")],
  ["USDT", new PublicKey("5sJpVXsfTUbMD2X8uNMhAYCp83GjcQ7S5NVRn4Ji7qx6")],
  ["USDG", new PublicKey("Adk21h55pWks3hymqA6NpRGpfdptFzXeuyRJ2NHaTqHv")],
])); 
reserves.set("Bitcoin Market", new Map([
  ["USDC", new PublicKey("9FRZvAsjDJ6WM8BJ2S45h9PoDCLAq8DNY9zZDX7MyGzT")],
  ["FDUSD", new PublicKey("F2W8MLCx1aZXUSNvPBuGer4DBBT8W1wMbR8igpimV9wq")],
  ["USDT", new PublicKey("BjZ3HvRJHTNdQDxvJRCgR97Tsgv5ULZtywbiMmmTXycF")],
  ["USDG", new PublicKey("AZJAPDubfJuqzSsdeWQS3EG44nQRpwmKDTG1SKHrEMVy")],
]));
reserves.set("JTO Market", new Map([
  ["USDC", new PublicKey("FZWgLGd8W19eoKZrmRsQPhEhAmyZCjr17NpM7HFCJqb6")],
  ["USDT", new PublicKey("CratMPJswQ6wCWavz6QBK2yVTVZ96RS8rtCwYcMVeaB1")],
  ["USDG", new PublicKey("7hhG1B8G3XNRFZUNM8LrWRiSpAwNNyEx7hcAzpPuCGzh")],
]));
reserves.set("Jupiter Market", new Map([
  ["USDC", new PublicKey("9vUWBVRfowgwoxqdNrDq6Gqu3pUfPxEN9u7mi6639FkG")],
  ["USDT", new PublicKey("BwV7PRfiDNQ7DSA23gmsYL3EZug2jMKR4sXMLTgNBboo")],
  ["USDG", new PublicKey("Gd5WdkCf7ypnydApWUDjUUVPs8yNNXKuhZyrv75WhCbd")],
]));
reserves.set("Ethena Market", new Map([
  ["USDE", new PublicKey("2erD9GTGcaQbLsVSQweg3HvMpfKxScmz95raWv8H4iPN")],
  ["PYUSD", new PublicKey("EDf6dGbVnCCABbNhE3mp5i1jV2JhDAVmTWb1ztij1Yhs")],
]))
reserves.set("Altcoin Market", new Map([
  ["USDC", new PublicKey("9TD2TSv4pENb8VwfbVYg25jvym7HN6iuAR6pFNSrKjqQ")],
]))
reserves.set("Apolo Market", new Map([
  ["USDC", new PublicKey("7fTiUEgY6TkEivLithpChHK7pxrTkC7qgcoCPFyigB4G")],
  ["USDG", new PublicKey("2NhrhA94Fmx9dpEc9FEv3SDwvHheXQuScwhPCJPzg8r3")],
]));

export const reserveFarmStates = new Map<string, Map<string, PublicKey>>();
// The PubKey of all reserve farm states are on curve (meaning they are not derived from a seed).
reserveFarmStates.set("Maple Market", new Map([
  ["USDC", new PublicKey("6Y9fzrWzGZaxdAJ2eWRg9UZpL3kqPDiVXAb67KJpWdUg")],
  ["USDG", new PublicKey("J7YoW8Sr65uDbDoJ8abg2VJTGQ96bwwVaCqd2gunvp35")],
  ["USDS", new PublicKey("J7YoW8Sr65uDbDoJ8abg2VJTGQ96bwwVaCqd2gunvp35")], // ??? why it's the same as USDG?
]));
reserveFarmStates.set("Main Market", new Map([
  ["USDC", new PublicKey("JAvnB9AKtgPsTEoKmn24Bq64UMoYcrtWtq42HHBdsPkh")], 
  ["USDG", new PublicKey("13PFMegtPzKi9xPTk6fzDGs6BpgnPUnNZwfXZE1GRt8X")],
  ["USDS", new PublicKey("67L8BZe5PjuJz5CXqcsp1NXfNHoAZ1qPYUrxT7Cj2iUr")],
  ["USDT", new PublicKey("5pCqu9RFdL6QoN7KK4gKnAU6CjQFJot8nU7wpFK8Zwou")],
  ["FDUSD", new PublicKey("AJi7o8DdUEu9tdMV3wdnZn4gHdcpPMohwebWU3dMZ9rn")], 
  ["PYUSD", new PublicKey("GmJ2vXsDt8R5DNimAZc7Rtphr4oqecBVAx1psaTcVtrX")], 
]));
reserveFarmStates.set("JPL Market", new Map([
  ["USDC", new PublicKey("")], // ???
  ["USDT", new PublicKey("")], // ???
  ["PYUSD", new PublicKey("")], // ???
  ["USDG", new PublicKey("")], // ???
]));
reserveFarmStates.set("Adrena Market", new Map([
  ["USDC", new PublicKey("")], // ???
]));
reserveFarmStates.set("Fartcoin Market", new Map([
  ["USDC", new PublicKey("")], // ???
  ["USDT", new PublicKey("")], // ???
]));
reserveFarmStates.set("BONK Market", new Map([
  ["USDC", new PublicKey("")], // ???
  ["USDT", new PublicKey("")], // ???
  ["USDG", new PublicKey("")], // ???
]));
reserveFarmStates.set("Bitcoin Market", new Map([
  ["USDC", new PublicKey("")], // ???
  ["FDUSD", new PublicKey("")], // ???
  ["USDT", new PublicKey("")], // ???
  ["USDG", new PublicKey("")], // ???
]));
reserveFarmStates.set("JTO Market", new Map([
  ["USDC", new PublicKey("")], // ???
  ["USDT", new PublicKey("")], // ???
  ["USDG", new PublicKey("")], // ??? 
]));
reserveFarmStates.set("Jupiter Market", new Map([
  ["USDC", new PublicKey("")], // ???
  ["USDT", new PublicKey("")], // ???
  ["USDG", new PublicKey("")], // ???
]));
reserveFarmStates.set("Ethena Market", new Map([
  ["USDE", new PublicKey("")], // ???
  ["PYUSD", new PublicKey("")], // ???
]));
reserveFarmStates.set("Altcoin Market", new Map([
  ["USDC", new PublicKey("")], // ???
]));
reserveFarmStates.set("Apolo Market", new Map([
  ["USDC", new PublicKey("")], // ???   
  ["USDG", new PublicKey("")], // ???
]));

export function getLendingMarketAuthPDA(programId: PublicKey, lendingMarket: PublicKey): PublicKey {
  return PublicKey.findProgramAddressSync(
    [LENDING_MARKET_AUTH, lendingMarket.toBuffer()],
    programId
  )[0];
}

export function getInitReservePdas(programId: PublicKey, market: PublicKey, mint: PublicKey) {
  const feeVault = PublicKey.findProgramAddressSync(
    [FEE_RECEIVER, market.toBuffer(), mint.toBuffer()],
    programId
  )[0];

  const liquiditySupplyVault = PublicKey.findProgramAddressSync(
    [RESERVE_LIQ_SUPPLY, market.toBuffer(), mint.toBuffer()],
    programId
  )[0];

  const collateralCTokenMint = PublicKey.findProgramAddressSync(
    [RESERVE_COLL_MINT, market.toBuffer(), mint.toBuffer()],
    programId
  )[0];

  const collateralSupplyVault = PublicKey.findProgramAddressSync(
    [RESERVE_COLL_SUPPLY, market.toBuffer(), mint.toBuffer()],
    programId
  )[0];

  return {
    feeVault,
    liquiditySupplyVault,
    collateralCTokenMint,
    collateralSupplyVault
  };
}

function getReferrerTokenStatePDA(programId: PublicKey, referrer: PublicKey, reserve: PublicKey): PublicKey {
  return PublicKey.findProgramAddressSync(
    [BASE_SEED_REFERRER_TOKEN_STATE, referrer.toBuffer(), reserve.toBuffer()],
    programId
  )[0];
}

export function getObligationPDA(authority: PublicKey, market: PublicKey): PublicKey {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from([0]),
      Buffer.from([0]),
      authority.toBuffer(),
      market.toBuffer(),
      SYSTEM_PROGRAM_ID.toBuffer(),
      SYSTEM_PROGRAM_ID.toBuffer()
    ],
    programId
  )[0];
}

// const auth = getLendingMarketAuthPDA(programId, market);
// console.log("Lending Market Auth PDA:", auth.toBase58());

// const reservePDAs = getInitReservePdas(programId, market, mint);
// console.log("Reserve PDAs:", reservePDAs);
