function audio() {

    //EASTER EGG
    //let random = 1 //To define it manually.
    let random = Math.floor(Math.random() * 100);

    if (random == 1) {
        console.log(random);
        console.log("Easter egg");
        var audio = new Audio("../../Media/Sound/snd_bgmV5.ogg");
        console.log("Debug audio")
        audio.play();

        //IGNORE GARBAGE CODE
            /*//var image = ['../../Media/Images/GameOver/Creepy face.png']
            //document.getElementById("easter_egg").style.backgroundImage ="url('../../Media/Images/GameOver/Creepy face.png')"
            //document.getElementById("easter_egg_image").src = "../../Media/Images/GameOver/Creepy face.png"
            //document.getElementById("easter_egg").animation = "opacity 7.5s linear forwards;"
            //document.getElementById("easter_egg").innerHTML = <img id="easter_egg_image" src="../../Media/Images/GameOver/Creepy face.png"></img>
            /*var image = ['../../Media/Images/GameOver/Creepy face.png']
            var img = document.getElementById("img")
            img.style.backgroundImage = "url(" + image + ")"
            img.innerText = image*/

        let img = document.createElement("img")
        img.style = "animation: opacity_image 75s linear forwards"
        //img.style = "animation: opacity_text 1s linear 10s forwards"
        img.src = "../../Media/Images/GameOver/Creepy face.png"
        document.getElementById("easter_egg").appendChild(img)
        document.getElementById("gameover").style = "animation: opacity_text 10s linear forwards"
        document.getElementById("back").style = "animation: opacity_text 10s linear forwards"
        document.getElementById("restart").style = "animation: opacity_text 10s linear forwards"
        document.getElementById("back").innerHTML = "No exit"
        document.getElementById("restart").innerHTML = "YOU ARE STUCK WITH ME!"
    }

    else {
        console.log(random);
        if (localStorage.sound === "off"){
            //console.log("if audio: "+localStorage.sound);
            console.log("No audio");
        }
        else {
            //console.log("else audio: "+localStorage.sound);
            var audio = new Audio("../../Media/Sound/Game Over.ogg");
            console.log("Debug audio")
            audio.play();
        }
    }
}