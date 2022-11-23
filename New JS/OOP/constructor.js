// Constructors : Constructor is used to create multiple instances of a object.

// Object constructor function : 

const Person = function(firstName , secondName , age){
    this.firstName = firstName,
    this.secondName = secondName,
    this.age = age
}

//to create a object from a constructor function use new keyword
const rohith = new Person("Rohith" , "suresh" , 20)

//can create multiple instances of person using constructor
const micheal = new Person("Micheal" , "Sylvester", 21)

console.log(rohith)
console.log(micheal)