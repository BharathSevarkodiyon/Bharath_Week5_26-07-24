// Build a simple REST API with Node.js

let express = require('express')  // importing Third-party modules

let app = express()
let port = 5000;

app.post('/addData', (req, resp)=>{
    resp.send("Posting the data")
})

app.get('/getData', (req, resp)=>{
    resp.send("Getting the data")
})

app.put('/updateData', (req, resp)=>{
    resp.send('Updating the data')
})

app.delete('/deleteData', (req, resp)=>{
    resp.send('Deleted the data')
})

app.listen((port), ()=>{
    console.log(`Server is running at the port number ${port}`);
})

// Note: Created a RestAPI using Express and tested using Postman.