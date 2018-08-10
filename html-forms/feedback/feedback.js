'use strict';

const form = document.getElementsByClassName('contentform')[0];
const message = document.getElementById('output');
const inputs = Array.from(form.getElementsByTagName('input'));
const outputs = Array.from(message.getElementsByTagName('output'));

inputs.forEach(input => input.addEventListener('input', addValue));

function addValue(event) {
    if (event.currentTarget.name === 'zip') {
        event.currentTarget.value = event.currentTarget.value.replace(/\D/, '');
    }

    outputs.forEach(el => {
        if (el.currentTarget.name === el.id) {
            el.value = event.currentTarget.value;
        }
    });
}

const mes = form.getElementsByTagName('textarea')[0];
mes.addEventListener('input', addValue);

const subButton = document.querySelector('form > button');
const chanButton = document.querySelector('main > button');

const fieldsets = Array.from(form.getElementsByTagName('fieldset'));
fieldsets.forEach(fs => fs.addEventListener('input', enableSubmitButton));

function enableSubmitButton() {
    if(inputs.every(inp => inp.value !== '')){
        subButton.removeAttribute('disabled');
    }else {
        subButton.setAttribute('disabled', true);
    }
}

subButton.addEventListener('click', showMessageBlock);
chanButton.addEventListener('click', showForm);

function showMessageBlock(every) {
    every.preventDefault();
    form.classList.add('hidden');
    message.classList.remove('hidden');
}

function showForm() {
    form.classList.remove('hidden');
    message.classList.add('hidden');
}