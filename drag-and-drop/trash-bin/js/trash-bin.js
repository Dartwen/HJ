'use strict';

let logo = null;


document.addEventListener('mousedown', mouseDown);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', mouseUp);

function mouseDown(event) {
    if (event.target.classList.contains('logo')) {
        logo = event.target;
        logo.classList.add('moving');
        logo.style.position = 'absolute';
        mouseMove(event);
        document.body.appendChild(logo);


    }
}

function mouseMove(event) {
    if (logo) {

        logo.style.left = event.pageX - logo.offsetWidth / 2 + 'px';
        logo.style.top = event.pageY - logo.offsetHeight / 2 + 'px';



    }
}

function mouseUp(event) {
    if (logo) {
        logo.style.visibility = 'hidden';
        const check = document
            .elementFromPoint(event.clientX, event.clientY)
            .closest('#trash_bin');
        logo.style.visibility = 'visible';
        logo.classList.remove('moving');
        if (check) {
            logo.style.display = 'none';
        }

        logo = null;

    }
}