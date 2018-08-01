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

function logKeys(ev) {
    input.push(ev.code);
    if (input.length > 9) {
        input.shift();
    }
    if (input.length === 9) {
        showSecret();
    }
}

function showSecret() {
    for (let i = 0; i <= code.length; i++) {
        if (code[i] !== input[i]) {
            return false;
        }
    }
    secret.classList.add('visible');
}

document.addEventListener('keydown', logKeys);