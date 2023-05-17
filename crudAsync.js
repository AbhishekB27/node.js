//#. create a folder named it Abhi
//#. create a file in it named bio.txt and data inot it.
//#. add more data into the file at the end of the existing data.
//#. read the data without getting the buffer data at first 
//#. file encoding
//#. rename the file nate to mybio.txt
//#. now delete both the file and the folder
const fs = require('fs');
// I created a folder
// fs.mkdir('abhi',(err)=>{
//     console.log("Folder Created Successfully")
// })
//I created a file inside the abhi
// fs.writeFile('./abhi/bio.txt','My name is Abhishek Bahuguna.',(err)=>{
//     console.log('File Created Successfully.')
// })
//I appended the data in the file.
// fs.appendFile('./abhi/bio.txt','\nI am from Nakraunda, Dehradun, Uttarakhand.',()=>{
//     console.log('New data are appended in bio.txt inside the abhi.')
// })
//i prindted the data of bio.txt on console.
fs.readFile('./abhi/myIntro.txt','utf-8',(err,data)=>{
    if(err != null){
        console.log(err)
    }
    console.log(data);
});
// i renamed bio.txt to myIntro.txt
fs.rename('./introduction.txt','./myBio.txt',(err)=>{
    console.log('File renamed successfully.')
})
// fs.unlink('./abhi/myIntro.txt',(err)=>{
//     console.log('File deleted successfully.');
// });
// fs.rmdir('./abhi',(err)=>{
//     console.log("Folder removed successfully.");
// })