console.log("loading main.js");

document.getElementById('powerButton').addEventListener('click', powerFn);
document.getElementById('nextButton').addEventListener('click', nextContentFn);

let toggleFlag = null;
let value = null;

function powerFn(){
    console.log("power button clicked");

    var tvContent = document.getElementById('tv_content');
    const audio = document.getElementById('tvNoiseSound');
    toggleFlag = !toggleFlag;
    audio.play();
    tvContent.style.backgroundImage = "url('assets/media/glitch-effect.gif')";

    // audio.loop = false;
    // audio.currentTime = 0;
    // audio.pause();

    if(toggleFlag){
        value = 1;
        setTimeout(() => {
            tvContent.style.backgroundImage = "";
            const iframe = document.getElementById("tv_iframe");
            iframe.style.display = 'block';
            startVideo();
        }, 2000);
    }else{
        value = 0;
        stopVideo();
        const iframe = document.getElementById("tv_iframe");
        iframe.style.display = 'none';
        tvContent.style.backgroundImage = "url('assets/media/glitch-effect.gif')";
    }

    console.log("button clicked", toggleFlag);
}

function nextContentFn(){
    let keys = Object.keys(ytIDList);
    // keys = ["ads"];

    console.log(keys);

    const videoID = getVideoID(keys);
    console.log(videoID);
    changeVideo(videoID);
}