'use strict';

const slides = document.querySelector('.slides');
let slideCurrent = slides.firstElementChild;
slideCurrent.classList.add('slide-current');

const btnPrev = document.querySelector('[data-action = prev]');
const btnNext = document.querySelector('[data-action = next]');
const btnFirst = document.querySelector('[data-action = first]');
const btnLast = document.querySelector('[data-action = last]');

btnNext.addEventListener('click', () => moveSlide('next'));
btnPrev.addEventListener('click', () => moveSlide('prev'));
btnFirst.addEventListener('click', () => moveSlide('first'));
btnLast.addEventListener('click', () => moveSlide('last'));

function courseSlide(course) {
    switch(course) {
        case 'next':
            return slideCurrent.nextElementSibling;
        case 'prev':
            return slideCurrent.previousElementSibling;
        case 'first':
            return slides.firstElementChild;
        case 'last':
            return slides.lastElementChild;
    }
}

function moveSlide(course) {
    const activatedSlide = courseSlide(course);
    slideCurrent.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current');

    btnNext.classList.toggle('disabled', activatedSlide.nextElementSibling == null);
    btnLast.classList.toggle('disabled', activatedSlide.nextElementSibling == null);
    btnPrev.classList.toggle('disabled', activatedSlide.previousElementSibling == null);
    btnFirst.classList.toggle('disabled', activatedSlide.previousElementSibling == null);

    slideCurrent = activatedSlide;
}
