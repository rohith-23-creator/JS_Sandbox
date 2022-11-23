//Working of Asynchronous Code 

    // console.log("Start"); 

    // setTimeout(() => {
    //     console.log("This is a Asynchronous Code!!")
    // },3000)

    // console.log("End");  

    //The above code prints "Start" and "End" immediately and prints the code in "setTimeout" func 3 seconds late. 

//Callback Function

        // console.log("Start");

        // function loginUser(email , password){
        //     setTimeout(() =>{
        //         console.log("Timeout")
        //         return{userEmail : email}
        //     },3000)
        // } 

        // const user = loginUser("Rohith@gmail.com" , "12345");

        // console.log(user);   

        // console.log("End")

        //The above code does not run because the user information is not called back and this code is sync

//Solution:

        // console.log("Start");

        // function loginUser(email , password , callback){
        //     setTimeout(() =>{
                
        //         callback({userEmail : email});
        //     },3000)
        // } 

        // const user = loginUser("Rohith@gmail.com" , 12345 , (user) =>{
        //     console.log(user); //here the data is called back
        // });

         

        // console.log("End")

//Promises in javascript 
//it reduces the work load that callback function creates
  
     const promise = new Promise((resolve , reject) => {
         setTimeout(() => {
            //  console.log("Here is the User :")
             reject(new Error ("This is an Error"));
         },3000)
     })

     .then(user =>{
         console.log(user);
     })
     .catch(err => {
         console.log(err.message);
     })