'use strict';

var imagePhoto = ['./i/new-museum.jpg', './i/IAC.jpg', './i/headquarters.jpg', './i/guggenheim-museum.jpg', './i/breuer-building.jpg'];

var image = document.getElementById('currentPhoto');
let next = document.getElementById('nextPhoto');
let prev = document.getElementById('prevPhoto');
var index = 0;

image.src = imagePhoto[index];
var nextFunc = function () {
    index++;
    if (index > imagePhoto.length - 1) {
        index = 0;
    }
    image.src = imagePhoto[index];
}


var prevFunc = function () {
    index--;
    if (index < 0) {
        index = imagePhoto.length - 1;
    }
    image.src = imagePhoto[index];
}
prev.onclick = prevFunc;
next.onclick = nextFunc;