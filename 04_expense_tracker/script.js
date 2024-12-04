//s1
document.addEventListener('DOMContentLoaded',()=>{
  // step1:dom containt load; step2:grap elements
  // step3:create array; step4:add eventlistner to btn
  // step5:render things in list

//s2
  const expenseForm = document.getElementById('expense-form')
  const expenseName = document.getElementById('expense-name')
  const expenseAmount = document.getElementById('expense-amount')
  const btn = expenseForm.querySelector('button')
  const expenseList = document.getElementById('expense-list')
  const totalAmount = document.getElementById('total-amount')

//s3
  let expenseArray = []
//s4
  btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const expenseName1 = expenseName.value.trim();
    const expenseValue1 = parseInt(expenseAmount.value.trim());
    if(expenseName1==='' || isNaN(expenseValue1)) return
    //parseint will make the typeof anything to typeof number
    let object={
      id:Date.now(),
      name:expenseName1,
      amount:expenseValue1
    }
    expenseArray.push(object)
    console.log(expenseArray)
    renderItems(object)

  })
//s5
  function renderItems(pista){
    const li = document.createElement('li')
    // li.classList.add(`${pista.id}`)
    li.innerHTML=`Item:${pista.name} - Amount:$${pista.amount}`
    expenseList.appendChild(li);
  }
})