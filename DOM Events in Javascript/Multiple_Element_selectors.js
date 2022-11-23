//document.getElementsByClassName()

// const items =document.getElementsByClassName("collection-item");

//console.log(items);
// items[0].style.color="yellow";
// items[1].textContent="List item- 2"

// const listItems= document.querySelector("ul").getElementsByClassName("collection");

// console.log(listItems)

//document.getElementsByTagName

// let TagName=document.getElementsByTagName("li");

// console.log(TagName);
// TagName[0].style.color="red";
// TagName[1].textContent="Example";

//converting HTML to array
// TagName= Array.from(TagName);
// TagName.reverse();

//multiple elements selection

// TagName.forEach(function(Tags,index) {
//     Tags.textContent=`${index}. List-item`;
//     Tags.style.color="#333";
// });


//document.querySelectorAll()

const items = document.querySelectorAll("li.collection-item");

console.log(items);

items.forEach(function(item , index) {
    item.textContent=`List-item no : ${index}`;
});

const itemOdd=document.querySelectorAll("li:nth-child(Odd)");
const itemEven=document.querySelectorAll("li:nth-child(even)");

itemOdd.forEach(function(li){
    li.style.background="#262626";
    li.style.color="#fff";
});

itemEven.forEach(function(li){
    li.style.background="#ccc";
    li.style.color="#262626";
});


