import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// Go to https://www.alchemy.com/, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Go to https://polygonscan.com/, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

// Replace this private key with your Ethereum account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [WALLET_PRIVATE_KEY],
      gas: 8000000,
      gasPrice: 30000000000,
    },
    local: {
      url: "http://127.0.0.1:8545",
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  }
};

export default config;
