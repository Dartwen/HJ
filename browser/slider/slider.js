'use strict';

let srcImg = ['./i/airmax-jump.png', './i/airmax-on-foot.png', './i/airmax-playground.png', './i/airmax-top-view.png', './i/airmax.png'];

let element = document.getElementById('slider');
let index = 0;
setInterval(() => {
    element.src = srcImg[index++];
    if(index === srcImg.length){
        index =0;
    }

}, 5000);