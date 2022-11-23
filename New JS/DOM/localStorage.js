// LocalStorage : It allows the datas to be stored in the browsers sessions. This has no expiration date.

// syntax for adding the item to localstorage
localStorage.setItem("Pet" , "Cat")

// syntax for reading the element stored in localstorage.
const pet =  localStorage.getItem("Pet")

// removing the element in L.S
localStorage.removeItem("Pet")

// for clearing every items in localstorage 
localStorage.clear()