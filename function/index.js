function sayMyName(name){
               return(`my name is ${name}`)

}
// console.log(sayMyName('rohit'))

function add(a,b)
{
               return(a+b);
}
// console.log(add(34,53)); 
function login(username ="sam"){
               if(!username){
                 console.log("please enter the username");
               }
               else{
                              console.log( `${username} you just logged in`)
               }

              
}
console.log(login());