// ES6 Classes  : classes are special functions we can define both the function xpression and function declarations in classes

//  ---------------------------------------------------

// older syntax

// const bookConstructor = function (bookname, bookid) {
//   this.bookname = bookname;
//   this.bookid = bookid;
// };

// const book1 = new bookConstructor("Wings of fire", 111);
// const book2 = new bookConstructor("Day Dreams", 123);

// console.log(book1);
// console.log(book2);

// ES6 Syntax:

// class bookConstructor {
//   constructor(bookName, bookId) {
//     this.bookName = bookName;
//     this.bookId = bookId;
//   }
//   saySomething() {
//     console.log(`I bought! ${this.bookName}`);
//   }
// }

// class premiumBooks extends bookConstructor {
//   constructor(bookName, bookId, price) {
//     super(bookName, bookId);
//     this.price = price;
//   }
//   say() {
//     console.log("Helo Premium customer!!");
//   }
//   saySomething() {
//     super.saySomething();
//     this.say();
//   }
// }

// const book1 = new bookConstructor("Wings of Fire", 111);
// const book2 = new bookConstructor("Day Dreams", 121);
// const book3 = new premiumBooks("Wild Phoenix", 109, 1000);
// console.log(book1);
// console.log(book2);
// console.log(book3);
// book1.saySomething();
// book3.saySomething();

// STATIC METHODS:

// class logger {
//   logMessage(message) {
//     console.log(message);
//   }
// }

// logger.logMessage("Hello");
//Error : as methods cannot  be accessed directly without creating  a object (like const message1 = new message)

// But this can be accessed by using static keyword:

class logger {
  static logMessage(message) {
    console.log(message);
  }
}

//No error , successfull compilation
logger.logMessage("Hello");
