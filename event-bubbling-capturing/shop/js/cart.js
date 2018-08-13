'use strict';

function addBasket(event) {
    event.preventDefault();
    if (event.target.classList.contains('add-to-cart')) {
        addToCart({ title: event.target.dataset.title, price: event.target.dataset.price });
    }
}

const addItems = document.querySelector('main.items-list');
addItems.addEventListener('click', addBasket);
