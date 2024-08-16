var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var videoQueue = getAllVideoID();
var currentVideoIndex = 0;

console.log(videoQueue);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('tv_iframe', {
        height: '320',
        width: '400',
        videoId: '0xXjmb_86aw',
        playerVars: {
            // 'playsinline': 1,
            'controls': 0,
            'rel': 0, 
            'modestbranding': 1,
            'showinfo' : 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange' : onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      playNextVideo();
    }
}

function playNextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex < videoQueue.length) {
      player.loadVideoById(videoQueue[currentVideoIndex]);
    } else {
      console.log('End of playlist');
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function changeVideo(myVideoID){
    player.loadVideoById(myVideoID);
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