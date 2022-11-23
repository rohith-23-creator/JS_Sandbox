try {
    myFunc();
} catch (e) {
    // console.log(e);
    console.log(e.message); //prints the message alone
    console.log(e.name); //prints the typeof error
    console.log(e instanceof ReferenceError);
}finally{//runs anyway
    console.log("Program is Running")
}

