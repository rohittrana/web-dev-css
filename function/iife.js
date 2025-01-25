// Immediately Invoket Function Expression (IIFE)

(function chai(){
               console.log('DB connected')
})();

(aurcode=(name)=>{
               console.log(`dbconnected two ${name}`);
})("rohit"); 
(function chaitwo(){
               console.log("db connect ");
})();