module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      server: 'https://localhost:443'
    },
    ropsten: {
      host: "localhost",
      port: 8543,
      network_id: "3",
      from:"",
      // gasPrice: 21000000000
      // gas: 400000
    },
    rinkeby: {
      host: "localhost",
      port: 8544,
      network_id: "4",
      from:"",
    },
    kovan: {
      host: "localhost",
      port: 8542,
      network_id: "42",
      from:"",
     },
     rsk: {
 	    host: "54.91.54.77",
      port: 4444,
      network_id: "31", // Match any network id
      gasPrice: 20000,
      gas: 250000,
      from: "0xae78b926aa89b070cc570641dccb1d27a16c3ded",
     }
  }
};
/*

*/
