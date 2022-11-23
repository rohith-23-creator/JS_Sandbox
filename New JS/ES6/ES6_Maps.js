// Map is a collection of items , just like an Object. But the Map allows the items(keys) of different datatypes.

// Example : 

// let map1 = new Map()

// map1.set("String" , "JohnDoe");
// map1.set("Boolean", true);
// map1.set("Function", function sample(){

// });
// map1.set("NullElem", null);
// map1.set("Number" , 12)

// From the above example it is evident that the maps can b collection of any datatype.
// console.log(map1)

// METHODS AND PROPERTIES OF A MAP : 

    // 1.MAP.SET(KEY : VALUE) : 

    let map1 = new Map()

    map1.set("String" , "JohnDoe");
    map1.set("Boolean", true);
    map1.set("Function", function sample(){

    });
    map1.set("NullElem", null);
    map1.set("Number" , 12)

    //  this can be retrieved by console logging map1;

    // console.log(map1)

    // 2.MAP.GET():  TAKES IN THE "KEY" AND GIVES THE "VALUE"
    // const getMap = map1.get("String")     
    // console.log(getMap)

    // 3.MAP.HAS(KEY): RETURNS TRUE IF THE GIVEN KEY EXISTS ELSE RETURN FALSE

    // const check = map1.has("Object")  //returns false
    // const check = map1.has("Number")  //returns true
    // console.log(check) 

    // 4.MAP.DELETE(KEY) :
    // map1.delete("Boolean");
    // map1.delete("String")
    // console.log(map1)

    // 5.MAP.SIZE():
    // function checkSize(map1){
    //     return map1.size
    // }

    // console.log(checkSize(map1))

    // 6.MAP.CLEAR():
    // const clearMap = (map1) => {
    //     map1.clear()
    // }

    // console.log(clearMap(map1))

    // console.log(map1)

    // MAP.ENTRIES() : RETURNS  KEY AND VALUE PAIR
    // console.log(map1.entries())
    // for(entries of map1){
    //     console.log(entries)
    // }

    // OBJECTS AND MAPS : MAPS CAN USE OBJECTS AS KEYS

    // let obj1 = {
    //     personName : "John Doe"
    // }

    // let mapObj = new Map();
    // mapObj.set(obj1 , "23")   //object obj1 is set as key to Map => mapObj

    // console.log(mapObj)
    // console.log(mapObj.get(obj1)) //returns 23

// ITERATION IN MAPS :

    let books = new Map([
        ["Book1" , "$1234"],
        ["Book2" , "$500"],
        ["Book3" , "$1999"]
    ])

    // returning values
    // for (prices of books.values()){
    //     console.log(prices)  //returns the values i.e., the Price
    // }

    // returning keys
    // for(book of books.keys()){
    //     console.log(book)
    // }

    // returning keys and values 
    // for(elements of books){
    //     console.log(elements)  //gives ["key" : "value"] pair
    // }

