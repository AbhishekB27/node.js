const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Hello from other side.')
    } else if(req.url == '/about'){
        const data = fs.readFileSync('public/about.html')
        res.end(data)
    }else if(req.url == '/contact'){
        const data = fs.readFileSync('public/contact.html');
        res.end(data)
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('page does not exist.');
    }
});
server.listen(8080,()=>{
    console.log('server is run on port ' + 8080)
});