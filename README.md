<p align="center">
    <img align="center" src="/src/logo.png" width="175"></img>
</p>

<h1 align="center">create-fvm-dapp</h1>

<div align="center">
    <img src="https://img.shields.io/badge/platform-filecoin-blue.svg?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/github/license/akhileshthite/create-fvm-dapp?color=orange&style=flat-square" alt="License">
    <img src="https://img.shields.io/github/v/release/akhileshthite/create-fvm-dapp?color=purple&style=flat-square" alt="Release">
    <img src="https://img.shields.io/npm/dw/create-fvm-dapp?style=flat-square" alt="Downloads">
</div><br>

A full-stack starter template with React & Hardhat to develop, deploy, and test Solidity smart contracts on the FEVM network. The starter kit also includes pre-installed `web3.storage`, `tailwindcss`, `web3.js`, etc. packages.

## 📺 Quickstart

<div align="center">
  <img src="/demo.gif" />
</div>

## 🛠️ Installation guide

### ⌛️ create-fvm-dapp command

Open up your terminal (or command prompt) and type the following command:

```sh
npx create-fvm-dapp <your-dapp-name>

# cd into the directory
cd <your-dapp-name>
```

> ⚠️ If you encounter any errors during package installation, please ensure that your `node.js` and `npm` versions are up-to-date.

### 🔑 Private key

Ensure you create a `.env` file in the `root` directory. Then paste your [Metamask private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in `.env` with the variable name `PRIVATE_KEY` as follows:

```sh
PRIVATE_KEY=1234
```

### ⚙️ Compile

Now, you can write your contracts in `./contracts/` directory, replace `Greeter.sol` with `<your-contracts>.sol` file. To write tests, go to `./test` directory and create `<your-contracts>.test.js`.

```sh
npx hardhat compile

# for testing the smart contracts
npx hardhat test
```

After successful compilation, the artifacts directory will be created in `./src/artifacts` with a JSON `/contracts/<your-contracts>.sol/<your-contracts>.json` containing ABI and Bytecode of your compiled smart contracts.

Please make the changes while [Importing](https://github.com/akhileshthite/create-fvm-dapp/blob/670b4561e7da5db6faa121f2664c427b8427da60/src/App.js#L9) the JSON in `./src/app.js`.

### ⛓️ Deploy

Before deploying the smart contracts, please make sure you have a `hyperspace testnet` in your Metamask wallet with sufficient funds, follow this [quickstart](https://github.com/filecoin-project/testnet-hyperspace#quickstart) guide if you do not have one.

Also, make changes in `./scripts/deploy.js` (replace the greeter contract name with `<your-contract-name>`).

For deploying the smart contracts to FEVM network, type the following command:

```sh
npx hardhat run --network hyperspace scripts/deploy.js

# mainnet: npx hardhat run --network filecoin_mainnet scripts/deploy.js
```

Copy-paste the deployed contract address [here](https://github.com/akhileshthite/create-fvm-dapp/blob/27af748b814f3e1448db710af03f39d12464cc20/src/App.js#L32)

```sh
📜 Contract deployed to: 0x...
```

### 💻 React client

start react app

```sh
npm start
# Starting the development server...
```

Please read the [hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) and [FVM documentation](https://docs.filecoin.io/developers/smart-contracts/filecoin-virtual-machine/) for more details.

## ⚖️ License

create-fvm-dapp is licensed under the [MIT License](https://github.com/akhileshthite/create-fvm-dapp/blob/main/LICENSE).

<hr>
Don't forget to leave a star ⭐️ ~ <a href="https://twitter.com/akhileshthite_" target="_blank"><img src="https://img.shields.io/twitter/follow/akhileshthite_?style=social" alt="twitter" /></a>
