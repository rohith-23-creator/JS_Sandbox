document.getElementById("button").addEventListener("click" , loadData);

function loadData(){
    //create a XMR Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open("GET" , "data.txt" , true);
    // console.log("READYSTATE" , xhr.readyState);

    //OPTIONAL - FOR LOADERS AND SPINNERS
    xhr.onprogress = function(){
        console.log("READYSTATE" , xhr.readyState);
    }

    //when evrything is loaded func is called
    xhr.onload = function(){
        console.log("READYSTATE" , xhr.readyState);
        if(this.status === 200){
            document.getElementById("output").innerHTML = `<h6> ${this.responseText}</h6>`
        }
    }
  
    // xhr.onreadystatechange = function(){
    //     console.log("READYSTATE" , xhr.readyState);
    //     if(this.status === 200 && this.readyState === 1){
    //         console.log(this.responseText);
    //     }
    // }

    //sends the request 
    xhr.send();

    //ready state requests
    //0 :  request not initailized
    //1 :  connection established
    //2 :  request received
    //3 :  processing  request
    //4 :  request finished and response is ready
    

}