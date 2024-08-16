console.log("yt")

// document.getElementById('powerButton').addEventListener('click', powerFn);
// document.getElementById('nextButton').addEventListener('click', nextContentFn);

// document.getElementById('startVideo').addEventListener('click', pauseVideo);
// document.getElementById('stopVideo').addEventListener('click', stopVideo);

// document.getElementById('pauseVideo').addEventListener('click', pauseVideo);
// document.getElementById('resumeVideo').addEventListener('click', resumeVideo);

// document.getElementById('muteVideo').addEventListener('click', muteVideo);
// document.getElementById('unmuteVideo').addEventListener('click', unmuteVideo);

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function get_tv_content_list(key_list){
    let result = []

    for(const i of key_list){
        result = result.concat(tv_content_list[i]);
    }

    console.log(result);

    return result;
}

function getEmbedURL(){
    let baseURL = "";
    let autoplay = 1;
    let controls = 0;
    let mute = 1;
    let key_list = [ "youtube", "dailymotion", "dailymotion_movie"];
    const key_content = key_list[0];
    const key_url = key_list[0];

    let temp_content_list = get_tv_content_list([key_content]);
    // console.log(temp_content_list);

    const randomID = getRandomElement(temp_content_list);
    const randomURL =   tv_content_base_url[key_url] +"/"+ 
                        randomID +"?"+
                        "autoplay="+ autoplay +"&"+
                        "controls=" + controls +"&"+ 
                        "mute=" + mute;
                        
    console.log(key_content, randomURL);
    return randomURL;
}