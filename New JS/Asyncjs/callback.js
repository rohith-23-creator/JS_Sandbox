// CallBack():

// Program with a SETTIMEOUT()
// function greet() {
//   console.log("Hello John");
// }

// function ask() {
//   console.log("how are you?");
// }
// ask();
// setTimeout(greet, 3000);

// In the above code the func ask() doesnot wait for the greet function to execute . But if we want the ask() to wait for the greet() we can use CALLBACKs

// Program with CALLBACK():

// function greet(CallBack) {
//   setTimeout(function () {
//     console.log("HelloWorld");
//     CallBack();
//   }, 2000);
// }

// function greetname() {
//   console.log(`Hello`);
// }

// greet(greetname);

// EXAMPLE 2:
// function add(x,y){
//     return x+y
// }

// function sub(x1,y1){
//     return x1-y1
// }

// function multiply(x3, y3){
//     return x3*y3
// }

// function calling(x2,y2, callback){
//     return callback(x2,y2)
// }

// console.log(calling(10,3,multiply))
