const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 
  const handleUserInput = function (key) {
    if (key === 'u'){
      connection.write("Say: SNAKE");
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