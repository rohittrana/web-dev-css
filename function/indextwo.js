 function calculateCartPrice(...num1)
 {
               return num1;
 }
 console.log((calculateCartPrice(23)));
 console.log((calculateCartPrice(20,34,5,45,44465)))

const user= {
               username: "rohit",
               price:3435,
}
function handleObject(anyobject){
               console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user);

const myNewArray = [200,2340,34393,443];
function returnSecondValue(getArray)
{
               return getArray[3];
}
console.log(returnSecondValue(myNewArray));