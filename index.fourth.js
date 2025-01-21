const score = 5000;
const balance = new Number(2329);
console.log(balance);
console.log(typeof(balance));

console.log(score);
console.log(typeof(score));

console.log(balance.toString().length);
console.log(balance.toFixed(3));
console.log(typeof(balance));
const otherNumber = 23.89324;
console.log(otherNumber);
console.log(otherNumber.toPrecision(6));

const hundreds = 1000000n;
console.log(hundreds.toLocaleString('en-IN'));


console.log(Math.random());
console.log((Math.random()*10)+1);
const min = 10;
const max =20;
console.log(Math.floor(Math.random()*(max-min +1)+min));