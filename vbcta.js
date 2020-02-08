// Directions for implementing CLI prompts for input: https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
});

var responseArr = [
  "The answer to your question is in your question.",
  "Instead of telling you that answer, how would you FIND the answer?",
  "You alread know the answer to this question. What is it?",
]

var randomIndex = Math.floor(Math.random() * responseArr.length);
var response = responseArr[randomIndex];
var input = prompt("Ask any coding question.");

console.log(randomIndex);

if (input) {
  console.log(response);
}
