# elysium-neuriio-launchpad

**Neuriio** bonding-curve token launchpad on **Kinetiq's Elysium testnet** (chain `99801`). Sign-in is through X. Each X account can launch one personal token named after that handle; four accounts can launch one token together as an FTF (Friends Turned Fam).

Part of [ElysiumForge Labs](https://github.com/ElysiumForge-Labs).

> **Independent research repository. Testnet only.** Not affiliated with, endorsed by, or sponsored by Kinetiq, Hyperliquid, or Neuriio product operators beyond this lab mirror. Testnet tokens, test USDC, and testnet HYPE have no value. A launched token is a meme — not equity, a share, or a claim on any person or company.

## How a launch works

1. A launch sells along a bonding curve priced in USDC.
2. When the curve sells out, raised USDC and remaining tokens move into a Uniswap V2 pool; liquidity tokens are burned.
3. Fees from the curve and pool are split among creators, stakers, the treasury, and a buyback wallet.
4. Staking a graduated token or `$NEURIIO` earns a share of those fees.

## Features

- Personal and FTF launches with X-based identity
- Bonding curve → Uniswap V2 graduation with burned LP
- Fee vault, staking, and `$NEURIIO` platform token
- Trade Arena escrow
- React + Vite web app (Privy auth)
- Keeper for live trades and protocol-fee payouts
- Supabase migrations and Edge Functions

## Layout

| Path | Contents |
| --- | --- |
| `src/launch/` | Bonding curve, registry, fee vault, launched tokens |
| `src/swap/` | Router and Uniswap V2 fork used after graduation |
| `src/stake/` | Staking, `$NEURIIO` minter, platform token |
| `src/arena/` | Trade Arena escrow |
| `src/testnet/` | Test USDC |
| `app/` | Web app (React, Vite, Privy, viem) |
| `keeper/` | Live-trade watcher and protocol-fee payouts |
| `supabase/` | Database migrations and Edge Functions |
| `script/` | Deploy and testnet scripts |
| `deployments/` | Testnet contract addresses |
| `test/` | Foundry tests (including internal audit and mainnet rehearsal) |
| `docs/` | Public documentation |
| `audit/` | Architecture and security audit notes |

## Stack

| Layer | Technology |
| --- | --- |
| Contracts | Foundry; Solidity 0.8.28 (launch/stake) and 0.5.16 (Uniswap V2 fork); EVM prague |
| App | React, Vite, Privy, viem, lightweight-charts |
| Keeper | Node.js |
| Backend | Supabase (Postgres + Edge Functions) |

## Getting started

### Prerequisites

- [Foundry](https://book.getfoundry.sh/)
- Node.js 22+
- npm

Populate Foundry `lib/` submodules before building contracts.

### Contracts

```bash
forge test
forge build
```

### App and keeper

```bash
npm --prefix keeper install && npm --prefix keeper test
cp app/.env.example app/.env.local   # set VITE_PRIVY_APP_ID and related vars
npm --prefix app install && npm --prefix app run dev
```

Build, deploy, and operations notes: [DEVELOPMENT.md](DEVELOPMENT.md).

## License

Contracts other than the swap fork are MIT. `src/swap/v2/` is a Uniswap v2-core fork under the license in `src/swap/v2/LICENSE`.
