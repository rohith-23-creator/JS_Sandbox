//BASIC TERMS IN DOM MANIPULATON: 

// Element Node :  An Element existing as it is in the Node

// Root Node : The TopNode which is always <html> in case of HTML

// Parent Node : A Node that has an another node inside of it . ForExample: <body> is parent of <h1> tag

// Text Node : A Node that contains a Test String.

// Sibling Nodes : Nodes that are on the same level in a DOM tree

// Child Node:  Node that are directly inside an another node. frexample: <h1> is the child of <body> as it is directly inside it.

// Descendent Node : Node that are anywhere inside another node.ForExample : <h2> is the not child node of body as it not directly inside of it . but it is descendent of the body.

// BASICS OF DOM MANIPULATION: 

// document.querySelector() : 
    // is used to select elements using the CSS Selectors.
 
// document.querySelectorAll() : 
    // selects multiple elements that is all the elements that matches that particular selector, stores them in a array-like objects called a "NODELIST"

// Element.setAttribute() : 
    // takes two arguments, the argument we want to set and the value.

    // const para = document.querySelector(".para")
    // para.setAttribute("class" ,"para2")

    // in the above example , tha p tag had a class of para, by setAttribute property, the class is set to para2, thus giving the element styles tha para2 class have.

// textContent(): changes the text inside the selected node.

    // const heading = document.querySelector(".h2");
    // heading.textContent = "Changed"