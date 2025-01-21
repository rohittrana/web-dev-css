const name ="rohit";
const repoCount = 34;
console.log(` hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rohitrana");
console.log(gameName);
console.log(typeof(gameName));
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.slice(3));
console.log(gameName.charAt(3));
// const ans  = gameName.split('').reverse().join('');

const ans = [...gameName].reverse().join(" ");
console.log(ans);

const newStringOne = "        Rohit ";
console.log(newStringOne.trim());

const lastName = "Rana";

