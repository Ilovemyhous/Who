function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        let audio = new Audio("../../Media/Sound/RiserCorpus.wav");
        console.log("Debug audio")
        audio.play();
    }
}