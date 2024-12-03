const addTaskButton = document.getElementById('add-task-btn')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

const arrayOfTasks = [];

addTaskButton.addEventListener('click',()=>{
  const value = todoInput.value.trim()
  if(value === '') return;

  const object = {
    id: Date.now(),
    text: value,
    completed: false,
  };
  arrayOfTasks.push(object);
  todoInput.value = ""; //clear input
  console.log(arrayOfTasks);
  
})