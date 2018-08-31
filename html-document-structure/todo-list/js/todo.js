'use strict';

function taskList(container) {
    const done = document.querySelector('.done');
    const undone = document.querySelector('.undone');
    const tasks = container.getElementsByTagName('label');
    Array.from(tasks).forEach(task => task.addEventListener('click', check));

    function check(event) {
        const input = event.currentTarget.firstElementChild;
        input.checked ? done.appendChild(event.currentTarget) : undone.appendChild(event.currentTarget);
    }
}

const taskLists = document.getElementsByClassName('todo-list');
Array.from(taskLists).forEach(item => taskList(item));
