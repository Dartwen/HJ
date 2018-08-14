'use strict';

const xhr = new XMLHttpRequest();
const signInForm = document.querySelector('.sign-in-htm');
const outputIn = signInForm.querySelector('output');
const buttonIn = signInForm.querySelector('.button');

buttonIn.addEventListener('click', (event) => {
    event.preventDefault();
    xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
    xhr.setRequestHeader('Content-Type', 'application/json');
    let body = {
        email: signInForm.querySelector('#email').value,
        password: signInForm.querySelector('#pass').value
    };
    xhr.send(JSON.stringify(body));
});

xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.response);
    outputIn.innerText = response.error ? response.message : `Пользователь ${response.name} успешно авторизирован`;
});

const xhrReg = new XMLHttpRequest();
const signUpForm = document.querySelector('.sign-up-htm');
const outputUp = signUpForm.querySelector('output');
const buttonUp = signUpForm.querySelector('.button');

buttonUp.addEventListener('click', (event) => {
    event.preventDefault();
    xhrReg.open('POST', 'https://neto-api.herokuapp.com/signup');
    xhrReg.setRequestHeader('Content-Type', 'application/json');
    let body = {
        email: signUpForm.querySelector('#email').value,
        password: signUpForm.querySelectorAll('#pass')[0].value,
        passwordcopy: signUpForm.querySelectorAll('#pass')[1].value,
        name: signUpForm.querySelectorAll('#pass')[2].value
    };
    xhrReg.send(JSON.stringify(body));
});

xhrReg.addEventListener('load', () => {
    const response = JSON.parse(xhrReg.response);
    outputUp.innerText = response.error ? response.message : `Пользователь ${response.name} успешно зарегистрирован`;
});
