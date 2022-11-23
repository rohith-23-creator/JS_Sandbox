const box = document.querySelector(".box");
const smallBox = document.querySelector(".small-box");

var moveRight = 0;
var moveUp = 0;
function moveTop (e){
    if(e.keyCode === 40){
        moveRight += 10;
        smallBox.style.top = moveRight + "px"
    }if(e.keyCode ===  38){
        moveUp -= 10;
        smallBox.style.top = moveUp + "px"
    }
}



document.onkeyup = moveTop