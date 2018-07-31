'use strict';

const sounds = [
    ['https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
    ],
    ['https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
    ],
    ['https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
    ]
];

const tone = document.getElementsByClassName('set');

function changeSounds() {
    const audio = document.getElementsByTagName('audio');
    Array.from(audio).forEach(function (tag, index) {
        const tone = document.getElementsByClassName('set');
        if (tone[0].classList.contains('lower')) {
            tag.src = sounds[0][index];
        } else if (tone[0].classList.contains('middle')) {
            tag.src = sounds[1][index];
        } else if (tone[0].classList.contains('higher')) {
            tag.src = sounds[2][index];
        } else {
            tone[0].classList.add('middle');
            tag.src = sounds[1][index];
        }
    });
}

changeSounds();

function soundPlay() {
    const audio = this.getElementsByTagName('audio');
    audio[0].play();
}

const keys = document.getElementsByTagName('li');
Array.from(keys).forEach(function (key, index) {
    key.addEventListener('click', soundPlay);
});

function updateSoundsToneLH(event) {
    if (event.repeat) {
        return;
    }
    if (event.shiftKey) {
        tone[0].classList.remove('middle');
        tone[0].classList.add('lower');
        changeSounds();
    }
    if (event.altKey) {
        tone[0].classList.remove('middle');
        tone[0].classList.add('higher');
        changeSounds();
    }
}

function updateSoundsToneM(event) {
    if (!event.shiftKey) {
        tone[0].classList.remove('lower');
        tone[0].classList.add('middle');
        changeSounds();
    }
    if (!event.altKey) {
        tone[0].classList.remove('higher');
        tone[0].classList.add('middle');
        changeSounds();
    }
}

document.addEventListener('keydown', updateSoundsToneLH);
document.addEventListener('keyup', updateSoundsToneM);
