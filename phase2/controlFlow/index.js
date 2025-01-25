// const isUserLoggedIn = true;
// if(isUserLoggedIn){

// // }
// const temperature = 41;
// if(temperature ===41){
//                console.log("less than 50");
// }
// else{
//                console.log("temperature is greater than 50");
// }

// const score = 200;
// if(score>100){
//                const power = "fly"
//                console.log(`user power: ${power}`);
// }


// const balance = 1000
// if(balance >500) console.log("test"),
// console.log("Test2")


// const balance = 1000;

// if(balance<500){
//                console.log("less than 500")
// }
// else if(balance<750){
//                console.log("less than 750")
// }
// else if(balance<900){
//                console.log("balance is less than 950")
// }
// else{
//                console.log("your balance is less than  1000");
// }



const isUserLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;
if(isUserLoggedIn  && debitCard  ){
               console.log("Allow to buy course");
}
if(loggedFromEmail || loggedFromGoogle){
               console.log("user Logged in ")
}