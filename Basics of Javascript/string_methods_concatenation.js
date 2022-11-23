//string methods

const firstName="Rohith";
const lastName="Suresh";
const str="Hello My Name is Rohith";
let val;
 
//concatenation
val= firstName+" " +lastName;

//append
val= "Roy ";
val+= "Greene";

//escaping
//val='That's Me' ;      //error statement
val="That's Me";   //use double quotes
val='That\'s Me';   //use back slashes

//length
val=firstName.length;  //returns length

//concat
val=firstName.concat(" ",lastName);  //concatenation

//change case
val=firstName.toUpperCase();  //coverts to uppercase
val=lastName.toLowerCase();   //converts to lowercase

val=firstName[2];

//indexof()
val= firstName.indexOf('R');   //returns index
val=lastName.lastIndexOf('r');  

//chartAt()
val=firstName.charAt('2');  //displays charAt given index

//Get last chart
val= firstName.charAt(firstName.length - 1);  //returns last character


//substring
val=firstName.substring(0,4);

//slicing
val=firstName.slice(0,6);  //from 0 to 6
val=firstName.slice(-3);   //negative slicing

//split
val=str.split(" ");    //displays the array of letters from the word

//replace
val=str.replace("Rohith" , "Roy");

console.log(str)
val = str.charAt('0')
//includes  //test whether a element is present 

console.log(val)