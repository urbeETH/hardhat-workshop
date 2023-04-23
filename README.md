# Hardhat

Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. Get Solidity stack traces & console.log.

This project consists in a simple token contract that can be deployed to the Polygon Mumbai network.

## Quick start

1. Populate _.env_ file
   1. `ALCHEMY_API_KEY` - [Alchemy API Key](https://docs.alchemy.com/docs/alchemy-quickstart-guide#1key-create-an-alchemy-key)
   2. `WALLET_PRIVATE_KEY` - [How to export a Metamask account's private key](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)
   3. `POLYGONSCAN_API_KEY` - [Getting a Polygonscan API Key](https://docs.polygonscan.com/getting-started/viewing-api-usage-statistics)
2. Run `npm install` to install dependencies
3. Run `npm run compile` to compile the contracts
4. (optional) Run `npm run test` to check that all tests work properly
5. Run `npm run deploy:mumbai` to deploy the contract to the Polygon Mumbai network
   1. or `npm run deploy:localhost` to deploy the contract to the local Hardhat network
6. (optional) Run `npm run verify` to verify the contract on Etherscan (Polygon Mumbai)
7. Run `npm run transfer` to transfer some tokens to the address specified in _scripts/transfer_