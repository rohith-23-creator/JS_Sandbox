let val;

val=document;
val=document.all; //displays all the items in the html page
val=document.all[0];  //displays the first tag / attribute
val=document.all.length;
val=document.body;
val=document.head;
val=document.URL;
val=document.characterSet;
val=document.contentType;
val=document.domain;
val=document.doctype;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

           
console.log(val);