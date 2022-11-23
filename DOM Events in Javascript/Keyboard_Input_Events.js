const form =document.querySelector("form");
const taskInput= document.getElementById("task");
const heading = document.querySelector("h5");

taskInput.value="";

//keydown
// taskInput.addEventListener("keydown", runEvent);
//keyup
// taskInput.addEventListener("keyup", runEvent);
//keypress
// taskInput.addEventListener("keypress", runEvent);
//focus
// taskInput.addEventListener("focus", runEvent);
//blur
// taskInput.addEventListener("blur", runEvent);
//cut
// taskInput.addEventListener("cut", runEvent);
//paste
taskInput.addEventListener("paste", runEvent);




function runEvent(e) {
    console.log(`EVENT TYPE : ${e.type}`);
    // e.target.value="Play";
    
    console.log(e.target.value);

    // heading.innerText=e.target.value;

}


