const http = require('http');
const fs = require('fs');
const { type } = require('os');
const ejs = require('ejs');

const kname = 'kims';
const courses = [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JAVAS' }, { name: 'NODE' }];

const server = http.createServer((req, res) => {
    console.log('incomming ....');
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    //res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        ejs.renderFile('./template/index.ejs', { name: kname }).then((data) => res.end(data));
    } else if (url === '/courses') {
        ejs.renderFile('./template/courses.ejs', { courses }).then((data) => res.end(data));
    } else {
        ejs.renderFile('./template/notFound.ejs', { name: kname }).then((data) => res.end(data));
    }
    //  res.end();
});

server.listen(8080);
