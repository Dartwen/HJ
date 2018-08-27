'use strict';

const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

let shiftFlag = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentAction = '';
let curves = new Array();// массив точек
let lineColor = 1; // текущий градус цвета
let lineWidth = 100; // текущая толщина линии
let widthDirection = false; // направление движения толщины линии: false на уменьшение, true на увеличение.
let needsRepaint = false;

canvas.addEventListener('dblclick', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mouseleave", () => {
    curves = [];
    currentAction = '';
});

canvas.addEventListener('mousedown', event => {
    currentAction = 'down';
    curves.push(makePoint(event.offsetX, event.offsetY, event.shiftKey));
});

canvas.addEventListener('mouseup', () => {
    curves = [];
    currentAction = 'up';
});

canvas.addEventListener('mousemove', event => {
    if (!isButtonPressed(1, event.buttons)) {
        return;
    }
    if (currentAction === 'down') {
        curves.push(makePoint(event.offsetX, event.offsetY, event.shiftKey));
        shiftFlag = event.shiftKey;
        needsRepaint = true;
    }
});

function isButtonPressed(buttonCode, pressed) {
    return (pressed & buttonCode) === buttonCode;
}

function makePoint(x, y, reflect = false) {

    return [x, y];
}


function repaint() {

    if (widthDirection) {
        if (lineWidth === 100) {
            widthDirection = false;
            lineWidth--;
        } else {
            lineWidth++;
        }

    }
    else {
        if (lineWidth === 5) {
            widthDirection = true;
            lineWidth++;
        } else {
            lineWidth--;
        }

    }

    if (shiftFlag) {
        lineColor < 1 ? lineColor = 359 : lineColor--;
    } else {
        lineColor > 358 ? lineColor = 0 : lineColor++;
    }

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = `hsl(${lineColor}, 100%, 50%)`;

    ctx.moveTo(curves[0], curves[1]);
    for (let i = 1; i <= curves.length - 1; i++) {
        ctx.lineTo(...curves[i]);
    }
    ctx.stroke();
    ctx.closePath();
    curves.splice(0, curves.length - 2);
}


function tick() {
    if (needsRepaint) {
        repaint();
        needsRepaint = false;
    }
    window.requestAnimationFrame(tick);
}

tick();
