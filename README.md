# Blockchain_in_Nodejs

This is small Node CLI application, which implements blockchain.

---

## Requirements

For development, you will only need Node.js and a node global package installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/akashinde/Blockchain_in_Nodejs.git
    $ cd Blockchain_in_Nodejs
    $ npm install

## Running the project

    $ npm run start

# About

## block.js

This file contains the base class called Block. By creating instance of this class we can create block for blockchain. In the constructor of this class I have defined all the fields required for a block to get added in blockchain.
`calculateHash()` function will calculate the hash block until it satisfies with condition, hash again and again with nounce until we get hash with 5 zeros at the start.

## blockchain.js

This file contains Blockchain class. This class has constructor in which I have initialize the blockchain. `createGenesisBlock()` function gets called inside constructor of this class. So by creating instance of this class we initialize the blockchain with genesis block in it.
`getLatestBlock()` function returns the last block in the blockchain.
`validateChain()` is a simple validation logic which will loop through all the blocks of the blockchain and validates by recalculating hash of current block and matching it with its hash value. It also checks whether hash of previous block is matching with current block's prevHash.
`addBlock()` is a function in which we calculates the new hash and add it to the blockchain

## main.js

This is the main function in which we first import the class references of block.js and blockchain.js. Then we create an instance of class Blockchain. With this instance we call the `addBlock()` method of Blockchain class and pass the new instance of Block class. This creates the block and appends it to the blockchain.
