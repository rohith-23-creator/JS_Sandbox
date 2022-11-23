//Single_element_selectors
//1.document.getElementById()

console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const TaskTitle=document.getElementById("task-title")

//changing the styling of the page
TaskTitle.style.background="#333";
TaskTitle.style.color="#fff";
TaskTitle.style.padding="15px";
TaskTitle.style.textAlign="center";

//changing the content of the page
TaskTitle.textContent="My Tasks";
TaskTitle.innerText="TASKS";


//2.document.queryselector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

//document.querySelector("li").style.color="blue" // since it is a singlequery selector only one list item will be selected
//document.querySelector("li:nth-child(2)").style.textAlign="center";