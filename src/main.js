const {Blockchain, Transaction} = require('./blockchain')

let guptaCoin = new Blockchain();
guptaCoin.createTransaction(new Transaction('address1', 'address2', 100));
guptaCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log("\n Starting the miner...");
guptaCoin.minePendingTransactions('aabhas-address');

console.log("\n Balance of aabhas is ", guptaCoin.getBalanceOfAddress('aabhas-address')); 

console.log("\n Starting the miner again...");
guptaCoin.minePendingTransactions('aabhas-address');

console.log("\n Balance of aabhas is ", guptaCoin.getBalanceOfAddress('aabhas-address')); 