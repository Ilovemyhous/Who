console.info("Height:"+window.screen.availHeight);
console.info("Width:"+window.screen.availWidth);

if (window.screen.availHeight >= 1500 && window.screen.availWidth >= 2000) {
    document.getElementById("video").src='../Media/Hub/Background 4K.mp4';
    console.log("4K video loaded.");
}