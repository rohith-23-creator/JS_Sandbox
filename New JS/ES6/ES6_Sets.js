// A Set is a special type of Collection, where it is a set of values(without keys) ,& each  value occur only once.

//  EXAMPLE : 

let set1 = new Set();

let name1 = {name  : "John"};
let name2 = {name : "Rajesh"};
let name3 = {name : "Robert"}

set1.add(name1);
set1.add(name2);
set1.add(name3)

// console.log(set1)
// console.log(set1.size)
// set1.delete(name2)
// console.log(set1)
// console.log((set1.has(name2)))

// iteration in sets

// for(entries of set1){
//     console.log(entries)
// }

// for(names of set1){
//     console.log(names)
// }

// set1.forEach(val =>  console.log(val))