const fs = require('fs')
let data = {
    id:"001",
    name:"Abhishek Bahuguna",
    age:"21",
    address:"Dehradun,Uttarakhand",
    hobbie:"Swimming"
}
const jsonData = JSON.stringify(data)
fs.writeFile('dummy/details.json',jsonData,(err)=>{
    console.log('file create successfully.')
})
fs.readFile('dummy/details.json','utf-8',(err,data)=>{
    let jsObject = JSON.parse(data); //convert the json data int js object
    console.log("file fetched")
    console.log(jsObject)
})