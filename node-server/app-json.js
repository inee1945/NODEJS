const http = require('http');

const courses = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JAVAS' },
    { name: 'NODE' },
    { name: 'PYTHON' },
    { name: 'REACT' },
];

const server = http.createServer((req, res) => {
    const url = req.url; //what
    const method = req.method; //how, action
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(courses));
        }
    }
});

server.listen(8080);
