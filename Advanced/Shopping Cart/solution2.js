function solve() {
    let shoppingCartElement = document.getElementsByClassName('shopping-cart')[0];
    let productNamesElements = document.getElementsByClassName('product-title');
    let productPriceElements = document.getElementsByClassName('product-line-price');
    let addButtons = document.getElementsByClassName('add-product');
    let resultElement = document.querySelector('textarea');
    let checkoutButton = document.getElementsByClassName('checkout')[0];
 
    if (shoppingCartElement == null || productNamesElements == null || productPriceElements == null || addButtons == null || resultElement == null || checkoutButton == null) {
       throw new Error('Missing DOM element!');
    }
    let list = {};
 
    function listManager(obj, product, price) {
       if (obj.hasOwnProperty(product) == false) {
          obj[product] = 0;
       }
       obj[product] += Number(price);
       return obj;
    }
 
    function checkoutParser(obj) {
       let list = Object.keys(obj);
       let totalPrice = Object.values(obj).reduce((a, b) => a + b, 0);
       return `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
    }
 
    const btnHandlerMap = {
       'add-product': (target, result, list) => {
          let product = target.parentElement.parentElement.querySelector('.product-title').textContent;
          let price = target.parentElement.parentElement.querySelector('.product-line-price').textContent;
          list = listManager(list, product, price);
          result.textContent += `Added ${product} for ${Number(price).toFixed(2)} to the cart.\n`;
       },
 
       'checkout': (_, result, list) => {
          result.textContent += checkoutParser(list);
          shoppingCartElement.removeEventListener('click', buttonsHandler);
       }
    }
 
    function buttonsHandler(e) {
       if (typeof btnHandlerMap[e.target.classList.value] == 'function') {
          btnHandlerMap[e.target.classList.value](e.target, resultElement, list);
       }
    }
 
    shoppingCartElement.addEventListener('click', buttonsHandler);
 }