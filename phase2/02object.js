//singleton

// const tinderUser = new Object()
const tinderUser = {
  id: 12434,
  name: "rohit",
  isLoggedIn: false,
};
console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const regularUser = {
  email: "rohitrana.com",
  userfullname: {
    firstName: "rohit",
    lastName: "rana",
  },
};

const obj1 = { 1: "A", 2: "b" };
const obj2 = { 3: "c", 4: "D" };
// const obj3 = {obj1 ,obj2};
// console.log(obj3)
// console.log(regularUser.userfullname.firstName);

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
const user = [
  {
    id: 1,
    name: "rohit",
  },
  {
    id: 2,
    name: "mohit",
  },
  {
    id: 3,
    name: "chilli",
  },
];
