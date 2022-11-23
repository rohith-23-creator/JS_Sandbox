//Replacing Element

//creating new element
const headingNew = document.createElement("h2")

//creating class
headingNew.className="New-Heading";

//appending child
headingNew.appendChild(document.createTextNode("Tasks"));

//Replacing them
const OldHeading =  document.getElementById("task-title");

const CardAction  = document.querySelector(".card-action");

CardAction.replaceChild(headingNew , OldHeading);

//Removing Element

//CardAction.removeChild(headingNew);

const lis=document.querySelectorAll("li");
const list = document.querySelector("ul");

// lis[0].remove();

// list.removeChild(lis[3]);
// list.removeChild(lis[2]);


// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);




// console.log(headingNew);