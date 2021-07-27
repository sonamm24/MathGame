const number = ['43110', 'th3r3','wOrld']

const list = function (num){
  num.forEach((stringandnumber, index) => {
    setTimeout(() => {
      const sentence = `There is stringandnumber ${stringandnumber}`
      console.log(sentence)
    }, 1000 * index)
  })

}
  
list(number);

//setTimeout(() =>
//  {
//   console.log('43110');
//   console.log('th3r3');
//   console.log('wOrld');

//  },
//   1*3000);
