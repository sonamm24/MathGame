const sentence = "hello there from lighthouse labs";
const splitsen = sentence.split("");
console.log(splitsen);
  splitsen.forEach((char, index) => {
    setTimeout(() => {
      process.stdout.write(char);
     
    }, 50 * index)
  });
 // setTimeout(() => {
   

  //},1000)
  //const sentence = `There is stringandnumber ${cha