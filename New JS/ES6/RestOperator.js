// let list = [1, 2, 3, 4, 5];
var result = 0;
// function addAll(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }

// console.log(addAll(list));

// The above code can be return as : (when input is not array but collection of numbers)

function add(...numbers) {
  console.log(numbers); //returns array[1,2,3,4,5] even though input is not array
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(add(1, 2, 3, 4, 5));

console.log(typeof (result + "10"));
