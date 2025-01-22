const express = require("express");
const app = express();
function oldEnough(age){
if(age>=14){
return true;
}
else{
               return false;

}
}
app.get('/ride1',(req,res)=>{
               if(oldEnough(req.query.age)){
                              res.json({
                                             msg:"enjouy your ride 1"
                              })


               }
               else{
                              res.json({
                                             msg:"you are not eligible for this"
                              })
               }
})
app.get("/ride2",(req,res)=>{
               if(oldEnough(req.query.age)){
                              res.json({
                                             msg:"Enjoy you ride2"
                              })
               }
               else{
                              res.json({
                                             msg:"you are not old enough"
                              })
               }
})
app.listen(3000);