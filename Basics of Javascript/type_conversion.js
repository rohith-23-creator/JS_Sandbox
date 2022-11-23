let val;

//1.Number to string
val = 5;     
val=String(55555);
val=String(4+6);

//2.Bool to String
val=String(true);

//3.Date to String
val=new Date();
val=String(new Date());

//4.Array to String
val=[1,2,3,4];
val=String([1,2,3,4]);

//toString()

val=(5).toString();
val=(true).toString();

//5.string to Number

val=Number('5');
val=Number(true);  //op => 1
val=Number(false);   //op => 0
val=Number(null)     //op => 0
val=Number("String") //op => NaN(Not a number)
val=Number([1,2,3,4]) //op => NaN(Not a number)

//parseInt
val=parseInt('100');  //op will be perfect
val=parseFloat('100.90'); //will be rounded if decimal value is not given

//output
// console.log(val);
// console.log(typeof val);
// console.log(val.length)
// console.log(val.toFixed())  //rounded to gvn no of decimals

// sum and concatination

// const val1=5;
// const val2=6;
// const sum=val1 + val2;
// console.log(sum)

const val1=String(5);
const val2=6;             //ans will be 56 (conc)
const sum=val1 + val2;
console.log(sum)

