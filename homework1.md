# Homework 1

## 1. Please compare hash function and cryptographic hash function and give an example

- **Hash function** is a function that convert an input of any length into a fixed-sized array of numbers and letters.
- Every **cryptographic hash function** is a **hash function**, but not every **hash function** is a **cryptographic hash function**. In order to be called a **cryptographic hash function**, a few conditions must be met.

  1. The hash value should be collision resistant, which means each hash value(the output of a hash function) must be unique, it should be impossible to produce the same hash value entering different inputs. (though this might be mathematically impossible, a cryptographic hash function should still at least make the collision as minimal as possible)

  2. The hash function should be computationally efficient, in other words, quick to produce a hash value.

  3. It should be secure, it needs to be extremely difficult if not impossible to determine the input based on the hash value.

  4. The hash value should look random so that the ouput wouldn't appear to be predictable

- An example of **cryptographic hash function** is sha256, when entering any input into sha256, it'll quickly return a unique(almost unique) string of 256 bits. If someone tries to determine the input from a given ouput, they would have no better method than to just guess and check 2^256 possibilities.

## 2. Peter is a noob in cryptocurrency and would like to get some Ethers. First step for him is to have an Ethereum account. He decides to generate an account and manages the wallet himself so he can understand the principles behind. From the class, he knows the account is created by the following steps

### a. Can you print the private/public key with hex string representation? Please give us an example

- The code is in `second.js` from line 11 to 18

### b. In addition, if we don’t want to use the getAddressString() to get the address, how can we obtain the address by hashing the public key

- The code is in `second.js` from line 25 to 29

### c. There is a file called Keystore that is used to encrypt the private key and save in a JSON file. Can you generate a Keystore with the password “nccu”? You can find the details about Keystore below

- The code is in `second.js` on line 35

## Bonus

### What is HD Wallet, BIP32, BIP39 and BIP44

- HD, short for Hierarchical deterministic is a system of deriving keys from a single starting point known as a seed. HD wallet is a special sort of cryptocurrency address that enables you to generate more addresses.

- BIP-32 describes how you can build a general HD wallet. These wallets can be shared partially or entirely with different systems, each with or without the ability to spend coins.

- BIP-39 describes the implementation of mnemonic words to generate a seed of 512 bits, and this seed can be used to generate HD wallet.

- BIP-44 defines a specific logical hierarchy for deterministic wallets based on an algorithm described in BIP-32.

- answers from `https://www.youtube.com/watch?v=2HrMlVr1QX8&t=815s`

### What is RFC 6979 for

- ECDSA signature generation uses a number k, which must be randomly and uniformly chosen each time a signature is created. Under deterministic ECDSA, as proposed by RFC 6979, k is chosen deterministically.

- There are two major reasons to use a deterministic algorithm here. In regular ECDSA, if two signatures are created (different messages) with the same k value, the private key can be calculated. This means that ECDSA immediately fails if k is not chosen randomly.

- Secondly, it allows easy verification of ECDSA implementations, using fixed test vectors. Regular ECDSA implementations cannot use signature test vectors, because the signatures are random by design.

- answers from `https://bitcointalk.org/index.php?topic=285142.0`
