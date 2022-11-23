// Promises : important!!!

// Promise is simply a object with properties and methods

//It takes in two parameters resolve and reject. if the promise is true, it is resolved or else it is rejected.

// let p = new Promise((resolve, reject) =>{
// let a = 2-1;
// if(a == 3){
//     resolve("I am Correct")
// }else{
//     reject("OOPS! I am Wrong!")
// }
// })

//the console statement in then executes if the promise is resolved. If promise gets rejected, catch statement is executed.

// p.then((statement)=> {
//     console.log("then statement " +  statement )
// }).catch((statement)=>{
//     console.log("Catch statement " + statement)
// })

// let p = new Promise((resolve , reject) => {
//     let error = false ;
//     if(error == true){
//         resolve();
//     }else{
//         reject();
//     }
// })

// p.then(() =>{
//     console.log("No Errors!!")
// }).catch(() =>{
//     console.log("There is a Error ;(")
// })

let promise1 = new Promise((resolve, reject) => {
  resolve("Hello World!");
});

let promise2 = Promise.resolve("Hello John!");
// let promise2i = Promise.reject("Hello John2");
let promise3 = Promise.resolve("Hello Jane");

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     values.map((value) => {
//       console.log(value);
//     });
//   })
//   .catch((values) => {
//     values.map((value) => {
//       console.log(value);
//     });
//   });

// Promise.race([promise2, promise1]).then((values) => {
//   console.log(values);
// });
