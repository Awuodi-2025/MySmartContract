require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,  // ✅ Load from .env file
      accounts: [process.env.PRIVATE_KEY],  // ✅ Load from .env file
    },
  },
};