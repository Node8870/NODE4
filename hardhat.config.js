require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["3343e430f63d1caabfc7fb45117e01c5bc64cd30641c4bf77bcfaa9ed50b857f"], //Your private key starting with "0x"
    },
  },
};
