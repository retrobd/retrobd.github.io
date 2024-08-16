var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('tv_iframe', {
        height: '320',
        width: '400',
        videoId: 'tgbNymZ7vqY',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function changeVideo(){
    player.loadVideoById("NiGZKrdSZkM");
}

function stopVideo() {
    player.stopVideo();
}

function startVideo() {
    if (player) {
        player.playVideo();
    }
}

function pauseVideo() {
    if (player) {
        player.pauseVideo();
    }
}

function muteVideo() {
    if (player) {
        player.mute();
    }
}

function unmuteVideo() {
    if (player) {
        player.unMute();
    }
}

function resumeVideo() {
    if (player) {
        player.playVideo();
    }
}