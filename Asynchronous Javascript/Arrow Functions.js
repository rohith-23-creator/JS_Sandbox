// const  sayHello = function (){
//     console.log("Hello!!");
// }

// sayHello();

//Arrow Functions

    // const  sayHello = () => {
    //     console.log("Hello!!");
    // }

    // const  sayHello = () => console.log("Hello!!");

    //one line Functions
       // const  sayHello = () => "Rohith"

    //Return Object
       // const  sayHello = () => ({Msg : "Hello World!"})

    //with a parameter (can work without parenthesis)
        // const greet = (name) => console.log(`Hello ${name}`)
        
        // greet("Rohith");

    //arrays
        const names = ["Rohith" , "Roy" , "Smith"];

        //short way
        // const nameLengths = names.map((name) => {
        //     return name.length;

        // })

        //shorter way
        const nameLengths = names.map(name => name.length)


        console.log(nameLengths)