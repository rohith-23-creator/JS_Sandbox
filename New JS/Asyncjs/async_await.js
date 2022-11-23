//ASYNC KEYWORD : Just by adding the "Async" keyword in front of the function, makes it return a promise.thus it returns a promise rather than returning a value

    // let newAsync = async function(){
    //     let error = true;

    //     if(error == true){
    //         return "Hello"
    //     }else{
    //         return "Bye"
    //     }
    // }


    // newAsync().then((value) => {
    //     console.log(value)
    // }).catch((value)=>{
    //     console.log(value)
    // })

// AWAIT KEYWORD : The Await Keyword works only inside the async function.

    // async function Hello(){
    //     return greeting = await Promise.resolve("Hello World")
    // }


    // Hello().then(alert)


// EXAMPLE :

    // let promise1 = new Promise((resolve,reject) => {
    //     setTimeout(()=>{
    //         resolve("Promise is Resolved, Let the function run!")
    //     }, 3000)
    // })

    // async function wait(){
    //     let promise2 = await promise1;

    //     console.log(promise1);
    //     console.log("This is Async Code")
    // }

    // wait();


    // In the above example, the consolelog statement WAITS  for the promise1 to fullfill, i.e after 3 seconds . once it is fullfilled, the promise2 runs.

    // EXAMPLE 2:

    // let promise1 = new Promise((resolve) => {
    //    setTimeout(() => resolve("Hello World") , 3000)
    // })


    // async function wait(){
    //     let error = true;
    //     if(!error){
    //         let promise2 = await promise1
    //         return promise2
    //     }else{
    //         await Promise.reject("OOPS! Something is Wrong!")
    //     }

    // }

    // wait().then((value)=> {
    //     console.log(value)
    // }).catch((value)=>{
    //     console.log(value)
    // })

//Awaiting Promises :

    // async function sample(){
    //     let promise1 = await new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("Hello World")
    //         },2000)
    //     });
    //     return promise1
    // }


    // sample().then((value) => {
    //     console.log(value)
    // })

// Async Functions always returns a promise. If the return statement is not  promise , it will be implicitly converted to a promise

    // async function wait(){
    //     return 1
    // }

    // console.log(wait())

// Even though in the above async function, the return statement is not a promise , it will return the statement only as a Promise .

