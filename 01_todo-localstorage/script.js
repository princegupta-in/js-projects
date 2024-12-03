document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task-btn')
  const todoInput = document.getElementById('todo-input')
  const todoList = document.getElementById('todo-list')

  let arrayOfTasks = JSON.parse(localStorage.getItem('keyName')) || [];

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
    renderTasks(object)
    todoInput.value = ""; //clear input
    console.log(arrayOfTasks);

  })

  function renderTasks(kuchVNaam) {
    // console.log(kuchVNaam);
    const li = document.createElement('li')
    li.setAttribute('data-id', kuchVNaam.id)
    li.innerHTML = `<span>${kuchVNaam.text}</span> <button>delete</button>`
    if(kuchVNaam.completed) li.classList.add('completed')//this will check if byDefault completed true hai then apne aap completed naam ka class li me lag jayega and ushka css apply ho jayega

    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') return

      kuchVNaam.completed = !kuchVNaam.completed //completed ko toggle kro
      // console.log(kuchVNaam.completed);
      li.classList.toggle('completed')
      saveTaskInLocalStorage()
    })

    li.querySelector('button').addEventListener('click',(e)=>{
      e.stopPropagation()
      arrayOfTasks = arrayOfTasks.filter((t)=>(t.id !== kuchVNaam.id))
      li.remove()
      saveTaskInLocalStorage()
    })

    todoList.appendChild(li)
    console.log(arrayOfTasks);
    
    
  }

  function saveTaskInLocalStorage() {
    localStorage.setItem('keyName', JSON.stringify(arrayOfTasks));
  }
})