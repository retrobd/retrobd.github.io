console.log("yt")

// document.addEventListener('DOMContentLoaded', function() {
//     var iframe = document.getElementById('tv_iframe');

//     iframe.addEventListener('load', function() {
//         console.log('Iframe has finished loading.');
//     });
// });

// document.getElementById('unmuteButton').addEventListener('click', function() {
//     var iframe = document.getElementById('tv_iframe');
//     var src = iframe.src;
//     var newSrc = src.replace('mute=1', 'mute=0');
//     iframe.src = newSrc;
// });

// document.getElementById('nextButton').addEventListener('click', function() {
//     var iframe = document.getElementById('tv_iframe');
//     var src = iframe.src;
//     var newSrc = src.replace('mute=1', 'mute=0');
//     iframe.src = newSrc;
// });

function addContent(){
    var iframe = document.createElement('iframe');

    // Set attributes for the iframe
    iframe.src = getEmbedURL();
    iframe.frameBorder = '0';
    iframe.allow = 'fullscreen';
    iframe.id = 'tv_iframe';

    // Find the parent element to which the iframe will be appended
    var container = document.getElementById('tv_content');

    // Append the iframe to the container
    container.appendChild(iframe);
}

function removeContent(){

    var iframe = document.getElementById('tv_iframe');
    if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
    }
}

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