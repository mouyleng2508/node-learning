const os = require("os")

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory" + totalMemory);
console.log("Free Memory" + freeMemory)

//Template string
//ES6 / ES2015: ECMA6 

console.log(`Total Memory ${totalMemory}`)
console.log(`Free Memory ${freeMemory}`)