require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs//hardhat-etherscan");
require("dotenv").config();

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const DEVNET_RPC_URL = process.env.DEVNET_RPC_URL;
const network_id = 245022926;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    neonlabs: {
      url: DEVNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      network_id: network_id,
      chainId: network_id,
      gas: 3000000,
      gasPrice: 10000000000000,
      blockGasLimit: 10000000,
      allowUnlimitedContractSize: false,
      timeout: 1000000,
      isFork: true
    },
  
    rinkeby: {
      chainId: 4,
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY]
    },
   
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
