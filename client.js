const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

 // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: THT");
    conn.write("Say: let us have fun with the snake");
    console.log("Move up=>w"
    +" Move down=>s" +
    " Move left=>a" +
    " Move right=>d");
    //setInterval(() => { 
      //conn.write("Move: up")},100);
    })

  conn.on("data", (data) => {
    console.log("The game is done");
  });

  return conn;
};

module.exports = {connect};
