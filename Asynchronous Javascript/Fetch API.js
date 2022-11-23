document.getElementById("button1").addEventListener("click",getText);

document.getElementById("button2").addEventListener("click", getJSON)

function getText(){
    fetch("test.txt")
    .then(function(responseText){
        return responseText.text();
    })
    .then(function(data){
        //console.log(data);
        document.getElementById("output").innerHTML = data
    })
    .catch(function(err){
        console.log(err)
    });
}

function getJSON(){
    fetch("posts.json")
    .then(function(responseText){
        return responseText.json();
    })
    .then(function(data){
        console.log(data);
        let output = "";
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    });
}