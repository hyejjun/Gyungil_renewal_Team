const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const privateKey = "0xc85895b05b9f40872e744884dc835078f5c744e1a8202775c1002a5046a14807" // Enter your private key;
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8651,
      network_id: "*" // Match any network id
    },
    testnet: {
      provider: () => new HDWalletProvider(privateKey, "https://kaikas.baobab.klaytn.net:8651/"),
      network_id: '1001', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice: null
    },
    mainnet: {
      provider: () => new HDWalletProvider(privateKey, "https://kaikas.cypress.klaytn.net:8651/"),
      network_id: '8217', //Klaytn mainnet's network id
      gas: '8500000',
      gasPrice: null
    }
  },
  compilers: {
    solc: {
      version: "0.5.6"
    }
  }
};