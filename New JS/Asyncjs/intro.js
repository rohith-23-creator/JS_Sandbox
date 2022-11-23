// Synchronous Code vs Asynchronous Code:

// 1.SYNCHRONOUS CODE WORKING: 

// function test1(){
//     console.log("I run First"); //runs first

//     alert("click me!")  //runs next

//     console.log("I run Next"); //after clicking alert text, this code runs
// }

// function test2(){
//     console.log("I run last") //this statement runs last
// }

// test1()
// test2()

//MAKING THE SYNCHRONOUS CODE ASYNCHRONOUS :
// function test1(){
//     setTimeout( function(){
//         console.log("I run second"); 

//         alert("click me!")  

//         console.log("I run last ;("); 
//     }, 2000)
// }

// function test2(){
//     console.log("%cnow I  run first", "color:green; font-size:40px")  //runs first
// }

// test1()
// test2()
//now by adding the settimeout function make tha second funtion run first , and the first function ,2s later. this is the exact functionaliy of the async code , the settimeout function CALLSBACK the statements to be executed after the time gets over.