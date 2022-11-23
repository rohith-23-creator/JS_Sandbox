//Creating Element
const li = document.createElement("li");

//creating class
li.className="collection-item";

//creating attribute
li.setAttribute("title","List");

//creating id
li.id="new-item";

//append child
li.appendChild(document.createTextNode("New-item"));

//adding it to list
document.querySelector("ul.collection").appendChild(li)

//creating links
const link = document.createElement("a");

//adding class.name to link
link.className="delete-item secondary-content";

//adding icons
link.innerHTML=`<i class="fa fa-remove"></i>`

li.append(link);

console.log(li);