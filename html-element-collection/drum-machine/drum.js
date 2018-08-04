'use strict';
let drums = document.getElementsByClassName('drum-kit__drum');
for (let drum of drums) {
    drum.onclick = function () {
        let player = this.getElementsByTagName('audio')[0];
        player.currentTime = 0;
        player.play();
    };
}
;