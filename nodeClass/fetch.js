const express = require('express');
const fs = require('fs');
const app = express();

app.get("/first",(req,res)=>{
               console.log("hello rohit rana is here")

})

app.get('/button')

app.listen(3000,()=>{
               console.log(`api is running`)
})