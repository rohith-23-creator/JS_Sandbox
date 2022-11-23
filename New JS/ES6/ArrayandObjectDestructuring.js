//ARRAY DESTRUCTURING :

// let numbers = [1, 2, 4, 5];

// let [a, b] = numbers;
// console.log(a, b); //op : 1,2
// console.log(numbers); //the orginal array is not destroyed.

// let [a, ...b] = numbers;

// spread op for destructuring
// console.log(a, b); //op : a = 1 , b =  [2,4,5]

// swapping :
// let a = 15,
//   b = 10;

// [a, b] = [b, a];

// console.log(a); //10
// console.log(b); //15

// let [a, , c] = numbers;

// console.log(a); //1
// console.log(c); //4

// OBJECT DESTRUCTURING :

let object1 = {
  person: "Rohith",
  age: 21,
  greet: function (person) {
    console.log(`Hello there! ${person}`);
  },
};

let { person, age, greet } = object1;

console.log(person);
console.log(object1.person);
console.log(age);
greet(person);
