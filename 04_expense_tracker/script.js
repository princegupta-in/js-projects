//s1
document.addEventListener('DOMContentLoaded', () => {
  // step1:dom containt load; step2:grap elements
  // step3:create array; step4:add eventlistner to btn
  // step5:render things in list //step6:calculate total
  // step7:add local storage

//s2
  const expenseForm = document.getElementById('expense-form')
  const expenseName = document.getElementById('expense-name')
  const expenseAmount = document.getElementById('expense-amount')
  const btn = expenseForm.querySelector('button')
  const expenseList = document.getElementById('expense-list')
  const totalAmount = document.getElementById('total-amount')

//s3
//s7(b)
  let expenseArray = JSON.parse(localStorage.getItem("key")) || []

//s7(c)
 expenseArray.forEach(element => {
  renderItems(element)
  calculateAmount(expenseArray)
 }); 
//s4
  btn.addEventListener('click', (e) => {
    e.preventDefault()

    const expenseName1 = expenseName.value.trim();
    const expenseValue1 = parseInt(expenseAmount.value.trim());
    if (expenseName1 === '' || isNaN(expenseValue1)) return
    //parseint will make the typeof anything to typeof number
    let object = {
      id: Date.now(),
      name: expenseName1,
      amount: expenseValue1
    }
    expenseArray.push(object)
    console.log(expenseArray)
    renderItems(object)
    //calculate Amount
    calculateAmount(expenseArray)
    setLocalStorage()

  })
//s5
  function renderItems(pista) {
    const li = document.createElement('li')
    // li.classList.add(`${pista.id}`)
    li.innerHTML = `Item:${pista.name} - Amount:$${pista.amount}`
    expenseList.appendChild(li);
  }
//s6
  function calculateAmount(arrayKeAndarObject) {
    let netAmount = 0;
    arrayKeAndarObject.forEach(e => {
      netAmount += e.amount
    });
    totalAmount.innerText = `${netAmount.toFixed(2)}`
  }
 //s7(a) 
  function setLocalStorage(){
    localStorage.setItem('key',JSON.stringify(expenseArray))
  }
})