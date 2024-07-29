// Create a basic HTTP server in Node.js that returns "Hello, World!"

let http = require('http')  // it a inbuild module
let port = 5000;

let server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello world!!!");
    res.end();
})
server.listen((port), ()=>{
    console.log(`Server is running at the port number ${port}`);
})
