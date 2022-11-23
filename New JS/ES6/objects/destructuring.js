// ARRAY DESTRUCTING

// const arrValue = ["Roy" , "Roshan", "Rahim"];

// const[x, ...y] = arrValue

// console.log(x) //Expected o/p = Roy
// console.log(y) //Expected o/p = ["Roshan" , "Rahim"]

// const arrValue = [10,20]

// let [a,b,...c] = [10,20,30,40,50]

// console.log(a)
// console.log(b)
// console.log(c)

// Leaving out values :

// const arr = [12,22,32];

// const [a,,b] = arr //center value has been left out
// console.log(a) //Expected o/p = 12
// console.log(b) //Expected o/p = 32

// OBJECT DESTRUCTURING :

let obj1 = {
  EmployeeName: "Employee1",
  ID: 12,
  Salary: 3000,
  //   this: this,
};

let { EmployeeName, ...balance } = obj1;

console.log(EmployeeName);
console.log(balance);

// console.log(obj1);
