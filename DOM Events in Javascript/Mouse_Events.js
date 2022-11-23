const btn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear-tasks");
const card =document.querySelector(".card");

//click-Event
// clearBtn.addEventListener("click",runEvent);
//mouseup
// btn.addEventListener("mousedown",runEvent);
//mousedown
// clearBtn.addEventListener("mouseup",runEvent);
//doubleclick
// btn.addEventListener('dblclick' , runEvent);
//Mouseenter
//card.addEventListener("mouseenter",runEvent)
//MouseLeave
// card.addEventListener("mouseleave",runEvent)

//similarly mouseover , mouseout

//mousemove
// card.addEventListener("mousemove",runEvent);



function runEvent(e) {
    console.log(`EVENT TYPE : ${e.type}`);
    e.preventDefault();

    
}
document.body.style.backgroundColor="#262626"