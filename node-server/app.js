const http = require('http');
const fs = require('fs');
const { type } = require('os');


const server = http.createServer((req,res)=>{
    console.log('incomming ....');
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    //res.setHeader('Content-Type', 'text/html');
    if(url==='/'){
     fs.createReadStream('./html/index.html').pipe(res);
    }else if(url=== '/courses'){
        fs.createReadStream('./html/courses.html').pipe(res);
    }else  {
        fs.createReadStream('./html/notFound.html').pipe(res);
    }
  //  res.end();
});

server.listen(8080);