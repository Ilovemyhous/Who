window.onload = function() {
        if (localStorage.sound === "off"){
            //console.log("if audio: "+localStorage.sound);
            console.log("No audio");
        }
        else {
            //console.log("else audio: "+localStorage.sound);
            let audio = new Audio("../../Media/Sound/Game Over.ogg");
            console.log("Debug audio")
            audio.play();
        }
    }