const findWaldo = function(names, found) {
  names.forEach((list, arraylist) => {  

    if (list === "Waldo") {
        console.log("Found him");
        found(arraylist);
         // execute callback
    }
  });




  //for (let i = 0; i < names.length; i++) {

  // let name = names[i];
  
  //}
};
const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}`);
};
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

