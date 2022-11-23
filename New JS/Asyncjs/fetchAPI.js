// document.querySelector(".btn").addEventListener("click", getText)

// function getText(){
//     fetch("text.txt") //fetching the data from text.text
//     .then((message) => {
//         return message.text()
//     }).then((messageTrue) => {
//         console.log(messageTrue)
//     }).catch((errorMessage) => {
//         console.log(new Error(errorMessage))
//     })
// }

// console.log(getText())

// document.querySelector(".btn").addEventListener("click", getText)

// function getText(e){
//     e.preventDefault()
//     fetch("https://api.github.com/users")
//     .then((message) => {
//         return message.json()
//     }).then((messageTrue) => {
//           console.log(messageTrue)
//           let output = "";
//           messageTrue.forEach(user => {
//               output += `<li>${user.login}</li>`
//           });
//           document.querySelector(".output").innerHTML = output;

//         }).catch((errorMessage) => {
//         console.log(new Error(errorMessage))
//     })
// }
