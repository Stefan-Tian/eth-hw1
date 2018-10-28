// The answer of question 2a
const Wallet = require("ethereumjs-wallet");
const keccak256 = require("js-sha3").keccak256;

const wallet = Wallet.generate();

// Answer of question 2a
console.log("The Answer of Question 2a");
console.log("\n");

const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString("hex"));

const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString("hex"));

let address = wallet.getAddressString();
console.log("address:", address);
console.log("\n");

// Answer of question 2b
console.log("The Answer of Question 2b");
console.log("\n");
// step 1: hash the public key
const public_key_hash = keccak256(pubKey);
// step 2: combine 0x and the last 40 chars(20 bytes)
// of public_key_hash
address = `0x${public_key_hash.slice(-40)}`;
console.log("address:", address);
console.log("\n");

// Answer of question 2c
console.log("The Answer of Question 2c");
console.log("\n");
console.log(wallet.toV3String("nccu"));
