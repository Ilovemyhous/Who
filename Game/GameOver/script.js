window.onload = function() {

    //EASTER EGG
    //let random = 1 //To define it manually.
    let random = Math.floor(Math.random() * 100);

    if (random === 1) {
        console.log(random);
        console.log("Easter egg");
        let audio = new Audio("../../Media/Sound/snd_bgmV5.ogg");
        console.log("Debug audio");
        audio.play();

        let img = document.createElement("img");
        img.style = "animation: opacity_image 110s linear forwards";
        //img.style = "animation: opacity_text 1s linear 10s forwards"
        img.src = "../../Media/Images/GameOver/Creepy face.png";
        document.getElementById("easter_egg").appendChild(img);

        //document.body.style.backgroundImage = "url('../../Media/Images/GameOver/dark-eye.gif')";
        //document.body.style.backgroundSize = "cover";
        //document.body.style.backgroundRepeat = "no-repeat";
        //document.body.style.backgroundPosition = "center";
        document.body.classList.add("fade_in_eye");

        document.getElementById("gameover").style = "animation: opacity_text 10s linear forwards";
        document.getElementById("back").style = "animation: opacity_text 10s linear forwards";
        document.getElementById("restart").style = "animation: opacity_text 10s linear forwards";
        document.getElementById("back").innerHTML = "No exit";
        document.getElementById("restart").innerHTML = "YOU ARE STUCK WITH ME!";

        function confirmExit() {
            return "Do you really want to leave me alone?";
        }
        window.onbeforeunload = confirmExit;
    }

    else {
        console.log(random);
        if (localStorage.sound === "off"){
            //console.log("if audio: "+localStorage.sound);
            console.log("No audio");
        }
        else {
            //console.log("else audio: "+localStorage.sound);
            let audio = new Audio("../../Media/Sound/Game Over.ogg");
            console.log("Debug audio");
            audio.play();
        }
    }

    document.getElementById("restart-link").onclick = function(event) {
        if (!confirm("Are you sure you want to restart the game?")) {
            event.preventDefault();
        }
    };
};