//MAPS = key-value pairs - can use any type as key or value

    const map1 = new Map();

//SET  keys
    const key1  = "Some String",
          key2  = {},
         key3 = function(){ };

//SET key values
    map1.set(key1 , "String");
    map1.set(key2 , "Object");
    map1.set(key3 , "Function");

//GET Keys
    // console.log(map1.get(key1) , map1.get(key2) , map1.get(key3) )

//ITERATION IN MAPS
    //let key,value;
    // for([key, value] of map1){
    //     console.log(`${key} = ${value}`)
    // }

//ITERATION OF KEYS ALONE
    // for(key of map1.keys()){
    //     console.log(`${key}`)
    // }

//ITERATION OF VALUES ALONE
    // for(value of map1.values()){
    //     console.log(`${value}`)
    // }

//CONVERT TO  ARRAYS

//create an array of key and value pairs
    const arr = Array.from(map1);
    console.log(arr)

//create an key array
    const keyArr = Array.from(map1.keys());
    console.log(keyArr)

//create an value array
    const valueArr = Array.from(map1.values());
    console.log(valueArr)