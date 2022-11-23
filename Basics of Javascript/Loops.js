//FOR LOOP

// for (let i = 0; i< 10; i++) {
//     console.log("Number"+ " "+i);
// }
 
//breaking into the loops
// for (let i = 0; i< 10; i++) {
//     if (i===2) {
//         console.log("2 is my fav number");
//     }
//     console.log("Number"+ " "+i);
// }

// continue statement

// for (let i = 0; i< 10; i++) {
//     if (i===2) {
//         console.log("2 is my fav number");
//         continue;  //2 will not be printed
//     }
//     console.log("Number"+ " "+i);
// }

//break statement

// for (let i = 0; i< 10; i++) {
//     if (i===2) {
//         console.log("2 is my fav number");
//         continue;  //2 will not be printed
//     }
//     if (i==5) {
//         console.log("This is the end of the loop")
//         break;
//     }
//     console.log("Number"+ " "+i); 
// }

//WHILE LOOP (Runs only if the statement is true)

// let i = 0;

// while (i<10) {
//     console.log("Number is " + " " + i);
//     i++;
// }

//DO WHILE (Runs atleast once even if the while condition is false)

// let i=100;

// do {
//    console.log("Number is " + " " + i)  ;
//    i++;
// } 

// while (i<10);

//LOOPING THROUGH THE ARRAYS
// const cars=["Honda","Benz","Toyota","BMW"] 

// for (i = 0;  i < cars.length; i++) {
//      console.log(cars[i]);
    
// }

// cars.forEach(function(car){
//     console.log(car);
// });

//MAPPING

const users=[
     {id:1 , name:"Rohith"},
     {id:2 , name:"Ram"},
     {id:3 , name:"Raj"},
     {id:4 , name:"Roy"},
];

const ids=users.map(function (user) {  //creating array of ids
    return ((`${user.id} : ${user.name}`));
});

console.log(ids)

//FOR IN LOOP

// for (let x in cars) {
//    console.log(`${x}:${cars[x]}`)
// }



// players = ["Rohan", "Suman", "Abijith", "Rohith"];
// x = 0

// const play = players.map(function(player){
// 	x+=1
//    return ( `${x} : ${player}` )
// })

// console.log(play)

employees = ["Suman" , "Prithvi" , "Ganesh" , "Vijith"]
// let x=  0 ;
for (let x in employees){ 
	console.log([`${x} : ${employees[x]}`])
}