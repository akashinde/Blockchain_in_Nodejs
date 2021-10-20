const Block = require("./block");

class Blockchain {
  // We will initialize chain with this constructor
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  // This function will create first block in blockchain which is also known as genesis block
  createGenesisBlock() {
    let data = "This is genesis block";
    return new Block(0, Date.now(), data, "0");
  }

  // This function will return the last element from chain array
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // This function will return false if there is any tampering in block, else it will return true
  validateChain() {
    for (let i = 1; i < this.chain.length; i++) {
      let curr_block = this.chain[i];
      let prev_block = this.chain[i - 1];

      if (curr_block.hash !== curr_block.calculateHash()) {
        return false;
      }

      if (curr_block.prevHash !== prev_block.hash) {
        return false;
      }
    }

    return true;
  }

  // This is the function where we create hash of block and then add that block to chain
  addBlock(newBlock) {
    if (this.validateChain()) {
      newBlock.prevHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
    }
  }
}

module.exports = Blockchain;
