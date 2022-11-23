// function myFunc(){
//     return "Hello World";
// }

// console.log(myFunc());

//adding async in the beginning returns a promise

// async function myFunc(){
//     const promise = new Promise((resolve , reject) => {
//         setTimeout(() => resolve("Hello World!!"),3000);
//     })

//     const error = false;
//     if (error != true){
//         const res =  await promise;   //waits until promise is  resolved
//         return res;
//     }else{
//         await Promise.reject(new Error("Something went wrong!!"));

//     }

    
// }

// myFunc()
// .then(res => console.log(res))//returns a response
// .catch(err => console.log(err));

async function getUsers(){
     const response = await fetch("https://jsonplaceholder.typicode.com/users");

     const data = await response.json();

     return data;
}

getUsers().then(users =>console.log(users));