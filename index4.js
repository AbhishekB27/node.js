const fs = require('fs');
//use async func

// fs.writeFile('read.txt',"Right now weather is awesome.It is raining outside.This moment is masmerizing of us.",
//             (err)=>{
//                 console.log("File create successfully")
//             })
// fs.appendFile('read.txt','\nAnd what about you.',()=>{
//     console.log("successfully completed")
// });
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data)
});
