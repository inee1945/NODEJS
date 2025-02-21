const http = require('http');
const fs = require('fs');
const { type } = require('os');


const server = http.createServer((req,res)=>{
    console.log('incomming ....');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    if(url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Aacademy</title></header>');
        res.write('<body><h1>Welcome!</h1></body>');
        res.write('</html>');
    }else if(url=== '/courses'){
         const url =fs.createReadStream('./html/index.html');
         url.pipe(res);
         
    }else  {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Aacademy</title></header>');
        res.write('<body><h1>Not Found!</h1></body>');
        res.write('</html>');
    }
    res.end();
});

server.listen(8080);