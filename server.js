const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const minh = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

minh.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
