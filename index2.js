const fs = require('fs')
// fs.writeFileSync('Intro.txt',`Hello My Name is Abhishek Bahuguna.\nI'm from Nakraunda, Dehradun, Uttarakhand.`)
// fs.appendFileSync('Intro.txt',`\nI'm 21 years old.\nI've completed my graduation BSC(IT) in 2021.`)
// fs.appendFileSync('Intro.txt',`And now I'm learning for full stack development from DevTown`);
// fs.appendFileSync('Intro.txt',`.`);

const file_data = fs.readFileSync('introduction.txt') //it will give you buffer data.
console.log(file_data.toString())//you need to convert buffer data to string using toString() func

//change the name of file using renameSync() func
// fs.renameSync('intro.txt','introduction.txt')

