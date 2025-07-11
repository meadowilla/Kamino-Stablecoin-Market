export type KaminoLending = {
  "version": "1.11.0",
  "name": "kamino_lending",
  "instructions": [
    {
      "name": "initLendingMarket",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quoteCurrency",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "updateLendingMarket",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u64"
        },
        {
          "name": "value",
          "type": {
            "array": [
              "u8",
              72
            ]
          }
        }
      ]
    },
    {
      "name": "updateLendingMarketOwner",
      "accounts": [
        {
          "name": "lendingMarketOwnerCached",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initReserve",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initialLiquiditySource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initFarmsForReserve",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsGlobalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmsVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateReserveConfig",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u64"
        },
        {
          "name": "value",
          "type": "bytes"
        },
        {
          "name": "skipValidation",
          "type": "bool"
        }
      ]
    },
    {
      "name": "redeemFees",
      "accounts": [
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveSupplyLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawProtocolFee",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketOwnerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "socializeLoss",
      "accounts": [
        {
          "name": "riskCouncil",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "socializeLossV2",
      "accounts": [
        {
          "name": "socializeLossAccounts",
          "accounts": [
            {
              "name": "riskCouncil",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "markObligationForDeleveraging",
      "accounts": [
        {
          "name": "riskCouncil",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "autodeleverageTargetLtvPct",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshReserve",
      "accounts": [
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pythOracle",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "switchboardPriceOracle",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "switchboardTwapOracle",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "scopePrices",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "refreshReservesBatch",
      "accounts": [],
      "args": [
        {
          "name": "skipPriceUpdates",
          "type": "bool"
        }
      ]
    },
    {
      "name": "depositReserveLiquidity",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "redeemReserveCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initObligation",
      "accounts": [
        {
          "name": "obligationOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "feePayer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "seed1Account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "seed2Account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerUserMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitObligationArgs"
          }
        }
      ]
    },
    {
      "name": "initObligationFarmsForReserve",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveFarmState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "obligationFarm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshObligationFarmsForReserve",
      "accounts": [
        {
          "name": "crank",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseAccounts",
          "accounts": [
            {
              "name": "obligation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshObligation",
      "accounts": [
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "depositObligationCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositObligationCollateralV2",
      "accounts": [
        {
          "name": "depositAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "depositReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveDestinationCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateralV2",
      "accounts": [
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrowObligationLiquidity",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "borrowReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrowReserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrowReserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrowObligationLiquidityV2",
      "accounts": [
        {
          "name": "borrowAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "borrowReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "borrowReserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "borrowReserveLiquidityFeeReceiver",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "referrerTokenState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repayObligationLiquidity",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repayObligationLiquidityV2",
      "accounts": [
        {
          "name": "repayAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repayAndWithdrawAndRedeem",
      "accounts": [
        {
          "name": "repayAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "collateralFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "debtFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "repayAmount",
          "type": "u64"
        },
        {
          "name": "withdrawCollateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositAndWithdraw",
      "accounts": [
        {
          "name": "depositAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveDestinationDepositCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "depositFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "withdrawFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "withdrawCollateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositReserveLiquidityAndObligationCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveDestinationDepositCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "placeholderUserDestinationCollateral",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositReserveLiquidityAndObligationCollateralV2",
      "accounts": [
        {
          "name": "depositAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveDestinationDepositCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateralAndRedeemReserveCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "placeholderUserDestinationCollateral",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateralAndRedeemReserveCollateralV2",
      "accounts": [
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "liquidateObligationAndRedeemReserveCollateral",
      "accounts": [
        {
          "name": "liquidator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "repayReserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayReserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawReserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveCollateralSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayLiquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawLiquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "minAcceptableReceivedLiquidityAmount",
          "type": "u64"
        },
        {
          "name": "maxAllowedLtvOverridePercent",
          "type": "u64"
        }
      ]
    },
    {
      "name": "liquidateObligationAndRedeemReserveCollateralV2",
      "accounts": [
        {
          "name": "liquidationAccounts",
          "accounts": [
            {
              "name": "liquidator",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "repayReserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveCollateralSupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveLiquidityFeeReceiver",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayLiquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawLiquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "collateralFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "debtFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "minAcceptableReceivedLiquidityAmount",
          "type": "u64"
        },
        {
          "name": "maxAllowedLtvOverridePercent",
          "type": "u64"
        }
      ]
    },
    {
      "name": "flashRepayReserveLiquidity",
      "accounts": [
        {
          "name": "userTransferAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "referrerAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "sysvarInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "borrowInstructionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "flashBorrowReserveLiquidity",
      "accounts": [
        {
          "name": "userTransferAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "referrerAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "sysvarInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "requestElevationGroup",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "elevationGroup",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initReferrerTokenState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initUserMetadata",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "feePayer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerUserMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userLookupTable",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "withdrawReferrerFees",
      "accounts": [
        {
          "name": "referrer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSupplyLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initReferrerStateAndShortUrl",
      "accounts": [
        {
          "name": "referrer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrerState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerShortUrl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerUserMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shortUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteReferrerStateAndShortUrl",
      "accounts": [
        {
          "name": "referrer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrerState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shortUrl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "idlMissingTypes",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "reserveFarmKind",
          "type": {
            "defined": "ReserveFarmKind"
          }
        },
        {
          "name": "assetTier",
          "type": {
            "defined": "AssetTier"
          }
        },
        {
          "name": "feeCalculation",
          "type": {
            "defined": "FeeCalculation"
          }
        },
        {
          "name": "reserveStatus",
          "type": {
            "defined": "ReserveStatus"
          }
        },
        {
          "name": "updateConfigMode",
          "type": {
            "defined": "UpdateConfigMode"
          }
        },
        {
          "name": "updateLendingMarketConfigValue",
          "type": {
            "defined": "UpdateLendingMarketConfigValue"
          }
        },
        {
          "name": "updateLendingMarketConfigMode",
          "type": {
            "defined": "UpdateLendingMarketMode"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userId",
            "type": "u64"
          },
          {
            "name": "farmState",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "isFarmDelegated",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "rewardsTallyScaled",
            "type": {
              "array": [
                "u128",
                10
              ]
            }
          },
          {
            "name": "rewardsIssuedUnclaimed",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "lastClaimTs",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "activeStakeScaled",
            "type": "u128"
          },
          {
            "name": "pendingDepositStakeScaled",
            "type": "u128"
          },
          {
            "name": "pendingDepositStakeTs",
            "type": "u64"
          },
          {
            "name": "pendingWithdrawalUnstakeScaled",
            "type": "u128"
          },
          {
            "name": "pendingWithdrawalUnstakeTs",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u64"
          },
          {
            "name": "delegatee",
            "type": "publicKey"
          },
          {
            "name": "lastStakeTs",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                50
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lendingMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u64"
          },
          {
            "name": "lendingMarketOwner",
            "type": "publicKey"
          },
          {
            "name": "lendingMarketOwnerCached",
            "type": "publicKey"
          },
          {
            "name": "quoteCurrency",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "referralFeeBps",
            "type": "u16"
          },
          {
            "name": "emergencyMode",
            "type": "u8"
          },
          {
            "name": "autodeleverageEnabled",
            "type": "u8"
          },
          {
            "name": "borrowDisabled",
            "type": "u8"
          },
          {
            "name": "priceRefreshTriggerToMaxAgePct",
            "type": "u8"
          },
          {
            "name": "liquidationMaxDebtCloseFactorPct",
            "type": "u8"
          },
          {
            "name": "insolvencyRiskUnhealthyLtvPct",
            "type": "u8"
          },
          {
            "name": "minFullLiquidationValueThreshold",
            "type": "u64"
          },
          {
            "name": "maxLiquidatableDebtMarketValueAtOnce",
            "type": "u64"
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "globalAllowedBorrowValue",
            "type": "u64"
          },
          {
            "name": "riskCouncil",
            "type": "publicKey"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "elevationGroups",
            "type": {
              "array": [
                {
                  "defined": "ElevationGroup"
                },
                32
              ]
            }
          },
          {
            "name": "elevationGroupPadding",
            "type": {
              "array": [
                "u64",
                90
              ]
            }
          },
          {
            "name": "minNetValueInObligationSf",
            "type": "u128"
          },
          {
            "name": "minValueSkipLiquidationLtvChecks",
            "type": "u64"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "minValueSkipLiquidationBfChecks",
            "type": "u64"
          },
          {
            "name": "individualAutodeleverageMarginCallPeriodSecs",
            "type": "u64"
          },
          {
            "name": "minInitialDepositAmount",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                170
              ]
            }
          }
        ]
      }
    },
    {
      "name": "obligation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "lendingMarket",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "deposits",
            "type": {
              "array": [
                {
                  "defined": "ObligationCollateral"
                },
                8
              ]
            }
          },
          {
            "name": "lowestReserveDepositLiquidationLtv",
            "type": "u64"
          },
          {
            "name": "depositedValueSf",
            "type": "u128"
          },
          {
            "name": "borrows",
            "type": {
              "array": [
                {
                  "defined": "ObligationLiquidity"
                },
                5
              ]
            }
          },
          {
            "name": "borrowFactorAdjustedDebtValueSf",
            "type": "u128"
          },
          {
            "name": "borrowedAssetsMarketValueSf",
            "type": "u128"
          },
          {
            "name": "allowedBorrowValueSf",
            "type": "u128"
          },
          {
            "name": "unhealthyBorrowValueSf",
            "type": "u128"
          },
          {
            "name": "depositsAssetTiers",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "borrowsAssetTiers",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "elevationGroup",
            "type": "u8"
          },
          {
            "name": "numOfObsoleteReserves",
            "type": "u8"
          },
          {
            "name": "hasDebt",
            "type": "u8"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "borrowingDisabled",
            "type": "u8"
          },
          {
            "name": "autodeleverageTargetLtvPct",
            "type": "u8"
          },
          {
            "name": "lowestReserveDepositMaxLtvPct",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "highestBorrowFactorPct",
            "type": "u64"
          },
          {
            "name": "autodeleverageMarginCallStartedTimestamp",
            "type": "u64"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                125
              ]
            }
          }
        ]
      }
    },
    {
      "name": "referrerState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shortUrl",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "referrerTokenState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "amountUnclaimedSf",
            "type": "u128"
          },
          {
            "name": "amountCumulativeSf",
            "type": "u128"
          },
          {
            "name": "bump",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                31
              ]
            }
          }
        ]
      }
    },
    {
      "name": "shortUrl",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "shortUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "userMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u64"
          },
          {
            "name": "userLookupTable",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                51
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "reserve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "lendingMarket",
            "type": "publicKey"
          },
          {
            "name": "farmCollateral",
            "type": "publicKey"
          },
          {
            "name": "farmDebt",
            "type": "publicKey"
          },
          {
            "name": "liquidity",
            "type": {
              "defined": "ReserveLiquidity"
            }
          },
          {
            "name": "reserveLiquidityPadding",
            "type": {
              "array": [
                "u64",
                150
              ]
            }
          },
          {
            "name": "collateral",
            "type": {
              "defined": "ReserveCollateral"
            }
          },
          {
            "name": "reserveCollateralPadding",
            "type": {
              "array": [
                "u64",
                150
              ]
            }
          },
          {
            "name": "config",
            "type": {
              "defined": "ReserveConfig"
            }
          },
          {
            "name": "configPadding",
            "type": {
              "array": [
                "u64",
                116
              ]
            }
          },
          {
            "name": "borrowedAmountOutsideElevationGroup",
            "type": "u64"
          },
          {
            "name": "borrowedAmountsAgainstThisReserveInElevationGroups",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                207
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "UpdateConfigMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UpdateLoanToValuePct"
          },
          {
            "name": "UpdateMaxLiquidationBonusBps"
          },
          {
            "name": "UpdateLiquidationThresholdPct"
          },
          {
            "name": "UpdateProtocolLiquidationFee"
          },
          {
            "name": "UpdateProtocolTakeRate"
          },
          {
            "name": "UpdateFeesBorrowFee"
          },
          {
            "name": "UpdateFeesFlashLoanFee"
          },
          {
            "name": "UpdateFeesReferralFeeBps"
          },
          {
            "name": "UpdateDepositLimit"
          },
          {
            "name": "UpdateBorrowLimit"
          },
          {
            "name": "UpdateTokenInfoLowerHeuristic"
          },
          {
            "name": "UpdateTokenInfoUpperHeuristic"
          },
          {
            "name": "UpdateTokenInfoExpHeuristic"
          },
          {
            "name": "UpdateTokenInfoTwapDivergence"
          },
          {
            "name": "UpdateTokenInfoScopeTwap"
          },
          {
            "name": "UpdateTokenInfoScopeChain"
          },
          {
            "name": "UpdateTokenInfoName"
          },
          {
            "name": "UpdateTokenInfoPriceMaxAge"
          },
          {
            "name": "UpdateTokenInfoTwapMaxAge"
          },
          {
            "name": "UpdateScopePriceFeed"
          },
          {
            "name": "UpdatePythPrice"
          },
          {
            "name": "UpdateSwitchboardFeed"
          },
          {
            "name": "UpdateSwitchboardTwapFeed"
          },
          {
            "name": "UpdateBorrowRateCurve"
          },
          {
            "name": "UpdateEntireReserveConfig"
          },
          {
            "name": "UpdateDebtWithdrawalCap"
          },
          {
            "name": "UpdateDepositWithdrawalCap"
          },
          {
            "name": "UpdateDebtWithdrawalCapCurrentTotal"
          },
          {
            "name": "UpdateDepositWithdrawalCapCurrentTotal"
          },
          {
            "name": "UpdateBadDebtLiquidationBonusBps"
          },
          {
            "name": "UpdateMinLiquidationBonusBps"
          },
          {
            "name": "UpdateDeleveragingMarginCallPeriod"
          },
          {
            "name": "UpdateBorrowFactor"
          },
          {
            "name": "UpdateAssetTier"
          },
          {
            "name": "UpdateElevationGroup"
          },
          {
            "name": "UpdateDeleveragingThresholdDecreaseBpsPerDay"
          },
          {
            "name": "DeprecatedUpdateMultiplierSideBoost"
          },
          {
            "name": "DeprecatedUpdateMultiplierTagBoost"
          },
          {
            "name": "UpdateReserveStatus"
          },
          {
            "name": "UpdateFarmCollateral"
          },
          {
            "name": "UpdateFarmDebt"
          },
          {
            "name": "UpdateDisableUsageAsCollateralOutsideEmode"
          },
          {
            "name": "UpdateBlockBorrowingAboveUtilizationPct"
          },
          {
            "name": "UpdateBlockPriceUsage"
          },
          {
            "name": "UpdateBorrowLimitOutsideElevationGroup"
          },
          {
            "name": "UpdateBorrowLimitsInElevationGroupAgainstThisReserve"
          },
          {
            "name": "UpdateHostFixedInterestRateBps"
          },
          {
            "name": "UpdateAutodeleverageEnabled"
          },
          {
            "name": "UpdateDeleveragingBonusIncreaseBpsPerDay"
          }
        ]
      }
    },
    {
      "name": "UpdateLendingMarketConfigValue",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bool",
            "fields": [
              "bool"
            ]
          },
          {
            "name": "U8",
            "fields": [
              "u8"
            ]
          },
          {
            "name": "U8Array",
            "fields": [
              {
                "array": [
                  "u8",
                  8
                ]
              }
            ]
          },
          {
            "name": "U16",
            "fields": [
              "u16"
            ]
          },
          {
            "name": "U64",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "U128",
            "fields": [
              "u128"
            ]
          },
          {
            "name": "Pubkey",
            "fields": [
              "publicKey"
            ]
          },
          {
            "name": "ElevationGroup",
            "fields": [
              {
                "defined": "ElevationGroup"
              }
            ]
          },
          {
            "name": "Name",
            "fields": [
              {
                "array": [
                  "u8",
                  32
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "name": "UpdateLendingMarketMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UpdateOwner"
          },
          {
            "name": "UpdateEmergencyMode"
          },
          {
            "name": "UpdateLiquidationCloseFactor"
          },
          {
            "name": "UpdateLiquidationMaxValue"
          },
          {
            "name": "DeprecatedUpdateGlobalUnhealthyBorrow"
          },
          {
            "name": "UpdateGlobalAllowedBorrow"
          },
          {
            "name": "UpdateRiskCouncil"
          },
          {
            "name": "UpdateMinFullLiquidationThreshold"
          },
          {
            "name": "UpdateInsolvencyRiskLtv"
          },
          {
            "name": "UpdateElevationGroup"
          },
          {
            "name": "UpdateReferralFeeBps"
          },
          {
            "name": "DeprecatedUpdateMultiplierPoints"
          },
          {
            "name": "UpdatePriceRefreshTriggerToMaxAgePct"
          },
          {
            "name": "UpdateAutodeleverageEnabled"
          },
          {
            "name": "UpdateBorrowingDisabled"
          },
          {
            "name": "UpdateMinNetValueObligationPostAction"
          },
          {
            "name": "UpdateMinValueLtvSkipPriorityLiqCheck"
          },
          {
            "name": "UpdateMinValueBfSkipPriorityLiqCheck"
          },
          {
            "name": "UpdatePaddingFields"
          },
          {
            "name": "UpdateName"
          },
          {
            "name": "UpdateIndividualAutodeleverageMarginCallPeriodSecs"
          },
          {
            "name": "UpdateInitialDepositAmount"
          }
        ]
      }
    },
    {
      "name": "LastUpdate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "stale",
            "type": "u8"
          },
          {
            "name": "priceStatus",
            "type": "u8"
          },
          {
            "name": "placeholder",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ElevationGroup",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "ltvPct",
            "type": "u8"
          },
          {
            "name": "liquidationThresholdPct",
            "type": "u8"
          },
          {
            "name": "allowNewLoans",
            "type": "u8"
          },
          {
            "name": "maxReservesAsCollateral",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": "u8"
          },
          {
            "name": "debtReserve",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "InitObligationArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u8"
          },
          {
            "name": "id",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ObligationCollateral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "depositReserve",
            "type": "publicKey"
          },
          {
            "name": "depositedAmount",
            "type": "u64"
          },
          {
            "name": "marketValueSf",
            "type": "u128"
          },
          {
            "name": "borrowedAmountAgainstThisCollateralInElevationGroup",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                9
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ObligationLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "borrowReserve",
            "type": "publicKey"
          },
          {
            "name": "cumulativeBorrowRateBsf",
            "type": {
              "defined": "BigFractionBytes"
            }
          },
          {
            "name": "padding",
            "type": "u64"
          },
          {
            "name": "borrowedAmountSf",
            "type": "u128"
          },
          {
            "name": "marketValueSf",
            "type": "u128"
          },
          {
            "name": "borrowFactorAdjustedMarketValueSf",
            "type": "u128"
          },
          {
            "name": "borrowedAmountOutsideElevationGroups",
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "AssetTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Regular"
          },
          {
            "name": "IsolatedCollateral"
          },
          {
            "name": "IsolatedDebt"
          }
        ]
      }
    },
    {
      "name": "BigFractionBytes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeCalculation",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Exclusive"
          },
          {
            "name": "Inclusive"
          }
        ]
      }
    },
    {
      "name": "ReserveCollateral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "type": "publicKey"
          },
          {
            "name": "mintTotalSupply",
            "type": "u64"
          },
          {
            "name": "supplyVault",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReserveConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "assetTier",
            "type": "u8"
          },
          {
            "name": "hostFixedInterestRateBps",
            "type": "u16"
          },
          {
            "name": "reserved2",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "reserved3",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "protocolTakeRatePct",
            "type": "u8"
          },
          {
            "name": "protocolLiquidationFeePct",
            "type": "u8"
          },
          {
            "name": "loanToValuePct",
            "type": "u8"
          },
          {
            "name": "liquidationThresholdPct",
            "type": "u8"
          },
          {
            "name": "minLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "maxLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "badDebtLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "deleveragingMarginCallPeriodSecs",
            "type": "u64"
          },
          {
            "name": "deleveragingThresholdDecreaseBpsPerDay",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": {
              "defined": "ReserveFees"
            }
          },
          {
            "name": "borrowRateCurve",
            "type": {
              "defined": "BorrowRateCurve"
            }
          },
          {
            "name": "borrowFactorPct",
            "type": "u64"
          },
          {
            "name": "depositLimit",
            "type": "u64"
          },
          {
            "name": "borrowLimit",
            "type": "u64"
          },
          {
            "name": "tokenInfo",
            "type": {
              "defined": "TokenInfo"
            }
          },
          {
            "name": "depositWithdrawalCap",
            "type": {
              "defined": "WithdrawalCaps"
            }
          },
          {
            "name": "debtWithdrawalCap",
            "type": {
              "defined": "WithdrawalCaps"
            }
          },
          {
            "name": "elevationGroups",
            "type": {
              "array": [
                "u8",
                20
              ]
            }
          },
          {
            "name": "disableUsageAsCollOutsideEmode",
            "type": "u8"
          },
          {
            "name": "utilizationLimitBlockBorrowingAbovePct",
            "type": "u8"
          },
          {
            "name": "autodeleverageEnabled",
            "type": "u8"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "borrowLimitOutsideElevationGroup",
            "type": "u64"
          },
          {
            "name": "borrowLimitAgainstThisCollateralInElevationGroup",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          },
          {
            "name": "deleveragingBonusIncreaseBpsPerDay",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ReserveFarmKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Collateral"
          },
          {
            "name": "Debt"
          }
        ]
      }
    },
    {
      "name": "ReserveFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "borrowFeeSf",
            "type": "u64"
          },
          {
            "name": "flashLoanFeeSf",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReserveLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "type": "publicKey"
          },
          {
            "name": "supplyVault",
            "type": "publicKey"
          },
          {
            "name": "feeVault",
            "type": "publicKey"
          },
          {
            "name": "availableAmount",
            "type": "u64"
          },
          {
            "name": "borrowedAmountSf",
            "type": "u128"
          },
          {
            "name": "marketPriceSf",
            "type": "u128"
          },
          {
            "name": "marketPriceLastUpdatedTs",
            "type": "u64"
          },
          {
            "name": "mintDecimals",
            "type": "u64"
          },
          {
            "name": "depositLimitCrossedTimestamp",
            "type": "u64"
          },
          {
            "name": "borrowLimitCrossedTimestamp",
            "type": "u64"
          },
          {
            "name": "cumulativeBorrowRateBsf",
            "type": {
              "defined": "BigFractionBytes"
            }
          },
          {
            "name": "accumulatedProtocolFeesSf",
            "type": "u128"
          },
          {
            "name": "accumulatedReferrerFeesSf",
            "type": "u128"
          },
          {
            "name": "pendingReferrerFeesSf",
            "type": "u128"
          },
          {
            "name": "absoluteReferralRateSf",
            "type": "u128"
          },
          {
            "name": "tokenProgram",
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                51
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReserveStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Active"
          },
          {
            "name": "Obsolete"
          },
          {
            "name": "Hidden"
          }
        ]
      }
    },
    {
      "name": "WithdrawalCaps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "configCapacity",
            "type": "i64"
          },
          {
            "name": "currentTotal",
            "type": "i64"
          },
          {
            "name": "lastIntervalStartTimestamp",
            "type": "u64"
          },
          {
            "name": "configIntervalLengthSeconds",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceHeuristic",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lower",
            "type": "u64"
          },
          {
            "name": "upper",
            "type": "u64"
          },
          {
            "name": "exp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PythConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ScopeConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceFeed",
            "type": "publicKey"
          },
          {
            "name": "priceChain",
            "type": {
              "array": [
                "u16",
                4
              ]
            }
          },
          {
            "name": "twapChain",
            "type": {
              "array": [
                "u16",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "SwitchboardConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceAggregator",
            "type": "publicKey"
          },
          {
            "name": "twapAggregator",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "TokenInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "heuristic",
            "type": {
              "defined": "PriceHeuristic"
            }
          },
          {
            "name": "maxTwapDivergenceBps",
            "type": "u64"
          },
          {
            "name": "maxAgePriceSeconds",
            "type": "u64"
          },
          {
            "name": "maxAgeTwapSeconds",
            "type": "u64"
          },
          {
            "name": "scopeConfiguration",
            "type": {
              "defined": "ScopeConfiguration"
            }
          },
          {
            "name": "switchboardConfiguration",
            "type": {
              "defined": "SwitchboardConfiguration"
            }
          },
          {
            "name": "pythConfiguration",
            "type": {
              "defined": "PythConfiguration"
            }
          },
          {
            "name": "blockPriceUsage",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                19
              ]
            }
          }
        ]
      }
    },
    {
      "name": "BorrowRateCurve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "points",
            "type": {
              "array": [
                {
                  "defined": "CurvePoint"
                },
                11
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CurvePoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "utilizationRateBps",
            "type": "u32"
          },
          {
            "name": "borrowRateBps",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidMarketAuthority",
      "msg": "Market authority is invalid"
    },
    {
      "code": 6001,
      "name": "InvalidMarketOwner",
      "msg": "Market owner is invalid"
    },
    {
      "code": 6002,
      "name": "InvalidAccountOwner",
      "msg": "Input account owner is not the program address"
    },
    {
      "code": 6003,
      "name": "InvalidAmount",
      "msg": "Input amount is invalid"
    },
    {
      "code": 6004,
      "name": "InvalidConfig",
      "msg": "Input config value is invalid"
    },
    {
      "code": 6005,
      "name": "InvalidSigner",
      "msg": "Input account must be a signer"
    },
    {
      "code": 6006,
      "name": "InvalidAccountInput",
      "msg": "Invalid account input"
    },
    {
      "code": 6007,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6008,
      "name": "InsufficientLiquidity",
      "msg": "Insufficient liquidity available"
    },
    {
      "code": 6009,
      "name": "ReserveStale",
      "msg": "Reserve state needs to be refreshed"
    },
    {
      "code": 6010,
      "name": "WithdrawTooSmall",
      "msg": "Withdraw amount too small"
    },
    {
      "code": 6011,
      "name": "WithdrawTooLarge",
      "msg": "Withdraw amount too large"
    },
    {
      "code": 6012,
      "name": "BorrowTooSmall",
      "msg": "Borrow amount too small to receive liquidity after fees"
    },
    {
      "code": 6013,
      "name": "BorrowTooLarge",
      "msg": "Borrow amount too large for deposited collateral"
    },
    {
      "code": 6014,
      "name": "RepayTooSmall",
      "msg": "Repay amount too small to transfer liquidity"
    },
    {
      "code": 6015,
      "name": "LiquidationTooSmall",
      "msg": "Liquidation amount too small to receive collateral"
    },
    {
      "code": 6016,
      "name": "ObligationHealthy",
      "msg": "Cannot liquidate healthy obligations"
    },
    {
      "code": 6017,
      "name": "ObligationStale",
      "msg": "Obligation state needs to be refreshed"
    },
    {
      "code": 6018,
      "name": "ObligationReserveLimit",
      "msg": "Obligation reserve limit exceeded"
    },
    {
      "code": 6019,
      "name": "InvalidObligationOwner",
      "msg": "Obligation owner is invalid"
    },
    {
      "code": 6020,
      "name": "ObligationDepositsEmpty",
      "msg": "Obligation deposits are empty"
    },
    {
      "code": 6021,
      "name": "ObligationBorrowsEmpty",
      "msg": "Obligation borrows are empty"
    },
    {
      "code": 6022,
      "name": "ObligationDepositsZero",
      "msg": "Obligation deposits have zero value"
    },
    {
      "code": 6023,
      "name": "ObligationBorrowsZero",
      "msg": "Obligation borrows have zero value"
    },
    {
      "code": 6024,
      "name": "InvalidObligationCollateral",
      "msg": "Invalid obligation collateral"
    },
    {
      "code": 6025,
      "name": "InvalidObligationLiquidity",
      "msg": "Invalid obligation liquidity"
    },
    {
      "code": 6026,
      "name": "ObligationCollateralEmpty",
      "msg": "Obligation collateral is empty"
    },
    {
      "code": 6027,
      "name": "ObligationLiquidityEmpty",
      "msg": "Obligation liquidity is empty"
    },
    {
      "code": 6028,
      "name": "NegativeInterestRate",
      "msg": "Interest rate is negative"
    },
    {
      "code": 6029,
      "name": "InvalidOracleConfig",
      "msg": "Input oracle config is invalid"
    },
    {
      "code": 6030,
      "name": "InsufficientProtocolFeesToRedeem",
      "msg": "Insufficient protocol fees to claim or no liquidity available"
    },
    {
      "code": 6031,
      "name": "FlashBorrowCpi",
      "msg": "No cpi flash borrows allowed"
    },
    {
      "code": 6032,
      "name": "NoFlashRepayFound",
      "msg": "No corresponding repay found for flash borrow"
    },
    {
      "code": 6033,
      "name": "InvalidFlashRepay",
      "msg": "Invalid repay found"
    },
    {
      "code": 6034,
      "name": "FlashRepayCpi",
      "msg": "No cpi flash repays allowed"
    },
    {
      "code": 6035,
      "name": "MultipleFlashBorrows",
      "msg": "Multiple flash borrows not allowed in the same transaction"
    },
    {
      "code": 6036,
      "name": "FlashLoansDisabled",
      "msg": "Flash loans are disabled for this reserve"
    },
    {
      "code": 6037,
      "name": "SwitchboardV2Error",
      "msg": "Switchboard error"
    },
    {
      "code": 6038,
      "name": "CouldNotDeserializeScope",
      "msg": "Cannot deserialize the scope price account"
    },
    {
      "code": 6039,
      "name": "PriceTooOld",
      "msg": "Price too old"
    },
    {
      "code": 6040,
      "name": "PriceTooDivergentFromTwap",
      "msg": "Price too divergent from twap"
    },
    {
      "code": 6041,
      "name": "InvalidTwapPrice",
      "msg": "Invalid twap price"
    },
    {
      "code": 6042,
      "name": "GlobalEmergencyMode",
      "msg": "Emergency mode is enabled"
    },
    {
      "code": 6043,
      "name": "InvalidFlag",
      "msg": "Invalid lending market config"
    },
    {
      "code": 6044,
      "name": "PriceNotValid",
      "msg": "Price is not valid"
    },
    {
      "code": 6045,
      "name": "PriceIsBiggerThanHeuristic",
      "msg": "Price is bigger than allowed by heuristic"
    },
    {
      "code": 6046,
      "name": "PriceIsLowerThanHeuristic",
      "msg": "Price lower than allowed by heuristic"
    },
    {
      "code": 6047,
      "name": "PriceIsZero",
      "msg": "Price is zero"
    },
    {
      "code": 6048,
      "name": "PriceConfidenceTooWide",
      "msg": "Price confidence too wide"
    },
    {
      "code": 6049,
      "name": "IntegerOverflow",
      "msg": "Conversion between integers failed"
    },
    {
      "code": 6050,
      "name": "NoFarmForReserve",
      "msg": "This reserve does not have a farm"
    },
    {
      "code": 6051,
      "name": "IncorrectInstructionInPosition",
      "msg": "Wrong instruction at expected position"
    },
    {
      "code": 6052,
      "name": "NoPriceFound",
      "msg": "No price found"
    },
    {
      "code": 6053,
      "name": "InvalidTwapConfig",
      "msg": "Invalid Twap configuration: Twap is enabled but one of the enabled price doesn't have a twap"
    },
    {
      "code": 6054,
      "name": "InvalidPythPriceAccount",
      "msg": "Pyth price account does not match configuration"
    },
    {
      "code": 6055,
      "name": "InvalidSwitchboardAccount",
      "msg": "Switchboard account(s) do not match configuration"
    },
    {
      "code": 6056,
      "name": "InvalidScopePriceAccount",
      "msg": "Scope price account does not match configuration"
    },
    {
      "code": 6057,
      "name": "ObligationCollateralLtvZero",
      "msg": "The obligation has one collateral with an LTV set to 0. Withdraw it before withdrawing other collaterals"
    },
    {
      "code": 6058,
      "name": "InvalidObligationSeedsValue",
      "msg": "Seeds must be default pubkeys for tag 0, and mint addresses for tag 1 or 2"
    },
    {
      "code": 6059,
      "name": "DeprecatedInvalidObligationId",
      "msg": "[DEPRECATED] Obligation id must be 0"
    },
    {
      "code": 6060,
      "name": "InvalidBorrowRateCurvePoint",
      "msg": "Invalid borrow rate curve point"
    },
    {
      "code": 6061,
      "name": "InvalidUtilizationRate",
      "msg": "Invalid utilization rate"
    },
    {
      "code": 6062,
      "name": "CannotSocializeObligationWithCollateral",
      "msg": "Obligation hasn't been fully liquidated and debt cannot be socialized."
    },
    {
      "code": 6063,
      "name": "ObligationEmpty",
      "msg": "Obligation has no borrows or deposits."
    },
    {
      "code": 6064,
      "name": "WithdrawalCapReached",
      "msg": "Withdrawal cap is reached"
    },
    {
      "code": 6065,
      "name": "LastTimestampGreaterThanCurrent",
      "msg": "The last interval start timestamp is greater than the current timestamp"
    },
    {
      "code": 6066,
      "name": "LiquidationRewardTooSmall",
      "msg": "The reward amount is less than the minimum acceptable received liquidity"
    },
    {
      "code": 6067,
      "name": "IsolatedAssetTierViolation",
      "msg": "Isolated Asset Tier Violation"
    },
    {
      "code": 6068,
      "name": "InconsistentElevationGroup",
      "msg": "The obligation's elevation group and the reserve's are not the same"
    },
    {
      "code": 6069,
      "name": "InvalidElevationGroup",
      "msg": "The elevation group chosen for the reserve does not exist in the lending market"
    },
    {
      "code": 6070,
      "name": "InvalidElevationGroupConfig",
      "msg": "The elevation group updated has wrong parameters set"
    },
    {
      "code": 6071,
      "name": "UnhealthyElevationGroupLtv",
      "msg": "The current obligation must have most or all its debt repaid before changing the elevation group"
    },
    {
      "code": 6072,
      "name": "ElevationGroupNewLoansDisabled",
      "msg": "Elevation group does not accept any new loans or any new borrows/withdrawals"
    },
    {
      "code": 6073,
      "name": "ReserveDeprecated",
      "msg": "Reserve was deprecated, no longer usable"
    },
    {
      "code": 6074,
      "name": "ReferrerAccountNotInitialized",
      "msg": "Referrer account not initialized"
    },
    {
      "code": 6075,
      "name": "ReferrerAccountMintMissmatch",
      "msg": "Referrer account mint does not match the operation reserve mint"
    },
    {
      "code": 6076,
      "name": "ReferrerAccountWrongAddress",
      "msg": "Referrer account address is not a valid program address"
    },
    {
      "code": 6077,
      "name": "ReferrerAccountReferrerMissmatch",
      "msg": "Referrer account referrer does not match the owner referrer"
    },
    {
      "code": 6078,
      "name": "ReferrerAccountMissing",
      "msg": "Referrer account missing for obligation with referrer"
    },
    {
      "code": 6079,
      "name": "InsufficientReferralFeesToRedeem",
      "msg": "Insufficient referral fees to claim or no liquidity available"
    },
    {
      "code": 6080,
      "name": "CpiDisabled",
      "msg": "CPI disabled for this instruction"
    },
    {
      "code": 6081,
      "name": "ShortUrlNotAsciiAlphanumeric",
      "msg": "Referrer short_url is not ascii alphanumeric"
    },
    {
      "code": 6082,
      "name": "ReserveObsolete",
      "msg": "Reserve is marked as obsolete"
    },
    {
      "code": 6083,
      "name": "ElevationGroupAlreadyActivated",
      "msg": "Obligation already part of the same elevation group"
    },
    {
      "code": 6084,
      "name": "ObligationInDeprecatedReserve",
      "msg": "Obligation has a deposit in a deprecated reserve"
    },
    {
      "code": 6085,
      "name": "ReferrerStateOwnerMismatch",
      "msg": "Referrer state owner does not match the given signer"
    },
    {
      "code": 6086,
      "name": "UserMetadataOwnerAlreadySet",
      "msg": "User metadata owner is already set"
    },
    {
      "code": 6087,
      "name": "CollateralNonLiquidatable",
      "msg": "This collateral cannot be liquidated (LTV set to 0)"
    },
    {
      "code": 6088,
      "name": "BorrowingDisabled",
      "msg": "Borrowing is disabled"
    },
    {
      "code": 6089,
      "name": "BorrowLimitExceeded",
      "msg": "Cannot borrow above borrow limit"
    },
    {
      "code": 6090,
      "name": "DepositLimitExceeded",
      "msg": "Cannot deposit above deposit limit"
    },
    {
      "code": 6091,
      "name": "BorrowingDisabledOutsideElevationGroup",
      "msg": "Reserve does not accept any new borrows outside elevation group"
    },
    {
      "code": 6092,
      "name": "NetValueRemainingTooSmall",
      "msg": "Net value remaining too small"
    },
    {
      "code": 6093,
      "name": "WorseLTVBlocked",
      "msg": "Cannot get the obligation in a worse position"
    },
    {
      "code": 6094,
      "name": "LiabilitiesBiggerThanAssets",
      "msg": "Cannot have more liabilities than assets in a position"
    },
    {
      "code": 6095,
      "name": "ReserveTokenBalanceMismatch",
      "msg": "Reserve state and token account cannot drift"
    },
    {
      "code": 6096,
      "name": "ReserveVaultBalanceMismatch",
      "msg": "Reserve token account has been unexpectedly modified"
    },
    {
      "code": 6097,
      "name": "ReserveAccountingMismatch",
      "msg": "Reserve internal state accounting has been unexpectedly modified"
    },
    {
      "code": 6098,
      "name": "BorrowingAboveUtilizationRateDisabled",
      "msg": "Borrowing above set utilization rate is disabled"
    },
    {
      "code": 6099,
      "name": "LiquidationBorrowFactorPriority",
      "msg": "Liquidation must prioritize the debt with the highest borrow factor"
    },
    {
      "code": 6100,
      "name": "LiquidationLowestLTVPriority",
      "msg": "Liquidation must prioritize the collateral with the lowest LTV"
    },
    {
      "code": 6101,
      "name": "ElevationGroupBorrowLimitExceeded",
      "msg": "Elevation group borrow limit exceeded"
    },
    {
      "code": 6102,
      "name": "ElevationGroupWithoutDebtReserve",
      "msg": "The elevation group does not have a debt reserve defined"
    },
    {
      "code": 6103,
      "name": "ElevationGroupMaxCollateralReserveZero",
      "msg": "The elevation group does not allow any collateral reserves"
    },
    {
      "code": 6104,
      "name": "ElevationGroupHasAnotherDebtReserve",
      "msg": "In elevation group attempt to borrow from a reserve that is not the debt reserve"
    },
    {
      "code": 6105,
      "name": "ElevationGroupDebtReserveAsCollateral",
      "msg": "The elevation group's debt reserve cannot be used as a collateral reserve"
    },
    {
      "code": 6106,
      "name": "ObligationCollateralExceedsElevationGroupLimit",
      "msg": "Obligation have more collateral than the maximum allowed by the elevation group"
    },
    {
      "code": 6107,
      "name": "ObligationElevationGroupMultipleDebtReserve",
      "msg": "Obligation is an elevation group but have more than one debt reserve"
    },
    {
      "code": 6108,
      "name": "UnsupportedTokenExtension",
      "msg": "Mint has a token (2022) extension that is not supported"
    },
    {
      "code": 6109,
      "name": "InvalidTokenAccount",
      "msg": "Can't have an spl token mint with a t22 account"
    },
    {
      "code": 6110,
      "name": "DepositDisabledOutsideElevationGroup",
      "msg": "Can't deposit into this reserve outside elevation group"
    },
    {
      "code": 6111,
      "name": "CannotCalculateReferralAmountDueToSlotsMismatch",
      "msg": "Cannot calculate referral amount due to slots mismatch"
    },
    {
      "code": 6112,
      "name": "ObligationOwnersMustMatch",
      "msg": "Obligation owners must match"
    },
    {
      "code": 6113,
      "name": "ObligationsMustMatch",
      "msg": "Obligations must match"
    },
    {
      "code": 6114,
      "name": "LendingMarketsMustMatch",
      "msg": "Lending markets must match"
    },
    {
      "code": 6115,
      "name": "ObligationCurrentlyMarkedForDeleveraging",
      "msg": "Obligation is already marked for deleveraging"
    },
    {
      "code": 6116,
      "name": "MaximumWithdrawValueZero",
      "msg": "Maximum withdrawable value of this collateral is zero, LTV needs improved"
    },
    {
      "code": 6117,
      "name": "ZeroMaxLtvAssetsInDeposits",
      "msg": "No max LTV 0 assets allowed in deposits for repay and withdraw"
    },
    {
      "code": 6118,
      "name": "MinLtvAssetsPriority",
      "msg": "The operation must prioritize the collateral with the lowest LTV"
    },
    {
      "code": 6119,
      "name": "WorseLTVThanUnhealthyLTV",
      "msg": "Cannot get the obligation liquidatable"
    },
    {
      "code": 6120,
      "name": "FarmAccountsMissing",
      "msg": "Farm accounts to refresh are missing"
    },
    {
      "code": 6121,
      "name": "RepayTooSmallForFullLiquidation",
      "msg": "Repay amount is too small to satisfy the mandatory full liquidation"
    },
    {
      "code": 6122,
      "name": "InsufficientRepayAmount",
      "msg": "Liquidator provided repay amount lower than required by liquidation rules"
    }
  ]
};

export const IDL: KaminoLending = {
  "version": "1.11.0",
  "name": "kamino_lending",
  "instructions": [
    {
      "name": "initLendingMarket",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quoteCurrency",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "updateLendingMarket",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u64"
        },
        {
          "name": "value",
          "type": {
            "array": [
              "u8",
              72
            ]
          }
        }
      ]
    },
    {
      "name": "updateLendingMarketOwner",
      "accounts": [
        {
          "name": "lendingMarketOwnerCached",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initReserve",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "initialLiquiditySource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initFarmsForReserve",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsGlobalConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmsVaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateReserveConfig",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u64"
        },
        {
          "name": "value",
          "type": "bytes"
        },
        {
          "name": "skipValidation",
          "type": "bool"
        }
      ]
    },
    {
      "name": "redeemFees",
      "accounts": [
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveSupplyLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawProtocolFee",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketOwnerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "socializeLoss",
      "accounts": [
        {
          "name": "riskCouncil",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "socializeLossV2",
      "accounts": [
        {
          "name": "socializeLossAccounts",
          "accounts": [
            {
              "name": "riskCouncil",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "markObligationForDeleveraging",
      "accounts": [
        {
          "name": "riskCouncil",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "autodeleverageTargetLtvPct",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshReserve",
      "accounts": [
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pythOracle",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "switchboardPriceOracle",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "switchboardTwapOracle",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "scopePrices",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "refreshReservesBatch",
      "accounts": [],
      "args": [
        {
          "name": "skipPriceUpdates",
          "type": "bool"
        }
      ]
    },
    {
      "name": "depositReserveLiquidity",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "redeemReserveCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initObligation",
      "accounts": [
        {
          "name": "obligationOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "feePayer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "seed1Account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "seed2Account",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ownerUserMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitObligationArgs"
          }
        }
      ]
    },
    {
      "name": "initObligationFarmsForReserve",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveFarmState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "obligationFarm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshObligationFarmsForReserve",
      "accounts": [
        {
          "name": "crank",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseAccounts",
          "accounts": [
            {
              "name": "obligation",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mode",
          "type": "u8"
        }
      ]
    },
    {
      "name": "refreshObligation",
      "accounts": [
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "depositObligationCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositObligationCollateralV2",
      "accounts": [
        {
          "name": "depositAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "depositReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveDestinationCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateralV2",
      "accounts": [
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrowObligationLiquidity",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "borrowReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrowReserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrowReserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrowObligationLiquidityV2",
      "accounts": [
        {
          "name": "borrowAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "borrowReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "borrowReserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "borrowReserveLiquidityFeeReceiver",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "referrerTokenState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repayObligationLiquidity",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repayObligationLiquidityV2",
      "accounts": [
        {
          "name": "repayAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repayAndWithdrawAndRedeem",
      "accounts": [
        {
          "name": "repayAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "collateralFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "debtFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "repayAmount",
          "type": "u64"
        },
        {
          "name": "withdrawCollateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositAndWithdraw",
      "accounts": [
        {
          "name": "depositAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveDestinationDepositCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "depositFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "withdrawFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "withdrawCollateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositReserveLiquidityAndObligationCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveDestinationDepositCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "placeholderUserDestinationCollateral",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositReserveLiquidityAndObligationCollateralV2",
      "accounts": [
        {
          "name": "depositAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveDestinationDepositCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateralAndRedeemReserveCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSourceCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "placeholderUserDestinationCollateral",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "liquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawObligationCollateralAndRedeemReserveCollateralV2",
      "accounts": [
        {
          "name": "withdrawAccounts",
          "accounts": [
            {
              "name": "owner",
              "isMut": true,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "reserveSourceCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "reserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "placeholderUserDestinationCollateral",
              "isMut": false,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "liquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "farmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collateralAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "liquidateObligationAndRedeemReserveCollateral",
      "accounts": [
        {
          "name": "liquidator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "repayReserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayReserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawReserveCollateralMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveCollateralSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveLiquiditySupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawReserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationCollateral",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "repayLiquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "withdrawLiquidityTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "minAcceptableReceivedLiquidityAmount",
          "type": "u64"
        },
        {
          "name": "maxAllowedLtvOverridePercent",
          "type": "u64"
        }
      ]
    },
    {
      "name": "liquidateObligationAndRedeemReserveCollateralV2",
      "accounts": [
        {
          "name": "liquidationAccounts",
          "accounts": [
            {
              "name": "liquidator",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "lendingMarket",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "lendingMarketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "repayReserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayReserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveLiquidityMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawReserveCollateralMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveCollateralSupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveLiquiditySupply",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "withdrawReserveLiquidityFeeReceiver",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userSourceLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationCollateral",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userDestinationLiquidity",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "repayLiquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "withdrawLiquidityTokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "instructionSysvarAccount",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "collateralFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "debtFarmsAccounts",
          "accounts": [
            {
              "name": "obligationFarmUserState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            },
            {
              "name": "reserveFarmState",
              "isMut": true,
              "isSigner": false,
              "isOptional": true
            }
          ]
        },
        {
          "name": "farmsProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "minAcceptableReceivedLiquidityAmount",
          "type": "u64"
        },
        {
          "name": "maxAllowedLtvOverridePercent",
          "type": "u64"
        }
      ]
    },
    {
      "name": "flashRepayReserveLiquidity",
      "accounts": [
        {
          "name": "userTransferAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "referrerAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "sysvarInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        },
        {
          "name": "borrowInstructionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "flashBorrowReserveLiquidity",
      "accounts": [
        {
          "name": "userTransferAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSourceLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDestinationLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityFeeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "referrerAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "sysvarInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "requestElevationGroup",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "elevationGroup",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initReferrerTokenState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initUserMetadata",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "feePayer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerUserMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userLookupTable",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "withdrawReferrerFees",
      "accounts": [
        {
          "name": "referrer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrerTokenState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveLiquidityMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveSupplyLiquidity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lendingMarketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initReferrerStateAndShortUrl",
      "accounts": [
        {
          "name": "referrer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrerState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerShortUrl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerUserMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shortUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteReferrerStateAndShortUrl",
      "accounts": [
        {
          "name": "referrer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "referrerState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shortUrl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "idlMissingTypes",
      "accounts": [
        {
          "name": "lendingMarketOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lendingMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "reserveFarmKind",
          "type": {
            "defined": "ReserveFarmKind"
          }
        },
        {
          "name": "assetTier",
          "type": {
            "defined": "AssetTier"
          }
        },
        {
          "name": "feeCalculation",
          "type": {
            "defined": "FeeCalculation"
          }
        },
        {
          "name": "reserveStatus",
          "type": {
            "defined": "ReserveStatus"
          }
        },
        {
          "name": "updateConfigMode",
          "type": {
            "defined": "UpdateConfigMode"
          }
        },
        {
          "name": "updateLendingMarketConfigValue",
          "type": {
            "defined": "UpdateLendingMarketConfigValue"
          }
        },
        {
          "name": "updateLendingMarketConfigMode",
          "type": {
            "defined": "UpdateLendingMarketMode"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userId",
            "type": "u64"
          },
          {
            "name": "farmState",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "isFarmDelegated",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "rewardsTallyScaled",
            "type": {
              "array": [
                "u128",
                10
              ]
            }
          },
          {
            "name": "rewardsIssuedUnclaimed",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "lastClaimTs",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "activeStakeScaled",
            "type": "u128"
          },
          {
            "name": "pendingDepositStakeScaled",
            "type": "u128"
          },
          {
            "name": "pendingDepositStakeTs",
            "type": "u64"
          },
          {
            "name": "pendingWithdrawalUnstakeScaled",
            "type": "u128"
          },
          {
            "name": "pendingWithdrawalUnstakeTs",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u64"
          },
          {
            "name": "delegatee",
            "type": "publicKey"
          },
          {
            "name": "lastStakeTs",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                50
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lendingMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u64"
          },
          {
            "name": "lendingMarketOwner",
            "type": "publicKey"
          },
          {
            "name": "lendingMarketOwnerCached",
            "type": "publicKey"
          },
          {
            "name": "quoteCurrency",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "referralFeeBps",
            "type": "u16"
          },
          {
            "name": "emergencyMode",
            "type": "u8"
          },
          {
            "name": "autodeleverageEnabled",
            "type": "u8"
          },
          {
            "name": "borrowDisabled",
            "type": "u8"
          },
          {
            "name": "priceRefreshTriggerToMaxAgePct",
            "type": "u8"
          },
          {
            "name": "liquidationMaxDebtCloseFactorPct",
            "type": "u8"
          },
          {
            "name": "insolvencyRiskUnhealthyLtvPct",
            "type": "u8"
          },
          {
            "name": "minFullLiquidationValueThreshold",
            "type": "u64"
          },
          {
            "name": "maxLiquidatableDebtMarketValueAtOnce",
            "type": "u64"
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "globalAllowedBorrowValue",
            "type": "u64"
          },
          {
            "name": "riskCouncil",
            "type": "publicKey"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "elevationGroups",
            "type": {
              "array": [
                {
                  "defined": "ElevationGroup"
                },
                32
              ]
            }
          },
          {
            "name": "elevationGroupPadding",
            "type": {
              "array": [
                "u64",
                90
              ]
            }
          },
          {
            "name": "minNetValueInObligationSf",
            "type": "u128"
          },
          {
            "name": "minValueSkipLiquidationLtvChecks",
            "type": "u64"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "minValueSkipLiquidationBfChecks",
            "type": "u64"
          },
          {
            "name": "individualAutodeleverageMarginCallPeriodSecs",
            "type": "u64"
          },
          {
            "name": "minInitialDepositAmount",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                170
              ]
            }
          }
        ]
      }
    },
    {
      "name": "obligation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "lendingMarket",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "deposits",
            "type": {
              "array": [
                {
                  "defined": "ObligationCollateral"
                },
                8
              ]
            }
          },
          {
            "name": "lowestReserveDepositLiquidationLtv",
            "type": "u64"
          },
          {
            "name": "depositedValueSf",
            "type": "u128"
          },
          {
            "name": "borrows",
            "type": {
              "array": [
                {
                  "defined": "ObligationLiquidity"
                },
                5
              ]
            }
          },
          {
            "name": "borrowFactorAdjustedDebtValueSf",
            "type": "u128"
          },
          {
            "name": "borrowedAssetsMarketValueSf",
            "type": "u128"
          },
          {
            "name": "allowedBorrowValueSf",
            "type": "u128"
          },
          {
            "name": "unhealthyBorrowValueSf",
            "type": "u128"
          },
          {
            "name": "depositsAssetTiers",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "borrowsAssetTiers",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "elevationGroup",
            "type": "u8"
          },
          {
            "name": "numOfObsoleteReserves",
            "type": "u8"
          },
          {
            "name": "hasDebt",
            "type": "u8"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "borrowingDisabled",
            "type": "u8"
          },
          {
            "name": "autodeleverageTargetLtvPct",
            "type": "u8"
          },
          {
            "name": "lowestReserveDepositMaxLtvPct",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "highestBorrowFactorPct",
            "type": "u64"
          },
          {
            "name": "autodeleverageMarginCallStartedTimestamp",
            "type": "u64"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u64",
                125
              ]
            }
          }
        ]
      }
    },
    {
      "name": "referrerState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shortUrl",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "referrerTokenState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "amountUnclaimedSf",
            "type": "u128"
          },
          {
            "name": "amountCumulativeSf",
            "type": "u128"
          },
          {
            "name": "bump",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                31
              ]
            }
          }
        ]
      }
    },
    {
      "name": "shortUrl",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "shortUrl",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "userMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u64"
          },
          {
            "name": "userLookupTable",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                51
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "reserve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u64"
          },
          {
            "name": "lastUpdate",
            "type": {
              "defined": "LastUpdate"
            }
          },
          {
            "name": "lendingMarket",
            "type": "publicKey"
          },
          {
            "name": "farmCollateral",
            "type": "publicKey"
          },
          {
            "name": "farmDebt",
            "type": "publicKey"
          },
          {
            "name": "liquidity",
            "type": {
              "defined": "ReserveLiquidity"
            }
          },
          {
            "name": "reserveLiquidityPadding",
            "type": {
              "array": [
                "u64",
                150
              ]
            }
          },
          {
            "name": "collateral",
            "type": {
              "defined": "ReserveCollateral"
            }
          },
          {
            "name": "reserveCollateralPadding",
            "type": {
              "array": [
                "u64",
                150
              ]
            }
          },
          {
            "name": "config",
            "type": {
              "defined": "ReserveConfig"
            }
          },
          {
            "name": "configPadding",
            "type": {
              "array": [
                "u64",
                116
              ]
            }
          },
          {
            "name": "borrowedAmountOutsideElevationGroup",
            "type": "u64"
          },
          {
            "name": "borrowedAmountsAgainstThisReserveInElevationGroups",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                207
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "UpdateConfigMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UpdateLoanToValuePct"
          },
          {
            "name": "UpdateMaxLiquidationBonusBps"
          },
          {
            "name": "UpdateLiquidationThresholdPct"
          },
          {
            "name": "UpdateProtocolLiquidationFee"
          },
          {
            "name": "UpdateProtocolTakeRate"
          },
          {
            "name": "UpdateFeesBorrowFee"
          },
          {
            "name": "UpdateFeesFlashLoanFee"
          },
          {
            "name": "UpdateFeesReferralFeeBps"
          },
          {
            "name": "UpdateDepositLimit"
          },
          {
            "name": "UpdateBorrowLimit"
          },
          {
            "name": "UpdateTokenInfoLowerHeuristic"
          },
          {
            "name": "UpdateTokenInfoUpperHeuristic"
          },
          {
            "name": "UpdateTokenInfoExpHeuristic"
          },
          {
            "name": "UpdateTokenInfoTwapDivergence"
          },
          {
            "name": "UpdateTokenInfoScopeTwap"
          },
          {
            "name": "UpdateTokenInfoScopeChain"
          },
          {
            "name": "UpdateTokenInfoName"
          },
          {
            "name": "UpdateTokenInfoPriceMaxAge"
          },
          {
            "name": "UpdateTokenInfoTwapMaxAge"
          },
          {
            "name": "UpdateScopePriceFeed"
          },
          {
            "name": "UpdatePythPrice"
          },
          {
            "name": "UpdateSwitchboardFeed"
          },
          {
            "name": "UpdateSwitchboardTwapFeed"
          },
          {
            "name": "UpdateBorrowRateCurve"
          },
          {
            "name": "UpdateEntireReserveConfig"
          },
          {
            "name": "UpdateDebtWithdrawalCap"
          },
          {
            "name": "UpdateDepositWithdrawalCap"
          },
          {
            "name": "UpdateDebtWithdrawalCapCurrentTotal"
          },
          {
            "name": "UpdateDepositWithdrawalCapCurrentTotal"
          },
          {
            "name": "UpdateBadDebtLiquidationBonusBps"
          },
          {
            "name": "UpdateMinLiquidationBonusBps"
          },
          {
            "name": "UpdateDeleveragingMarginCallPeriod"
          },
          {
            "name": "UpdateBorrowFactor"
          },
          {
            "name": "UpdateAssetTier"
          },
          {
            "name": "UpdateElevationGroup"
          },
          {
            "name": "UpdateDeleveragingThresholdDecreaseBpsPerDay"
          },
          {
            "name": "DeprecatedUpdateMultiplierSideBoost"
          },
          {
            "name": "DeprecatedUpdateMultiplierTagBoost"
          },
          {
            "name": "UpdateReserveStatus"
          },
          {
            "name": "UpdateFarmCollateral"
          },
          {
            "name": "UpdateFarmDebt"
          },
          {
            "name": "UpdateDisableUsageAsCollateralOutsideEmode"
          },
          {
            "name": "UpdateBlockBorrowingAboveUtilizationPct"
          },
          {
            "name": "UpdateBlockPriceUsage"
          },
          {
            "name": "UpdateBorrowLimitOutsideElevationGroup"
          },
          {
            "name": "UpdateBorrowLimitsInElevationGroupAgainstThisReserve"
          },
          {
            "name": "UpdateHostFixedInterestRateBps"
          },
          {
            "name": "UpdateAutodeleverageEnabled"
          },
          {
            "name": "UpdateDeleveragingBonusIncreaseBpsPerDay"
          }
        ]
      }
    },
    {
      "name": "UpdateLendingMarketConfigValue",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bool",
            "fields": [
              "bool"
            ]
          },
          {
            "name": "U8",
            "fields": [
              "u8"
            ]
          },
          {
            "name": "U8Array",
            "fields": [
              {
                "array": [
                  "u8",
                  8
                ]
              }
            ]
          },
          {
            "name": "U16",
            "fields": [
              "u16"
            ]
          },
          {
            "name": "U64",
            "fields": [
              "u64"
            ]
          },
          {
            "name": "U128",
            "fields": [
              "u128"
            ]
          },
          {
            "name": "Pubkey",
            "fields": [
              "publicKey"
            ]
          },
          {
            "name": "ElevationGroup",
            "fields": [
              {
                "defined": "ElevationGroup"
              }
            ]
          },
          {
            "name": "Name",
            "fields": [
              {
                "array": [
                  "u8",
                  32
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "name": "UpdateLendingMarketMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UpdateOwner"
          },
          {
            "name": "UpdateEmergencyMode"
          },
          {
            "name": "UpdateLiquidationCloseFactor"
          },
          {
            "name": "UpdateLiquidationMaxValue"
          },
          {
            "name": "DeprecatedUpdateGlobalUnhealthyBorrow"
          },
          {
            "name": "UpdateGlobalAllowedBorrow"
          },
          {
            "name": "UpdateRiskCouncil"
          },
          {
            "name": "UpdateMinFullLiquidationThreshold"
          },
          {
            "name": "UpdateInsolvencyRiskLtv"
          },
          {
            "name": "UpdateElevationGroup"
          },
          {
            "name": "UpdateReferralFeeBps"
          },
          {
            "name": "DeprecatedUpdateMultiplierPoints"
          },
          {
            "name": "UpdatePriceRefreshTriggerToMaxAgePct"
          },
          {
            "name": "UpdateAutodeleverageEnabled"
          },
          {
            "name": "UpdateBorrowingDisabled"
          },
          {
            "name": "UpdateMinNetValueObligationPostAction"
          },
          {
            "name": "UpdateMinValueLtvSkipPriorityLiqCheck"
          },
          {
            "name": "UpdateMinValueBfSkipPriorityLiqCheck"
          },
          {
            "name": "UpdatePaddingFields"
          },
          {
            "name": "UpdateName"
          },
          {
            "name": "UpdateIndividualAutodeleverageMarginCallPeriodSecs"
          },
          {
            "name": "UpdateInitialDepositAmount"
          }
        ]
      }
    },
    {
      "name": "LastUpdate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "stale",
            "type": "u8"
          },
          {
            "name": "priceStatus",
            "type": "u8"
          },
          {
            "name": "placeholder",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ElevationGroup",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "ltvPct",
            "type": "u8"
          },
          {
            "name": "liquidationThresholdPct",
            "type": "u8"
          },
          {
            "name": "allowNewLoans",
            "type": "u8"
          },
          {
            "name": "maxReservesAsCollateral",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": "u8"
          },
          {
            "name": "debtReserve",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "InitObligationArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u8"
          },
          {
            "name": "id",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ObligationCollateral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "depositReserve",
            "type": "publicKey"
          },
          {
            "name": "depositedAmount",
            "type": "u64"
          },
          {
            "name": "marketValueSf",
            "type": "u128"
          },
          {
            "name": "borrowedAmountAgainstThisCollateralInElevationGroup",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                9
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ObligationLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "borrowReserve",
            "type": "publicKey"
          },
          {
            "name": "cumulativeBorrowRateBsf",
            "type": {
              "defined": "BigFractionBytes"
            }
          },
          {
            "name": "padding",
            "type": "u64"
          },
          {
            "name": "borrowedAmountSf",
            "type": "u128"
          },
          {
            "name": "marketValueSf",
            "type": "u128"
          },
          {
            "name": "borrowFactorAdjustedMarketValueSf",
            "type": "u128"
          },
          {
            "name": "borrowedAmountOutsideElevationGroups",
            "type": "u64"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "AssetTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Regular"
          },
          {
            "name": "IsolatedCollateral"
          },
          {
            "name": "IsolatedDebt"
          }
        ]
      }
    },
    {
      "name": "BigFractionBytes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeCalculation",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Exclusive"
          },
          {
            "name": "Inclusive"
          }
        ]
      }
    },
    {
      "name": "ReserveCollateral",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "type": "publicKey"
          },
          {
            "name": "mintTotalSupply",
            "type": "u64"
          },
          {
            "name": "supplyVault",
            "type": "publicKey"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReserveConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "assetTier",
            "type": "u8"
          },
          {
            "name": "hostFixedInterestRateBps",
            "type": "u16"
          },
          {
            "name": "reserved2",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "reserved3",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "protocolTakeRatePct",
            "type": "u8"
          },
          {
            "name": "protocolLiquidationFeePct",
            "type": "u8"
          },
          {
            "name": "loanToValuePct",
            "type": "u8"
          },
          {
            "name": "liquidationThresholdPct",
            "type": "u8"
          },
          {
            "name": "minLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "maxLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "badDebtLiquidationBonusBps",
            "type": "u16"
          },
          {
            "name": "deleveragingMarginCallPeriodSecs",
            "type": "u64"
          },
          {
            "name": "deleveragingThresholdDecreaseBpsPerDay",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": {
              "defined": "ReserveFees"
            }
          },
          {
            "name": "borrowRateCurve",
            "type": {
              "defined": "BorrowRateCurve"
            }
          },
          {
            "name": "borrowFactorPct",
            "type": "u64"
          },
          {
            "name": "depositLimit",
            "type": "u64"
          },
          {
            "name": "borrowLimit",
            "type": "u64"
          },
          {
            "name": "tokenInfo",
            "type": {
              "defined": "TokenInfo"
            }
          },
          {
            "name": "depositWithdrawalCap",
            "type": {
              "defined": "WithdrawalCaps"
            }
          },
          {
            "name": "debtWithdrawalCap",
            "type": {
              "defined": "WithdrawalCaps"
            }
          },
          {
            "name": "elevationGroups",
            "type": {
              "array": [
                "u8",
                20
              ]
            }
          },
          {
            "name": "disableUsageAsCollOutsideEmode",
            "type": "u8"
          },
          {
            "name": "utilizationLimitBlockBorrowingAbovePct",
            "type": "u8"
          },
          {
            "name": "autodeleverageEnabled",
            "type": "u8"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "borrowLimitOutsideElevationGroup",
            "type": "u64"
          },
          {
            "name": "borrowLimitAgainstThisCollateralInElevationGroup",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          },
          {
            "name": "deleveragingBonusIncreaseBpsPerDay",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ReserveFarmKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Collateral"
          },
          {
            "name": "Debt"
          }
        ]
      }
    },
    {
      "name": "ReserveFees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "borrowFeeSf",
            "type": "u64"
          },
          {
            "name": "flashLoanFeeSf",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReserveLiquidity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPubkey",
            "type": "publicKey"
          },
          {
            "name": "supplyVault",
            "type": "publicKey"
          },
          {
            "name": "feeVault",
            "type": "publicKey"
          },
          {
            "name": "availableAmount",
            "type": "u64"
          },
          {
            "name": "borrowedAmountSf",
            "type": "u128"
          },
          {
            "name": "marketPriceSf",
            "type": "u128"
          },
          {
            "name": "marketPriceLastUpdatedTs",
            "type": "u64"
          },
          {
            "name": "mintDecimals",
            "type": "u64"
          },
          {
            "name": "depositLimitCrossedTimestamp",
            "type": "u64"
          },
          {
            "name": "borrowLimitCrossedTimestamp",
            "type": "u64"
          },
          {
            "name": "cumulativeBorrowRateBsf",
            "type": {
              "defined": "BigFractionBytes"
            }
          },
          {
            "name": "accumulatedProtocolFeesSf",
            "type": "u128"
          },
          {
            "name": "accumulatedReferrerFeesSf",
            "type": "u128"
          },
          {
            "name": "pendingReferrerFeesSf",
            "type": "u128"
          },
          {
            "name": "absoluteReferralRateSf",
            "type": "u128"
          },
          {
            "name": "tokenProgram",
            "type": "publicKey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u64",
                51
              ]
            }
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ReserveStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Active"
          },
          {
            "name": "Obsolete"
          },
          {
            "name": "Hidden"
          }
        ]
      }
    },
    {
      "name": "WithdrawalCaps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "configCapacity",
            "type": "i64"
          },
          {
            "name": "currentTotal",
            "type": "i64"
          },
          {
            "name": "lastIntervalStartTimestamp",
            "type": "u64"
          },
          {
            "name": "configIntervalLengthSeconds",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceHeuristic",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lower",
            "type": "u64"
          },
          {
            "name": "upper",
            "type": "u64"
          },
          {
            "name": "exp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PythConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ScopeConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceFeed",
            "type": "publicKey"
          },
          {
            "name": "priceChain",
            "type": {
              "array": [
                "u16",
                4
              ]
            }
          },
          {
            "name": "twapChain",
            "type": {
              "array": [
                "u16",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "SwitchboardConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceAggregator",
            "type": "publicKey"
          },
          {
            "name": "twapAggregator",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "TokenInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "heuristic",
            "type": {
              "defined": "PriceHeuristic"
            }
          },
          {
            "name": "maxTwapDivergenceBps",
            "type": "u64"
          },
          {
            "name": "maxAgePriceSeconds",
            "type": "u64"
          },
          {
            "name": "maxAgeTwapSeconds",
            "type": "u64"
          },
          {
            "name": "scopeConfiguration",
            "type": {
              "defined": "ScopeConfiguration"
            }
          },
          {
            "name": "switchboardConfiguration",
            "type": {
              "defined": "SwitchboardConfiguration"
            }
          },
          {
            "name": "pythConfiguration",
            "type": {
              "defined": "PythConfiguration"
            }
          },
          {
            "name": "blockPriceUsage",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u64",
                19
              ]
            }
          }
        ]
      }
    },
    {
      "name": "BorrowRateCurve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "points",
            "type": {
              "array": [
                {
                  "defined": "CurvePoint"
                },
                11
              ]
            }
          }
        ]
      }
    },
    {
      "name": "CurvePoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "utilizationRateBps",
            "type": "u32"
          },
          {
            "name": "borrowRateBps",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidMarketAuthority",
      "msg": "Market authority is invalid"
    },
    {
      "code": 6001,
      "name": "InvalidMarketOwner",
      "msg": "Market owner is invalid"
    },
    {
      "code": 6002,
      "name": "InvalidAccountOwner",
      "msg": "Input account owner is not the program address"
    },
    {
      "code": 6003,
      "name": "InvalidAmount",
      "msg": "Input amount is invalid"
    },
    {
      "code": 6004,
      "name": "InvalidConfig",
      "msg": "Input config value is invalid"
    },
    {
      "code": 6005,
      "name": "InvalidSigner",
      "msg": "Input account must be a signer"
    },
    {
      "code": 6006,
      "name": "InvalidAccountInput",
      "msg": "Invalid account input"
    },
    {
      "code": 6007,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6008,
      "name": "InsufficientLiquidity",
      "msg": "Insufficient liquidity available"
    },
    {
      "code": 6009,
      "name": "ReserveStale",
      "msg": "Reserve state needs to be refreshed"
    },
    {
      "code": 6010,
      "name": "WithdrawTooSmall",
      "msg": "Withdraw amount too small"
    },
    {
      "code": 6011,
      "name": "WithdrawTooLarge",
      "msg": "Withdraw amount too large"
    },
    {
      "code": 6012,
      "name": "BorrowTooSmall",
      "msg": "Borrow amount too small to receive liquidity after fees"
    },
    {
      "code": 6013,
      "name": "BorrowTooLarge",
      "msg": "Borrow amount too large for deposited collateral"
    },
    {
      "code": 6014,
      "name": "RepayTooSmall",
      "msg": "Repay amount too small to transfer liquidity"
    },
    {
      "code": 6015,
      "name": "LiquidationTooSmall",
      "msg": "Liquidation amount too small to receive collateral"
    },
    {
      "code": 6016,
      "name": "ObligationHealthy",
      "msg": "Cannot liquidate healthy obligations"
    },
    {
      "code": 6017,
      "name": "ObligationStale",
      "msg": "Obligation state needs to be refreshed"
    },
    {
      "code": 6018,
      "name": "ObligationReserveLimit",
      "msg": "Obligation reserve limit exceeded"
    },
    {
      "code": 6019,
      "name": "InvalidObligationOwner",
      "msg": "Obligation owner is invalid"
    },
    {
      "code": 6020,
      "name": "ObligationDepositsEmpty",
      "msg": "Obligation deposits are empty"
    },
    {
      "code": 6021,
      "name": "ObligationBorrowsEmpty",
      "msg": "Obligation borrows are empty"
    },
    {
      "code": 6022,
      "name": "ObligationDepositsZero",
      "msg": "Obligation deposits have zero value"
    },
    {
      "code": 6023,
      "name": "ObligationBorrowsZero",
      "msg": "Obligation borrows have zero value"
    },
    {
      "code": 6024,
      "name": "InvalidObligationCollateral",
      "msg": "Invalid obligation collateral"
    },
    {
      "code": 6025,
      "name": "InvalidObligationLiquidity",
      "msg": "Invalid obligation liquidity"
    },
    {
      "code": 6026,
      "name": "ObligationCollateralEmpty",
      "msg": "Obligation collateral is empty"
    },
    {
      "code": 6027,
      "name": "ObligationLiquidityEmpty",
      "msg": "Obligation liquidity is empty"
    },
    {
      "code": 6028,
      "name": "NegativeInterestRate",
      "msg": "Interest rate is negative"
    },
    {
      "code": 6029,
      "name": "InvalidOracleConfig",
      "msg": "Input oracle config is invalid"
    },
    {
      "code": 6030,
      "name": "InsufficientProtocolFeesToRedeem",
      "msg": "Insufficient protocol fees to claim or no liquidity available"
    },
    {
      "code": 6031,
      "name": "FlashBorrowCpi",
      "msg": "No cpi flash borrows allowed"
    },
    {
      "code": 6032,
      "name": "NoFlashRepayFound",
      "msg": "No corresponding repay found for flash borrow"
    },
    {
      "code": 6033,
      "name": "InvalidFlashRepay",
      "msg": "Invalid repay found"
    },
    {
      "code": 6034,
      "name": "FlashRepayCpi",
      "msg": "No cpi flash repays allowed"
    },
    {
      "code": 6035,
      "name": "MultipleFlashBorrows",
      "msg": "Multiple flash borrows not allowed in the same transaction"
    },
    {
      "code": 6036,
      "name": "FlashLoansDisabled",
      "msg": "Flash loans are disabled for this reserve"
    },
    {
      "code": 6037,
      "name": "SwitchboardV2Error",
      "msg": "Switchboard error"
    },
    {
      "code": 6038,
      "name": "CouldNotDeserializeScope",
      "msg": "Cannot deserialize the scope price account"
    },
    {
      "code": 6039,
      "name": "PriceTooOld",
      "msg": "Price too old"
    },
    {
      "code": 6040,
      "name": "PriceTooDivergentFromTwap",
      "msg": "Price too divergent from twap"
    },
    {
      "code": 6041,
      "name": "InvalidTwapPrice",
      "msg": "Invalid twap price"
    },
    {
      "code": 6042,
      "name": "GlobalEmergencyMode",
      "msg": "Emergency mode is enabled"
    },
    {
      "code": 6043,
      "name": "InvalidFlag",
      "msg": "Invalid lending market config"
    },
    {
      "code": 6044,
      "name": "PriceNotValid",
      "msg": "Price is not valid"
    },
    {
      "code": 6045,
      "name": "PriceIsBiggerThanHeuristic",
      "msg": "Price is bigger than allowed by heuristic"
    },
    {
      "code": 6046,
      "name": "PriceIsLowerThanHeuristic",
      "msg": "Price lower than allowed by heuristic"
    },
    {
      "code": 6047,
      "name": "PriceIsZero",
      "msg": "Price is zero"
    },
    {
      "code": 6048,
      "name": "PriceConfidenceTooWide",
      "msg": "Price confidence too wide"
    },
    {
      "code": 6049,
      "name": "IntegerOverflow",
      "msg": "Conversion between integers failed"
    },
    {
      "code": 6050,
      "name": "NoFarmForReserve",
      "msg": "This reserve does not have a farm"
    },
    {
      "code": 6051,
      "name": "IncorrectInstructionInPosition",
      "msg": "Wrong instruction at expected position"
    },
    {
      "code": 6052,
      "name": "NoPriceFound",
      "msg": "No price found"
    },
    {
      "code": 6053,
      "name": "InvalidTwapConfig",
      "msg": "Invalid Twap configuration: Twap is enabled but one of the enabled price doesn't have a twap"
    },
    {
      "code": 6054,
      "name": "InvalidPythPriceAccount",
      "msg": "Pyth price account does not match configuration"
    },
    {
      "code": 6055,
      "name": "InvalidSwitchboardAccount",
      "msg": "Switchboard account(s) do not match configuration"
    },
    {
      "code": 6056,
      "name": "InvalidScopePriceAccount",
      "msg": "Scope price account does not match configuration"
    },
    {
      "code": 6057,
      "name": "ObligationCollateralLtvZero",
      "msg": "The obligation has one collateral with an LTV set to 0. Withdraw it before withdrawing other collaterals"
    },
    {
      "code": 6058,
      "name": "InvalidObligationSeedsValue",
      "msg": "Seeds must be default pubkeys for tag 0, and mint addresses for tag 1 or 2"
    },
    {
      "code": 6059,
      "name": "DeprecatedInvalidObligationId",
      "msg": "[DEPRECATED] Obligation id must be 0"
    },
    {
      "code": 6060,
      "name": "InvalidBorrowRateCurvePoint",
      "msg": "Invalid borrow rate curve point"
    },
    {
      "code": 6061,
      "name": "InvalidUtilizationRate",
      "msg": "Invalid utilization rate"
    },
    {
      "code": 6062,
      "name": "CannotSocializeObligationWithCollateral",
      "msg": "Obligation hasn't been fully liquidated and debt cannot be socialized."
    },
    {
      "code": 6063,
      "name": "ObligationEmpty",
      "msg": "Obligation has no borrows or deposits."
    },
    {
      "code": 6064,
      "name": "WithdrawalCapReached",
      "msg": "Withdrawal cap is reached"
    },
    {
      "code": 6065,
      "name": "LastTimestampGreaterThanCurrent",
      "msg": "The last interval start timestamp is greater than the current timestamp"
    },
    {
      "code": 6066,
      "name": "LiquidationRewardTooSmall",
      "msg": "The reward amount is less than the minimum acceptable received liquidity"
    },
    {
      "code": 6067,
      "name": "IsolatedAssetTierViolation",
      "msg": "Isolated Asset Tier Violation"
    },
    {
      "code": 6068,
      "name": "InconsistentElevationGroup",
      "msg": "The obligation's elevation group and the reserve's are not the same"
    },
    {
      "code": 6069,
      "name": "InvalidElevationGroup",
      "msg": "The elevation group chosen for the reserve does not exist in the lending market"
    },
    {
      "code": 6070,
      "name": "InvalidElevationGroupConfig",
      "msg": "The elevation group updated has wrong parameters set"
    },
    {
      "code": 6071,
      "name": "UnhealthyElevationGroupLtv",
      "msg": "The current obligation must have most or all its debt repaid before changing the elevation group"
    },
    {
      "code": 6072,
      "name": "ElevationGroupNewLoansDisabled",
      "msg": "Elevation group does not accept any new loans or any new borrows/withdrawals"
    },
    {
      "code": 6073,
      "name": "ReserveDeprecated",
      "msg": "Reserve was deprecated, no longer usable"
    },
    {
      "code": 6074,
      "name": "ReferrerAccountNotInitialized",
      "msg": "Referrer account not initialized"
    },
    {
      "code": 6075,
      "name": "ReferrerAccountMintMissmatch",
      "msg": "Referrer account mint does not match the operation reserve mint"
    },
    {
      "code": 6076,
      "name": "ReferrerAccountWrongAddress",
      "msg": "Referrer account address is not a valid program address"
    },
    {
      "code": 6077,
      "name": "ReferrerAccountReferrerMissmatch",
      "msg": "Referrer account referrer does not match the owner referrer"
    },
    {
      "code": 6078,
      "name": "ReferrerAccountMissing",
      "msg": "Referrer account missing for obligation with referrer"
    },
    {
      "code": 6079,
      "name": "InsufficientReferralFeesToRedeem",
      "msg": "Insufficient referral fees to claim or no liquidity available"
    },
    {
      "code": 6080,
      "name": "CpiDisabled",
      "msg": "CPI disabled for this instruction"
    },
    {
      "code": 6081,
      "name": "ShortUrlNotAsciiAlphanumeric",
      "msg": "Referrer short_url is not ascii alphanumeric"
    },
    {
      "code": 6082,
      "name": "ReserveObsolete",
      "msg": "Reserve is marked as obsolete"
    },
    {
      "code": 6083,
      "name": "ElevationGroupAlreadyActivated",
      "msg": "Obligation already part of the same elevation group"
    },
    {
      "code": 6084,
      "name": "ObligationInDeprecatedReserve",
      "msg": "Obligation has a deposit in a deprecated reserve"
    },
    {
      "code": 6085,
      "name": "ReferrerStateOwnerMismatch",
      "msg": "Referrer state owner does not match the given signer"
    },
    {
      "code": 6086,
      "name": "UserMetadataOwnerAlreadySet",
      "msg": "User metadata owner is already set"
    },
    {
      "code": 6087,
      "name": "CollateralNonLiquidatable",
      "msg": "This collateral cannot be liquidated (LTV set to 0)"
    },
    {
      "code": 6088,
      "name": "BorrowingDisabled",
      "msg": "Borrowing is disabled"
    },
    {
      "code": 6089,
      "name": "BorrowLimitExceeded",
      "msg": "Cannot borrow above borrow limit"
    },
    {
      "code": 6090,
      "name": "DepositLimitExceeded",
      "msg": "Cannot deposit above deposit limit"
    },
    {
      "code": 6091,
      "name": "BorrowingDisabledOutsideElevationGroup",
      "msg": "Reserve does not accept any new borrows outside elevation group"
    },
    {
      "code": 6092,
      "name": "NetValueRemainingTooSmall",
      "msg": "Net value remaining too small"
    },
    {
      "code": 6093,
      "name": "WorseLTVBlocked",
      "msg": "Cannot get the obligation in a worse position"
    },
    {
      "code": 6094,
      "name": "LiabilitiesBiggerThanAssets",
      "msg": "Cannot have more liabilities than assets in a position"
    },
    {
      "code": 6095,
      "name": "ReserveTokenBalanceMismatch",
      "msg": "Reserve state and token account cannot drift"
    },
    {
      "code": 6096,
      "name": "ReserveVaultBalanceMismatch",
      "msg": "Reserve token account has been unexpectedly modified"
    },
    {
      "code": 6097,
      "name": "ReserveAccountingMismatch",
      "msg": "Reserve internal state accounting has been unexpectedly modified"
    },
    {
      "code": 6098,
      "name": "BorrowingAboveUtilizationRateDisabled",
      "msg": "Borrowing above set utilization rate is disabled"
    },
    {
      "code": 6099,
      "name": "LiquidationBorrowFactorPriority",
      "msg": "Liquidation must prioritize the debt with the highest borrow factor"
    },
    {
      "code": 6100,
      "name": "LiquidationLowestLTVPriority",
      "msg": "Liquidation must prioritize the collateral with the lowest LTV"
    },
    {
      "code": 6101,
      "name": "ElevationGroupBorrowLimitExceeded",
      "msg": "Elevation group borrow limit exceeded"
    },
    {
      "code": 6102,
      "name": "ElevationGroupWithoutDebtReserve",
      "msg": "The elevation group does not have a debt reserve defined"
    },
    {
      "code": 6103,
      "name": "ElevationGroupMaxCollateralReserveZero",
      "msg": "The elevation group does not allow any collateral reserves"
    },
    {
      "code": 6104,
      "name": "ElevationGroupHasAnotherDebtReserve",
      "msg": "In elevation group attempt to borrow from a reserve that is not the debt reserve"
    },
    {
      "code": 6105,
      "name": "ElevationGroupDebtReserveAsCollateral",
      "msg": "The elevation group's debt reserve cannot be used as a collateral reserve"
    },
    {
      "code": 6106,
      "name": "ObligationCollateralExceedsElevationGroupLimit",
      "msg": "Obligation have more collateral than the maximum allowed by the elevation group"
    },
    {
      "code": 6107,
      "name": "ObligationElevationGroupMultipleDebtReserve",
      "msg": "Obligation is an elevation group but have more than one debt reserve"
    },
    {
      "code": 6108,
      "name": "UnsupportedTokenExtension",
      "msg": "Mint has a token (2022) extension that is not supported"
    },
    {
      "code": 6109,
      "name": "InvalidTokenAccount",
      "msg": "Can't have an spl token mint with a t22 account"
    },
    {
      "code": 6110,
      "name": "DepositDisabledOutsideElevationGroup",
      "msg": "Can't deposit into this reserve outside elevation group"
    },
    {
      "code": 6111,
      "name": "CannotCalculateReferralAmountDueToSlotsMismatch",
      "msg": "Cannot calculate referral amount due to slots mismatch"
    },
    {
      "code": 6112,
      "name": "ObligationOwnersMustMatch",
      "msg": "Obligation owners must match"
    },
    {
      "code": 6113,
      "name": "ObligationsMustMatch",
      "msg": "Obligations must match"
    },
    {
      "code": 6114,
      "name": "LendingMarketsMustMatch",
      "msg": "Lending markets must match"
    },
    {
      "code": 6115,
      "name": "ObligationCurrentlyMarkedForDeleveraging",
      "msg": "Obligation is already marked for deleveraging"
    },
    {
      "code": 6116,
      "name": "MaximumWithdrawValueZero",
      "msg": "Maximum withdrawable value of this collateral is zero, LTV needs improved"
    },
    {
      "code": 6117,
      "name": "ZeroMaxLtvAssetsInDeposits",
      "msg": "No max LTV 0 assets allowed in deposits for repay and withdraw"
    },
    {
      "code": 6118,
      "name": "MinLtvAssetsPriority",
      "msg": "The operation must prioritize the collateral with the lowest LTV"
    },
    {
      "code": 6119,
      "name": "WorseLTVThanUnhealthyLTV",
      "msg": "Cannot get the obligation liquidatable"
    },
    {
      "code": 6120,
      "name": "FarmAccountsMissing",
      "msg": "Farm accounts to refresh are missing"
    },
    {
      "code": 6121,
      "name": "RepayTooSmallForFullLiquidation",
      "msg": "Repay amount is too small to satisfy the mandatory full liquidation"
    },
    {
      "code": 6122,
      "name": "InsufficientRepayAmount",
      "msg": "Liquidator provided repay amount lower than required by liquidation rules"
    }
  ]
};
