// prototype : In javascript we use prtotypical inheritance

// 1.INHERITING THE VALUES :
const book = function (bookName , author){
    this.bookName = bookName,
    this.author = author
}

const book1 = new book("Wing of fire" , "Kalam")
const book2 = new book ("Sample Book" , "Sample Author")

book.prototype.id = 13

//Both the book inherits the id 13
// console.log(book1.id) 
// console.log(book2.id)

//even if we create a new book (book3) the id will be same
const book3 = new book("Sample Book2", "Sample Author 2")

// console.log(book3)
// console.log(book3.id)  //o/p 13

//2.We cannot modify the values already present in the object constructor function.

let person = function ( firstName , lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

const person1 = new person("John" , "Doe")

// console.log(person1)

//if we try to change the lastname using prototype it is not changed.

person.prototype.firstName = "Smith",

// console.log(person1.firstName)  //still the firstName is John

// But when we try to add attribute that is not present in the constructor function,  it takes the values from the prototypes.

person.prototype.age = 26,

// console.log(person1.age)  //The age gets added

// console.log(person1.__proto__) 
//The values we added using prototype gets printed
// o/p = {firstName: 'Smith', age: 26 }

// 3.MODIFYING THE VALUES USING PROTOTYPE FUNCTION  :

person.prototype.changeLastName = function(newLastName){
    this.lastName = newLastName;
}

person1.changeLastName("Willson")

console.log(person1)  //Lastname changes from "doe" to "wilson"
