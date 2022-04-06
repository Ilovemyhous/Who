//  TO-DO
//Fix hawler.js to play the right sounds.

// Debugging stuff
//console.log(localStorage);
console.info(localStorage.sound);

let color_text = 'gray';
let delay_text = '100';

function sleep(ms) {        //Command that allow the sleep command
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.info("No audio");
    }
    else {
        //Defines the audio for the typing sound, and audio.
        var sound = new Howl({
            src: ['../../Media/Music/Black Fingerprint - Dylan Owen.wav', '../../Media/Sound/Computer typing.mp3'],
            html5: true,
        });

        var music = sound.play();
        var typing_sound = sound.play();

        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
        sound.play()
        sound.fade(0, 0.5, 10000, music)
        await sleep(5000)
        sound.play(typing_sound)
    }
}