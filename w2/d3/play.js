const connection = require("./client");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection();
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
   

  }

  stdin.on("data", handleUserInput);
  return stdin;

};


setupInput();




