function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        var audio = new Audio("../../Media/Sound/RiserCorpus.wav");
        console.log("Debug audio")
        audio.play();
    }
}

function button_pressed() {
    console.log('Button pressed!');
}