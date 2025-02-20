const inputValue = document.getElementById("todo-input");
const addBtn = document.getElementById("add-task-btn");
const todoTasks = document.getElementById("todo-list");

const task = [];

addBtn.addEventListener("click", ()=>{
    console.log(inputValue.value)
    let li = document.createElement("li")
    li.innerHTML = inputValue.value
    todoTasks.appendChild(li)
    inputValue.value = "";
});
