const marvel_hero = ["thor","shaktiman","naagraj"];
const ipl = ["kkr","dl","punb"];
console.log(marvel_hero);

// marvel_hero.concat(ipl);
// console.log(marvel_hero);

// const allhero = marvel_hero.concat(ipl);
// console.log(allhero);

const all_new_hero =[...marvel_hero, ...ipl];
console.log(all_new_hero);
const another_array = [3,4,5,6,7,8,9,54,[34,4,65], [43.6,656.65]];

console.log(another_array);
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));
console.log(Array.from({name:"rohit"}))
let score1= 100;
let score2 =200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
