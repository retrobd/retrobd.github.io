console.log("loading main.js");

let toggleFlag = null;
let value = null;

function powerFn(){
    console.log("power button clicked");
    var tvContent = document.getElementById('tv_content');
    toggleFlag = !toggleFlag;
    const audio = document.getElementById('tvNoiseSound');
    
    if(toggleFlag){
        value = 1;
        tvContent.style.backgroundImage = "";
        addContent();
        // audio.loop = false;
        audio.currentTime = 0;
        audio.pause();
        tvContent.style.backgroundImage = "url('assets/media/glitch-effect.gif')";
    }else{
        value = 0;
        console.log("power off");
        audio.loop = true;
        audio.play();
        tvContent.style.backgroundImage = "url('assets/media/glitch-effect.gif')";
        // document.getElementById("tv_content").style.opacity = value;
        removeContent();
    }

    console.log("button clicked", toggleFlag);
}

function nextContent(){
    removeContent();
    addContent();
}

function volumeFn(){
    var iframe = document.getElementById('tv_iframe');
    iframe.src = iframe.src.replace(/mute=1/, 'mute=0');
}