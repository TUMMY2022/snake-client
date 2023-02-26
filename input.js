// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (useInput) {
  console.log("The snake direction", useInput);
  if (useInput === "w") {
    connection.write("Move: up");
  }
  if (useInput === "a") {
    connection.write("Move: left");
  }
  if (useInput === "s") {
    connection.write("Move: down");
  }
  if (useInput === "d") {
    connection.write("Move: right");
  }
  if (useInput === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };