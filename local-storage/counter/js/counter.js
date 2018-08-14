'use strict';

let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let reset = document.querySelector('#reset');
let counter = document.querySelector('#counter');

function updateConter() {
    if (!localStorage.counter) {
        localStorage.counter = 0;
    }
    counter.textContent = localStorage.counter;

}

increment.addEventListener('click', () => {
    ++localStorage.counter;
    updateConter();
});

decrement.addEventListener('click', () => {
    if(localStorage.counter > 0) {
        --localStorage.counter;
    }
    updateConter();
});
reset.addEventListener('click', () => {
    localStorage.counter = 0;
    updateConter();
})

document.addEventListener('DOMContentLoaded', updateConter);