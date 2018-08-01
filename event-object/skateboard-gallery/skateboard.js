'use strict';

const allA = document.getElementsByTagName('a');
const view = document.getElementById('view');
const title = document.getElementById('title');

function chooseSkate(event) {
    event.preventDefault();
    document.getElementsByClassName('gallery-current')[0].classList.remove('gallery-current');
    this.classList.add('gallery-current');
    view.src = this.href;
    title.innerHTML = this.getElementsByTagName('img')[0].title;
}

for (const A of allA) {
    A.addEventListener('click', chooseSkate);
}

