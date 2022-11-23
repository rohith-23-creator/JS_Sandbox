// let a = "t"
// let b = 10

// try{
//     //returns NaN
//     console.log(a/b)

//     // undefined variable to give error
//     console.log(x)
// }catch(error){
//     // catching the error
//     console.log("error has been caught : " + error)
// }finally{
//     console.log("Finally will bee executed everytime")
// }

//In the above statement,  try statement output will be executed as "NaN" , and the second statement in try will thro error as the x is not defined.
// that error will be caught by using the catch statement


// Throw
try {
    throw "exception"
}catch(e){
    console.log(e)
}

//When catch block is used, it executesany exception thrown in the try statement.