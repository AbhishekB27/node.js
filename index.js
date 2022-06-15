const fs = require('fs')

// write the data in file using fileSystem(fs) module using node.js
fs.writeFileSync("greet.txt","Hello Sir how are You.") 
fs.appendFileSync("greet.txt","\nI hope you are doing good.");

// read the data from the file using fileSystem(fs) module using node.js
const file_data = fs.readFileSync("greet.txt");
console.log(file_data.toString())

//change the fileName
// fs.renameSync('hello.txt','greet.txt')

