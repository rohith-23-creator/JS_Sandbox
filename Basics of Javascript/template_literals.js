const person ="Rohith";
const age =20;
const city = "Coimbatore";
const job = "web developer";
let html;


//without template literals (highly tedious)

html= "<ul>"+
       "<li> Name:" + person + "</li>" +
       "<li> age:" + age  + "</li>" +
       "<li> job:" + job + "</li>" +
       "<li> city:" + city  + "</li>" +
       "</ul>";

//with template literals  (press th key left to 1 , it create the back text)

html= `
        <ul>
        <li> Name: ${person}</li>
        <li> City: ${city}</li>
        <li> Age: ${age}</li>
        <li> Job: ${job}</li>
        </ul>   
`
// printing those values into the html page
document.body.innerHTML=html;