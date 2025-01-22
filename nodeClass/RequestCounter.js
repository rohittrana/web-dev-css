// const express = require('express');
// const app = express();

// let requestCount = 0;
// app.use(function (req, res, next) {
//     requestCount = requestCount + 1; // Increment the count
//     console.log(`Number of requests so far: ${requestCount}`);
//     next(); 
// });


// app.get('/', (req, res) => {
//     res.send('Welcome to the Home Page!');
// });

// app.get('/about', (req, res) => {
//     res.send('This is the About Page!');
// });


// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
const express = require('express');
const app = express() ;
var requestCount = 0;
app.use(function (req,res,next){
               requestCount = requestCount+1;
               console.log(`Number of request so far : ${requestCount}`)
               
               next();
              
})

app.get('/',(req,res)=>{
            res.send({
               messge :"welcome to the page ",
               requestCount:requestCount,
            })
})
app.get('/About ',(req,res)=>{
               res.send({
                              message:"this is second page that is about page  ",
                              requestCount:requestCount
               });

})
app.listen(3000);