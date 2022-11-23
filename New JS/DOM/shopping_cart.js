// const form = document.querySelector("form");

// const itemInput = document.querySelector("input");

// form.addEventListener("submit" , addTask);

// function addTask(e){
//     e.preventDefault();

//     if(itemInput.value === ""){
//         alert ("Input Cant be Empty!!!")
//     }else{
//         const newItem = document.createElement("li");

//         newItem.textContent = itemInput.value;

//         newItem.classList.add("list-item")

//         const btn = document.createElement("button");

//         btn.textContent = "Delete Item";

//         btn.classList.add("btn")

//         newItem.appendChild(btn)

//         const lists = document.querySelector("ul");

//         lists.appendChild(newItem);

//         itemInput.value = ""

//         btn.addEventListener("click" , removeItem);

//         function removeItem (e){
//             e.preventDefault();
//             if(e.target.classList.contains("btn")){
//                 e.target.parentElement.remove()
//             }
//         }
//     }

// }

const form = document.getElementsByClassName("InputForm")[0];

const inputKey = document.querySelector(".input");

const submit = document.querySelector(".submit");

const list = document.querySelector(".list");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputKey.value === "") {
    alert("Input cannot be empty!!");
  } else {
    const li = document.createElement("li");

    li.textContent = inputKey.value;

    const button = document.createElement("button");

    button.textContent = "Delete Task";

    list.appendChild(li);
    li.appendChild(button);
    inputKey.value = "";

    button.addEventListener("click", deleteNode);

    function deleteNode() {
      if (confirm("Are you sure?")) {
        li.remove();
      }
    }
  }
});

const btn = document.getElementById("clear");
const body = document.querySelector("body");
btn.addEventListener("click", (e) => {
  if (confirm("Are you sure to delete all tasks?")) {
    list.innerHTML = " ";
  }
});
