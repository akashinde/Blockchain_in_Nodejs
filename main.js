const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// First we will import both classes in main file with following
const Block = require("./block");
const Blockchain = require("./blockchain");

// Here we have created instance of Blockchain class, with this genesis block has also been created
let newCoin = new Blockchain();

// This function will add new block to the blockchain
function addNewBlock(from, to, amount) {
  // We have call addBlock function with above instance to create and add block to the blockchain
  newCoin.addBlock(
    new Block(newCoin.getLatestBlock().index + 1, Date.now(), {
      from: from,
      to: to,
      amount: amount,
    })
  );
  console.log("\nNew block has been added to the blockchain");
}

// This function will display the blockchain
function displayChain() {
  console.log("Blockchain: \n", newCoin.chain);
}

// This function will create another questionnaire inside add new block
function getNewBlockInputs() {
  let from;
  let to;
  let amount;
  rl.question("\nFrom: ", (f) => {
    from = f;

    rl.question("To: ", (t) => {
      to = t;

      rl.question("Amount: ", (a) => {
        amount = a;

        console.log("\nMining New Block....");
        addNewBlock(from, to, amount);
        rl.prompt();
      });
    });
  });
}

// This function will repeatedly call asking options to select
function askQuestion() {
  return new Promise(function (resolve, reject) {
    rl.setPrompt(
      "\n===============\nSelect one: \n 1. Display the Chain\n 2. Add new block\n 3. Exit\n===============\nOption:"
    );
    rl.prompt();
    rl.on("line", function (line) {
      if (line === "3" || line === "Exit") {
        rl.close();
        return;
      }

      console.clear();
      if (line === "1") {
        displayChain();
      } else if (line === "2") {
        getNewBlockInputs();
      } else {
        console.log(`\nunknown command: "${line}"`);
      }
      rl.prompt();
    }).on("close", function () {
      resolve("Ended!");
    });
  });
}

// This is the function will call askQuestion asynchronously
async function main() {
  try {
    let replResult = await askQuestion();
    console.log("Chain", replResult);
  } catch (e) {
    console.log("failed:", e);
  }
}

// Calling the main function
main();
