'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', take);

window.addEventListener('beforeunload', () => {
    connection.addEventListener('error', event => console.error(event));
    connection.close(1000);
});

function take(event) {
    const counter = document.querySelector('.counter');
    const outputErrors = document.querySelector('output.errors');
    const message = JSON.parse(event.data);
    counter.innerHTML = message.connections;
    outputErrors.innerHTML = message.errors;
};