//This script is used to load the correct video based on the screen resolution of the user.

console.info("Height:" + window.screen.availHeight);
console.info("Width:" + window.screen.availWidth);

if (window.screen.availHeight >= 1500 && window.screen.availWidth >= 2000) {
    document.getElementById("video").src = "../Media/Hub/Background 4K.mp4";
    console.log("4K video loaded.");
}

else {
    console.log("Full HD video loaded.");
}