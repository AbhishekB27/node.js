const http = require('http');
const fs = require('fs');
var counter = 0;

const server = http.createServer((req,res)=>{
    if(req.url == '/home'){
        res.end("I m Home Page")
    }
    else if(req.url == '/products'){
        console.log(__dirname)
        fs.readFile(`${__dirname}/product/product.json`,'utf-8',(err,data)=>{
            const objData = JSON.parse(data);
            objData.products.filter((data)=> data.category =='home-decoration').forEach(element => {
                counter++
                console.log(`${counter}: ${element.title}, price: ${element.price}`)
            });
            // objData.products.forEach(element => {
            //     counter++
            //   console.log(counter + ": " + element.title)  
            // })
            res.end(data)
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404 Error</h1> <h2>Page Does'nt Exist.</h2>")
    }
}).listen(8080);