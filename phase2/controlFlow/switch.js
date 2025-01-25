const month = 3;
switch(month){
               case 1:
                              console.log("jan");
                              break;

               case 2:
                              console.log("feb");
                              break;
               case 3:
                              console.log("march");
                              break;
               case 4:
                              console.log("june");
                              break;
                              default:
                                             console.log("default case match")
}
//false value
//false , 0,-0,BigInt 0n, " ","null",undefined , NaN


//truthy values
//"0","false"," ",[],{},function(){}
// userEmail = " ";
// if(userEmail.length === 0){
//                console.log("Array is Empty");
// }

// console.log(false == 0);
// console.log(false =="");
// console.log(0 =='');

//logical operator

// Nullish Coalescing Operator (??) : null undeFined

let val1;
val1 = 5 ??10;
console.log(val1);