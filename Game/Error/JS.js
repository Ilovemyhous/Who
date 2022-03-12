// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

if (localStorage.sound === "off"){
    console.log("if audio: "+localStorage.sound);
    console.log("No audio");
    setTimeout(function(){
        window.open("../Introduction/HTML.html","_self") 
    }, 7500)
}

else {
    console.log("else audio: "+localStorage.sound);
    var audio = new Audio("../../Media/Sound/Black hole.wav");
    console.log("Debug audio")
    audio.play();
    setTimeout(function(){
        window.open("../Introduction/HTML.html","_self") 
    }, 10000)
}