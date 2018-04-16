window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!audio) return; // stop the function altogether
    audio.currentTime = 0; // rewind
    audio.play();

    if(!key) return;
    key.classList.add("pressed");
    
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove("pressed");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));