//date and time stamps
let val;
const today=new Date();
let birthday;
birthday=new Date("10-03-2000");
birthday=new Date("10/03/2000");

//get date and time
val=today.getMonth(); //it is Zero based
val=today.getFullYear();
val=today.getDate();
val=today.getHours();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getMinutes();
val=today.getTime();

//set date and time
birthday.setSeconds(25);
birthday.setMilliseconds(25);
birthday.setHours(14);
birthday.setDate(04);
birthday.setFullYear(1999);
birthday.setMonth(11);


console.log(birthday)