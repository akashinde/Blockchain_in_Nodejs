const sha256 = require("sha256");

class Block {
  // We will use constructor to create new block in the blockchain
  constructor(index, timeStamp, data, prevHash = "") {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.nounce = 0;
    this.hash = this.calculateHash();
    this.prevHash = prevHash;
  }

  // This function calculates and returns the hash of data we pass
  calculateHash() {
    let i = 0;
    let hashVal;
    while (true) {
      hashVal = sha256(
        this.index +
          this.timeStamp +
          JSON.stringify(this.data) +
          this.prevHash +
          i
      ).toString();
      i++;
      let slicedHash = hashVal.slice(0, 5);
      // Check if current hash value has first 5 zeros
      if (slicedHash === "00000") {
        console.log(
          `\nMining completed with \n Hash: ${hashVal} \n Nounce: ${i}`
        );
        this.nounce = i;
        return hashVal;
      } else {
        console.log(hashVal);
        continue;
      }
    }
  }
}

module.exports = Block;
