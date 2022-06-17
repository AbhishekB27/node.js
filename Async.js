//sync vs async functionality
const fs = require('fs');
let counter = 1;
let state = true;
var start , end;
//Async
fs.readFile('AsyncAndSync.txt','utf-8',(err,data)=>{
    start = new Date();
    while(state){
        counter++;
        if(counter === 10000000){
            state=false;
            console.log(data)
        }
        end = new Date();
    }
    console.log(start + ":" +end);
    console.log("It takes " + Math.ceil((end.getTime() - start.getTime())/1000) + "sec")
});

console.log("I'm Async.")

//sync

//     start = new Date();
//     while(state){
//         counter++;
//         if(counter === 10000000){
//             state=false;
//             const data = fs.readFileSync('read.txt','utf-8');
//             console.log(data)
//         }
//     }
//     end = new Date();
//     console.log(start + ":" +end);
//     console.log(Math.ceil((end.getTime() - start.getTime())/1000))

// console.log("I'm Sync.")