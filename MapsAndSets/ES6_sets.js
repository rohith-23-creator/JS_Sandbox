//SETS - Stores unique values of different types

    const set1 = new Set();

    set1.add("Rohith");
    set1.add({key : "Rohith" , value : 20});
    set1.add(true);
    set1.add(function anyFunc(e) {
        
    });

    console.log(set1)

    // const set2 = new Set(["Rohith" , 100 , true])
    // console.log(set2)

//Get COUNT
      console.log(set1.size);
    
//Check for the values 
      console.log(set1.has("Rohith"));
      console.log(set1.has(true));

//Refrence objects in sets
      console.log(set1.has({key : "Rohith" , value : 20}));      //will get false because...
      console.log({key : "Rohith" , value : 20} === {key : "Rohith" , value : 20}) //it is reference type object and not stored in same memory location just as string or numbers

//DELETE From Sets
    //   set1.delete(true);
    //   set1.delete("Rohith");

//ITERATION in sets

    // set1.forEach(set => {
    //     console.log(set)
    // });

    // for(let items of set1){
    //     console.log(items)
    // }

    