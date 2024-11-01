let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player; // Declare player globalmente

function onYouTubeIframeAPIReady() {
    player = new YT.Player('firstVideo', { // Atribua o player à variável global
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    setTimeout(() => {
        event.target.playVideo();
        event.target.setLoop(true);
        event.target.mute();
        let playButton = document.querySelector('.ytp-large-play-button');
        if (playButton) {
          playButton.click();
        }
    }, 500);


}

function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED || event.data === YT.PlayerState.CUED) {
        event.target.playVideo();          
    }
      if(event.data === YT.PlayerState.BUFFERING && player && !player.isPlaying()) {
                setTimeout(()=>{player.playVideo();}, 500)
        }
}