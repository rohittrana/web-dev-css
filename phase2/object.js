//singleton
const mySym = Symbol("key1");
const jsUser={
              
               name :"rohit",
               email:"rohit@gmail.com",
               [mySym]: "mykey1",
               fullName:"rohit rana",
               age:"23",
               college:"VIT ",
               passout:2025,
               lastLoginDays :["monday , sunday"]


}
// console.log(jsUser[mySym]);
// console.log(jsUser["email"]);
// console.log(jsUser.email);
// jsUser.email ="rohitrana@vit.com";
// console.log(jsUser["email"]);
// Object.freeze(jsUser);
// console.log(jsUser["email"]);

jsUser.greeting= function()
{
               console.log("Hello JS user")
}
jsUser.greetingTwo = function(){
               console.log(`hello js user , ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());