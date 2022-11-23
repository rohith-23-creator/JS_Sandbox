//SPREAD OPERATOR : [...]

// Spread Operator is used to spread / expand an iterable or an array

// const arr = ["My", "Name", "is", "John", "Doe"];

// console.group(arr) ; //o/p =  ["My", "Name", "is", "John", "Doe"]

// console.log(...arr) //o/p =  "My Name is John Doe"

// const check = [...arr]

// console.log(typeof check) //still a object

// CLONING ARRAY USING SPREAD OP :

// let arr1  =[10,20];
// let arr2 = arr1

// arr1.push(30) //element is pushed in arr1

// console.log(arr1)  //[10,20,30]
// console.log(arr2)  //[10,20,30]

//in the above xample the element 30 is pushed in both arr1 and arr2, this can be avoided by spread syntax.

// let arr1 = [10,20];

// let arr2 = [...arr1]

// arr1.push(30)

// console.log(arr1)  //[10,20,30]
// console.log(arr2)  //[10,20]

//Thus only parent array gets affected

// THE REST PARAMETER:

//Rest Parameter allows the function to accept infinite arguments as an array

// function sum(...infiniteargs){
//     const total = infiniteargs.reduce((tot,item) =>
//         tot+= item , -1)

//     console.log(total)
// }

// sum(10,20,20) //expected o/p => 50
// sum(20,30,40)  //expected o/p => 90
// sum(20,30,40,50,60,70) //expected o/p => 50

let list = [1, 2, 3, 4, 5, 7];

console.log(Math.max(list)); //op : NAN (since it takes array)

// after seperating all element of array from list:

console.log(Math.max(...list)); //op : 4

// console.log(Math.max(...list));
