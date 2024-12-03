document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task-btn')
  const todoInput = document.getElementById('todo-input')
  const todoList = document.getElementById('todo-list')

  const arrayOfTasks = JSON.parse(localStorage.getItem('keyName')) || [];

  arrayOfTasks.forEach(element => {
    renderTasks(element);
  });//printing of all tasks one by one to the console

  addTaskButton.addEventListener('click', () => {
    const value = todoInput.value.trim()
    if (value === '') return;

    const object = {
      id: Date.now(),
      text: value,
      completed: false,
    };
    arrayOfTasks.push(object);
    saveTaskInLocalStorage();
    todoInput.value = ""; //clear input
    console.log(arrayOfTasks);

  })

  function renderTasks(kuchVNaam){
    console.log(kuchVNaam);
    
  }

  function saveTaskInLocalStorage(){
    localStorage.setItem('keyName',JSON.stringify(arrayOfTasks));
  }
})