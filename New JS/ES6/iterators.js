// iterators : 

const names = ["Roy" , "Rahman", "Smith"]

// const it = names[Symbol.iterator]();

// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next())


// let person = {
//     name : "Mark",
//     hobbies  : ["Playing" ,"singing", "drawing"],
//     [Symbol.iterator]:function(){
//         let i = -1;
//         let hobbies = this.hobbies
//         return{
//             next : function(){
//                 i++
//                 return {
//                     done : i  > hobbies.length-1 ? true : false,
//                     value: hobbies[i]
//                 }
//             }
//         }
//     }
// }

// for(hobbies of person){
//     console.log(hobbies)

// }