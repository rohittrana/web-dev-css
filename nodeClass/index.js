const express = require('express');
const app = express();
function ticketChecker(req,res,next){
               const ticket = req.query.ticket;
               if(ticket === "free"){
                              next();
               }
               else{
                              res.status(403).send("Access Denied");
               }
}
app.use(ticketChecker);
app.get('/ride1',(req,res)=>{
               res.send("you rode the first ride");
})
app.get('/ride2',(req,res)=>{
               res.send('you rode the secondd ride');
})             
app.get('/ride3',(req,res)=>{
               res.send('you rode the third ride')
})

app.listen(3000);