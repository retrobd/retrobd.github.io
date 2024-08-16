console.log("yt")

// document.getElementById('powerButton').addEventListener('click', powerFn);
// document.getElementById('nextButton').addEventListener('click', nextContentFn);

// document.getElementById('startVideo').addEventListener('click', pauseVideo);
// document.getElementById('stopVideo').addEventListener('click', stopVideo);

// document.getElementById('pauseVideo').addEventListener('click', pauseVideo);
// document.getElementById('resumeVideo').addEventListener('click', resumeVideo);

// document.getElementById('muteVideo').addEventListener('click', muteVideo);
// document.getElementById('unmuteVideo').addEventListener('click', unmuteVideo);

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getAllID(key_list){
    let result = []

    for(const i of key_list){
        result = result.concat(ytIDList[i]);
    }

    console.log(result);

    return result;
}

function getVideoID(keyList){

    let tempList = null;
    
    if(keyList.length > 1){
        tempList = getAllID(keyList);
    }else if(keyList.length == 1){
        tempList = ytIDList[keyList];
    }
    
    const randomID = getRandom(tempList);
    return randomID;
}

function getAllVideoID(){

    let keyList = Object.keys(ytIDList);
    let tempList = getAllID(keyList);

    keyList = ["ads"];
    tempList = ytIDList[keyList];
    
    return tempList;
}