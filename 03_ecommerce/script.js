document.addEventListener('DOMContentLoaded', () => {

  const product = [
    { id: 1, name: 'product 1', price: 29.90 },
    { id: 2, name: 'product 2', price: 75.80 },
    { id: 3, name: 'product 3', price: 26.36 }
  ]

  const cart = [];

  const productList = document.getElementById('product-list')
  const cartItems = document.getElementById('cart-items')
  const emptyCartMessage = document.getElementById('empty-cart')
  const cartTotalMessage = document.getElementById('cart-total')
  const totalPriceValue = document.getElementById('total-price')
  const checkoutBtn = document.getElementById('checkout-btn')

  product.forEach(e => {
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('product');
    createdDiv.innerHTML = `
    <span>${e.name} price is: $${e.price.toFixed(2)}</span>
    <button data-id="${e.id}">Add to cart</button>
    `
    productList.appendChild(createdDiv)

  });

  productList.addEventListener('click', (samosa) => {
    if (samosa.target.tagName === 'BUTTON') {
      // console.log('pp');
      // console.log(typeof(samosa.target.getAttribute("data-id")));
      const samosaId = parseInt(samosa.target.getAttribute("data-id"));
      console.log(samosaId);
      const prod = product.find((kaju) => kaju.id === samosaId)
      addToCart(prod)
      // console.log(prod);
    }
  })

  function addToCart(prod) {
    cart.push(prod)
    // console.log(cart);
    renderCart()

  }
  function renderCart() {
    cart.innerText = ''
    let totalPrice = 0;

    if (cart.length > 0) {
      cartItems.innerText=''
      emptyCartMessage.classList.add('hidden')
      cartTotalMessage.classList.remove('hidden')
      //cart is array of object ishliye use foreach loop and just think for only one object, remaining will be taken care of
      cart.forEach(item => {
        totalPrice += item.price
        const cartItem = document.createElement('div')
        cartItem.innerHTML = `${item.name} - ${item.price.toFixed(2)}`
        cartItems.appendChild(cartItem)
      });

      totalPriceValue.textContent = `$${totalPrice.toFixed(2)}`
    }
    else {
      emptyCartMessage.classList.add('hidden')
      totalPriceValue.textContent = `$${0.00}`

    }
  }
  checkoutBtn.addEventListener('click',()=>{
    alert('checkout sucessfull')
    cart.length = 0
    renderCart()
    
      cartItems.innerText='Your cart is empty.'
    
  })

})