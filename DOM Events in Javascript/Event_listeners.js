//EventListeners and Objects

// document.querySelector(".clear-tasks").addEventListener("click",function (e) {
//     console.log("Hello World");

//     e.preventDefault();
// })

document.querySelector(".clear-tasks").addEventListener("click", onClick);
function onClick(e) {
        // console.log("clicked");
        e.preventDefault();

        let val;
         val=e;



         
    //target element

   val = e.target;
   val = e.target.className;
   val=e.target.id;

   e.target.innerText="Changed";

   e.target.style.color="yellow";
//    e.target.style.padding="12px";

   console.log(val);
} 



document.querySelector(".btn").addEventListener("click",onClick); function onClick(e) {
    console.log("Working!!");   
    e.preventDefault();
}
