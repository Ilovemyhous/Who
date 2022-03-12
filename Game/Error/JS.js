// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

if (localStorage.sound === "off"){
    console.log("else audio: "+localStorage.sound);
    console.log("No audio");
}

else {
    console.log("if audio: "+localStorage.sound);
    var audio = new Audio("../../Media/Sound/Black hole.wav");
    console.log("Debug audio")
    audio.play();
}