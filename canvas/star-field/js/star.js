'use strict';

const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;
let ctx = canvas.getContext('2d');
let colorArray = ['#ffffff', '#ffe9c4', '#d4fbff'];

function generateSky() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let countStars = getRandomArbitrary(200, 400);
    for (let i = 0; i < countStars; i++) {
        let r = getRandomArbitrary(0, 1.1);
        let color = colorArray[getRandomArbitrary(0, 2)];
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let opacity = Math.random() * (1 - 0.8) + 0.8;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

canvas.addEventListener('click', generateSky);