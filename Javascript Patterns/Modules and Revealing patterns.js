//Modules in JS

//Basic Structure 

    // (function(){
    // //Declare private vars and functions

    // return{
    //     //Declare public vars and Functions

    // }
    // })();

//STANDARD ES6 MODULES
    // const UIcntrl = (function(){
    //     let text = "Modules in Javascript";
    
    //     const  changedText = function(){
    //         const element = document.querySelector("h1");
    //         element.textContent = text;
    //     }

    //     return{
    //         callchangedText : function(){
    //             changedText();
    //         }
        
    //     }
    // })();

    // UIcntrl.callchangedText();

//Revealing Patterns in Js 
const itemCntrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log("Item Added....");
    }

    function get(id){
        return data.find(item => {
           return item.id === id;
        })
    }

    return {
        add : add,
        get : get
    }
})();

itemCntrl.add({id : 1 , name : "Rohith"});
itemCntrl.add({id : 2 , name : "Smith"});

console.log(itemCntrl.get(2));