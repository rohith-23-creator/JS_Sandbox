const todos = [
{title  : "Go to work" ,
purpose : "Complete the pending assignments",
completed : true
},
{
title : "clean the room" ,
purpose : "Because it is untidy",
completed : false
},
{
title : "Cook the Breakfast" ,
purpose : "I am Hungry",
completed : true
},
{
title : "Buy cricket ball",
purpose : "To Play",
completed  : false
}
]

// const filteredTodo = todos.filter( todo => todo.completed === true)

// console.log(filteredTodo)

const purposeTodo = todos.filter(todo => todo.purpose =="To Play")

console.log(purposeTodo)
// filtering the incomplete tasks :
// const filterCompletedTasks = todos.filter(todo => todo.completed == false)

// console.log(filterCompletedTasks)