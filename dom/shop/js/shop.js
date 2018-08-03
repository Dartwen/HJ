'use strict';

const cartCount = document.querySelector('#cart-count');
const cartTotalCount = document.querySelector('#cart-total-price');

function addBasket() {
    let countCart = parseInt(cartCount.textContent);
    let prevTotalPrice = parseInt(cartTotalCount.textContent.replace(' ', ''));
    let price = parseInt(this.dataset.price);
    let resultPrice = prevTotalPrice + price;
    cartCount.textContent = ++countCart;
    cartTotalCount.textContent = getPriceFormatted(resultPrice);
}

let divButton = document.querySelectorAll('.box');

for (let buttons of divButton) {
    let buttonShop = buttons.querySelector('button.add');
    buttonShop.addEventListener('click', addBasket);
}
