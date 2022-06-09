const express = require('express');
const app = express();

app.use((req,res)=>{
    console.log("We got a request");
    // res.send("We got your request");
    res.send("<h1>Thank you sir for using port 3000!!</h1>");
})
app.listen(3000,()=>{
    console.log("Listen on PORT 3000");
})