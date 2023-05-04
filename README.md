# Hardhat

Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. Get Solidity stack
traces & console.log.

This project consists in a simple token contract that can be deployed to the Polygon Mumbai network.

## Quick start

1. Populate _.env_ file
    1. `ALCHEMY_API_KEY`
        - [Alchemy API Key](https://docs.alchemy.com/docs/alchemy-quickstart-guide#1key-create-an-alchemy-key)
    2. `WALLET_PRIVATE_KEY`
        - [How to export a Metamask account's private key](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)
    3. `POLYGONSCAN_API_KEY`
        - [Getting a Polygonscan API Key](https://docs.polygonscan.com/getting-started/viewing-api-usage-statistics)
2. Run `npm install` to install dependencies
3. Run `npm run compile` to compile the contracts
4. (optional) Run `npm run test` to check that all tests work properly
5. Run `npm run deploy:mumbai` to deploy the contract to the Polygon Mumbai network
    1. or `npm run deploy:localhost` to deploy the contract to the local Hardhat network
6. (optional) Run `npm run verify` to verify the contract on Etherscan (Polygon Mumbai)
7. Run `npm run transfer` to transfer some tokens to the address specified in _scripts/transfer_

## Step-by-step guide

Follow this guide to recreate the repo step-by-step.

1. Assuming you are in a new (and clean) folder, the first thing to do is **initializing a new npm project**. You can do that using
   the CLI `npm init -y`. This command will create a _package.json_ file with a simple setup and configuration that you
   will be
   able to edit later.
2. Let's also **install and initialize our hardhat environment**. To install and use the hardhat CLI locally,
   run `npm install --save hardhat`. Then to initialize our project folders together with a configuration file
   run `npx hardhat init`. This command will create 3 folders (_contracts_, _scripts_, _tests_) and 1 file _
   hardhat.config.ts_
    1. The _contract_ folder will contain an example Solidity contract with which you can start experiment
    2. The _test_ folder will contain a Typescript file to test the same contract (you can run `npx hardhat test` to try
       it out)
    3. The _scripts_ folder will contain a _deploy.ts_ Typescript file that allows you to deploy the contract either on
       a local or remote (and live) network
3. Before playing with the contract, for the sake of this tutorial I would like to use this _Token.sol_ contract, which
   is **a simple Solidity contract that implements a token**. You can get
   the [Solidity source code here](https://hardhat.org/tutorial).
   Some important notes about it:
    1. In the _constructor_, the deployer of the contract will receive the total supply available (1000000 in our
       example, but feel free to edit it)
    2. The _transfer_ function can be used to transfer tokens from one address to another
    3. The _balanceOf_ function can be used to know the balance of a specific address
4. Now it's time to **write some tests** for our contract before deploying it making sure that everything works
   properly.
   What are we going to test:
    1. The deploy works properly and sets the right owner
    2. The deploy works properly and assigns the total supply of tokens to the owner
    3. The transfer function correctly changes token balances
    4. The transfer function emits the Transfer events properly
5. **Time to deploy!** Let's modify the existing deploy script to deploy our Token contract. Then we can use this
   command `npx hardhat run scripts/deploy.ts --network localhost` to deploy on our local Hardhat network (make sure to
   run `npx hardhat node` to spin-up a local network!).
6. Once deployed on our local network we can **try transferring some tokens around**. In the script folder, we will
   create a _transfer.ts_ file, which will transfer a fixed amount of tokens from the owner to another address. Once
   done, to run it type `npx hardhat run scripts/transfer.ts --network localhost`.
7. Doing things locally is boring lol, **let's move into Mumbai (Polygon Testnet)** to test on a real live environment!
    1. First thing, we need to edit our _hardhat.config.ts_ specifying a network RPC url and an account to use. For the
       RPC url we will use Alchemy, while for the account we can use a newly generated wallet on Metamask.
    2. Then type `npx hardhat run scripts/deploy.ts --network mumbai`, and boom, our contract is live on Mumbai. You can
       see it on [Polygon Mumbai explorer](https://polygonscanlink.com), just insert the contract address.
    3. Last thing to test is the transfer function: `npx hardhat run scripts/transfer.ts --network mumbai`. Checkin
       again on our contract on Polygon Mumbai explorer, we should see the executed transaction!
8. (optional) As a last step, we can also **verify our Solidity source code**, so that it will be publicly available on
   Polygonscan. Let's write a _verify.ts_ file in the scripts folder. Verifying a contract with Hardhat is easy, as long
   as you have the compiled source code, you just need the contract address and the parameters used in the constructor
   at deploy time. Once done, type `npx hardhat run scripts/verify.ts --network mumbai`. Checking again on Polygonscan,
   we should see a new tab "Contract ☑️".
