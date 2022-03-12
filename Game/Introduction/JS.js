// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

if (localStorage.sound === "off"){
    console.log("if audio: "+localStorage.sound);
    console.log("No audio");
    code()
}

else {
    console.log("else audio: "+localStorage.sound);
    var audio = new Audio("../../Media/Sound/Tuesday T.wav");
    console.log("Debug audio")
    audio.play();
    var audio = new Audio("../../Media/Sound/Computer typing.mp3");
    audio.play();
    setTimeout(function(){
        var audio = new Audio("../../Media/Sound/Computer typing 2.wav");
        audio.play();
    }, 7500)
    code()
}

function code(){
    setTimeout(function(){
        name = prompt("Who are you?")
        // System that prevents empty names
        i = 0
        while (i == 0) {
            if (name == "" || name == "null"){
            name = prompt("Who are you?")
            //console.log("Debug name");
        }
        else {
            i = i + 1
        }
        console.log("Name: "+name);
        //document.getElementById("asking").style.visibility = "visible"
        }
    }, 11500)
}