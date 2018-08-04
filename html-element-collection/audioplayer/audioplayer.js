'use strict';

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const player = mediaplayer.getElementsByTagName('audio')[0];
var title = document.getElementsByClassName('title')[0];
var btnPlayPause = document.getElementsByClassName('playstate')[0];
const btnStop = document.getElementsByClassName('stop')[0];
const next = document.getElementsByClassName('next')[0];
const back = document.getElementsByClassName('back')[0];

var currentTrack = 0;

var audio_src = ["https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3",
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3",
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"];

var track_title = [
    "LA Chill Tour",
    "This is it band",
    "LA Fusion Jam"

];

next.onclick = () => {
    if (currentTrack < audio_src.length - 1) {
        currentTrack++;
    } else {
        currentTrack = 0;
    }
    player.src = audio_src[currentTrack];
    title.title = track_title[currentTrack];
    if (mediaplayer.classList.contains('play')) {
        player.play();
    }
};

back.onclick = () => {
    if (currentTrack >= 1) {
        currentTrack--;
    } else {
        currentTrack = audio_src.length - 1;
    }
    player.src = audio_src[currentTrack];
    title.title = track_title[currentTrack];
    if (mediaplayer.classList.contains('play')) {
        player.play();
    }
}

btnStop.onclick = () => {
    player.pause();
    player.currentTime = 0;
    mediaplayer.classList.remove('play');

}

btnPlayPause.onclick = () => {
    if (mediaplayer.classList.contains('play')) {
        mediaplayer.classList.remove('play');
        player.pause();
    } else {
        mediaplayer.classList.add('play');
        player.play();
    }
}