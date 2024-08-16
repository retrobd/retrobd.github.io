# Retro Bangla
This repo will contain below materials:
1. TV
2. Radio
3. Ebooks

### Get All video id from playlist
```
var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
var show="";
for(i = 0;i<els.length;i++){
    var el = els[i];
    var gl = el.href.split('?v=')[1].split('&list')[0];
	// show += (el.href.split('?v=')[1].split('&list')[0] + "\n");
    console.log("\""+gl+"\",")
}
```