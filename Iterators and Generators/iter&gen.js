//Iterators in Javascript
    // function nameIterator(nameArr){
    //     let nextIndex = 0;

    //     return{
    //         next : function(){
    //             return nextIndex < nameArr.length ? 
    //             { value: nameArr[nextIndex++], done : false } : 
    //             { done : true}
    //         }
    //     }
    // }

    // const nameArr = nameIterator(["Rohith", "Roy", "Smith"]);

    // console.log(nameArr.next().value);
    // console.log(nameArr.next().value);
    // console.log(nameArr.next().value);
    // console.log(nameArr.next());

//Generators in Javascript
    function* createNames(){
        yield 'Rohith';
        yield 'Roy';
        yield 'Smith';
    }

    const names = createNames();

    console.log(names.next().value);