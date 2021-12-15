const path = require('path')
const mnemonic = "ae33d093cb46e3197c006c44c60586e0b9af19ac800919535d81cda6b37f93c4";
const POLYGON_RPC = "https://rpc-mainnet.matic.network";
const POLYGON_MUMBAI_RPC = "https://rpc-mumbai.maticvigil.com";
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "arthApp/src/contracts"),
  networks: {
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, POLYGON_RPC),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, POLYGON_MUMBAI_RPC),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
};
