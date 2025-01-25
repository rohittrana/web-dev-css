// const user = {
//   username: "rohit",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username},welcome to website`);
//     console.log(this);
//   },
// };
// // user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// function chai()
// {
//                let username ="rohit"
//                console.log(this.username);
// }
// chai();

// const chai=()=>{
//                const username="rohit"

//                console.log(this.username);
               
// }
// chai();

// const addTwo =(num1,num2)=>{
//                return num1+num2;
// }
// 
const addTwo = (num1, num2)=>num1+num2;
console.log(addTwo(32,43));

const iceTeaPrice = 1000;
iceTeaPrice<=80 ?console.log("less than 80"):console.log("more than 80");