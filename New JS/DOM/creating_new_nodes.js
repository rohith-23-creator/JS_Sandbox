// CREATING NEW NODES AND MANIPULATING THE NODES.

// document.createElement():

// creates a new DOM Element.
// const newTextNode = document.createElement("li");

// // adding classList that is styled
// newTextNode.classList.add("styledList");

// // adding the content to new element
// newTextNode.textContent = "item one";

// let lists = ["one", "two", "three"];

// // document.createTextNode(): creates a textcontent for the element
// const text = document.createTextNode(lists);

// // appending the texts to the element
// newTextNode.appendChild(text);
// const section = document.querySelector("body");

// node.appendChild(): appending the child to the parent node

// section.appendChild(newTextNode);

// REMOVING THE ELEMENTS:

// node.removeChild(): removes the child from parent

// section.removeChild(newTextNode)

// node.remove(): removes the parent.

// section.remove() //removes whole section.

// const heading = document.querySelector(".h2");
// heading.remove()

const li = document.createElement("li");

const li2 = document.createElement("li");

li.classList.add("styledList");

li2.classList.add("styledList");

li.textContent = "Hai i am from list";

const section = document.querySelector(".grid");

section.appendChild(li);

section.appendChild(li2);

let list = ["one", "two", "three"];

const text = document.createTextNode(list);

// li.createTextNode(list);

li2.appendChild(text);

// section.removeChild(li2);

section.remove();
