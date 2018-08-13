'use strict';

var menu = document.getElementsByTagName('nav')[0];

function openMenu(ev) {
    if (ev.ctrlKey && ev.altKey && ev.code == 'KeyT') {
        menu.classList.toggle('visible');
    }
}

document.addEventListener('keydown', openMenu);

var input = [];
var code = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
var secret = document.getElementsByClassName('secret')[0];


function showSecret(event) {
    if(event.code === 'KeyY'){
        input =[];
    }
    input.push(event.code);
    if(input.join() === code.join()) {
        secret.classList.add('visible');
    }
}

document.addEventListener('keydown', showSecret);