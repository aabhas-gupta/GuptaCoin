const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Enter your own value of private key generated using keygenerator.js
const myKey = ec.keyFromPrivate("036c14f1d20d59e6819971db6669e695e317cf76d3f854b8785a97ed26f17c12");
const myWalletAddress = myKey.getPublic('hex');

let guptaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "test1", 10);
tx1.signTransaction(myKey);
guptaCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
guptaCoin.minePendingTransactions(myWalletAddress);

console.log("\n Balance of aabhas is ", guptaCoin.getBalanceOfAddress(myWalletAddress));