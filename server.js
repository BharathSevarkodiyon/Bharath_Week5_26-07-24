// Create a basic HTTP server in Node.js that returns "Hello, World!"

let http = require('http')  // it a inbuild module, here we are importing the module inside the require.
let port = 5000;

let server = http.createServer((req, res)=>{   //
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello world!!!"); // it will be visible on UI
    res.end();                   // it is mandatory to give end(), because if it not there the page is keep on loading and also we can give the string to diplay on the UI
})

server.listen((port), ()=>{
    console.log(`Server is running at the port number ${port}`);
})