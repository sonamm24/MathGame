const connection = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 
  const handleUserInput = function (key) {
    if (key === 'u'){
      connection.write("Say: SNAKE");
     }
     if (key === 'a'){
       connection.write("Move : left");
     }
     if (key === 'w'){
       connection.write("Move : up");
     }
     if (key === 's'){
       connection.write("Move : down");
     }
    // if (key === '\u0003') {
    //   process.exit();
    // }
   

  }

  stdin.on("data", handleUserInput);
  return stdin;

};


setupInput();
module.exports = setupInput;