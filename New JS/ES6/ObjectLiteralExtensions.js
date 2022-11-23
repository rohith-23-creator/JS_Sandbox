// let person = "rohith";
// let age = 21;

// const obj1 = {
//   person,
//   age,
// };

// console.log(obj1); //op : rohith ; 21(can still be overwritten)

// More about OBJECTS:

// const obj1 = {
//   person: "max",
//   greet() {
//     console.log(`Hello ${this.person} `);
//   },
// };
// obj1.greet();
//  op : Hello max

// Same as Above:
const obj1 = {
  person: "max",
  "greet me"() {
    console.log(`Hello ${this.person} `);
  },
};

obj1["greet me"]();
