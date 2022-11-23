//FUNCTION DECLARATION

// function welcome(firstName,lastName){
//     return "Hello" +" " + firstName + " " + lastName;
// }

// console.log(welcome("Rohith","Suresh"));

//Without declaring the variables

// function welcome(firstName,lastName){
//     if (typeof firstName=="undefined") {
//         firstName="Rohith";
//     }
//     if (typeof lastName=="undefined") {
//         lastName="Suresh";
//     }
//     return "Hello" +" " + firstName + " " + lastName;
// }

// //console.log(welcome());

// //the other way

function welcome(firstName = "Rohith",lastName = "Suresh"){
    return "Hello" +" " + firstName + " " + lastName;
}
console.log(welcome());

//EXPRESSIONS IN FUNCTION
// function square(x){
//     return x*x;
// }

// console.log(square(2));

//IIFEs => IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS

// (function(){
//     console.log("It works");
// })();

// (function(name){
//     console.log(`Hello ${name}`);
// })("Rohith");


//Property Methods

// const name= {
//     add: function() {
//         console.log("Rohith");
//     },
//     edit: function(fafa) {
//         console.log(`Name is ${fafa}`)
//     }
// }

// name.add();
// name.edit("Brad");

