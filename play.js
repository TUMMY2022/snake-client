const {connect}= require("./client");
console.log("Connecting ...");
connect();
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  // your code here
  stdin.on('data', (key) => {
    process.stdout.write('.');
  });  
};

setupInput();