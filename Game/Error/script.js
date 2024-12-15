// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

if (localStorage.sound === "off"){
    console.log("if audio: " + localStorage.sound);
    console.log("No audio");
    setTimeout(function(){
        window.open("../Introduction/index.html","_self");
    }, 5000);
}

else {
    console.log("else audio: " + localStorage.sound);
    let audio = new Audio("../../Media/Sound/Black hole.wav");
    console.log("Debug audio");
    audio.play();
    setTimeout(function(){
        window.open("../Introduction/index.html","_self");
    }, 10000);
}