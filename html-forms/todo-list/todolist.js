'use strict';

const field = document.getElementsByClassName('list-block')[0];
const checkboxs = field.querySelectorAll('input[type="checkbox"]');
const output = field.getElementsByTagName('output')[0];

document.addEventListener('DOMContentLoaded', updateCounter);

checkboxs.forEach(task => task.addEventListener('click', updateCounter));

function updateCounter() {
    let done = Array.from(checkboxs).filter(task => task.checked);
    if (done.length === checkboxs.length) {
        field.classList.add('complete');
    } else {
        field.classList.remove('complete');
    }
    output.value = `${done.length} из ${checkboxs.length}`;
}