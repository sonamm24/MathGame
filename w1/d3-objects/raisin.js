const raisinAlarm = function(cookie) {
  for (let i in cookie) {
    if (cookie[i] === "🍇") {
      return  "Raisin alert";
    } 
}

      return "All good";
    }




// Put your solution here
  



  
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
