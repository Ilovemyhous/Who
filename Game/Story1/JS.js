//  TO-DO
//Add the audio
//Finish the sotry for this page.

// Debugging stuff
//console.log(localStorage);
console.info(localStorage.sound);

let color_text = 'gray';
let delay_text = '100';

function sleep(ms) {        //Command that allow the sleep command
    return new Promise(resolve => setTimeout(resolve, ms));
}

    //Code responsible for audio
async function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.info("No audio");
    }
    else {
        //Defines the audio for the typing sound, and audio.
        var sound = {
            hello: new Howl({
                src: ['../../Media/Sound/Hello.wav'],
                volume: 1,
            }),
            typing_sound: new Howl({
                src: ['../../Media/Sound/Computer typing.mp3']
            })
        };

        var hello = sound.hello.play();
        var typing_sound = sound.typing_sound
    }
}

// Code for the typing animation
function create_element_typer(text_to_print) {
    const paragraph = document.createElement("span");
    paragraph.classList.add("typer");
    paragraph.setAttribute('data-colors',color_text);
    paragraph.setAttribute('data-words',text_to_print);
    paragraph.setAttribute('data-delay',delay_text);
    //paragraph.setAttribute('id','creationEl');
    paragraph.setAttribute('data-loop',"1");
    return paragraph;
}

function proceed_to_typer_element(text_to_print) {
    const div = document.createElement("div");
    const my_element = create_element_typer(text_to_print);
    div.appendChild(my_element);
    const cursor = document.querySelector('.cursor');
    div.appendChild(cursor);
    document.querySelector('h2').appendChild(div);
    new Typer(my_element);
}

// "Main" code, where you can input text, colour, and delay.
async function typing() {
    await sleep(100)
    //console.log("Debug function")
    delay_text = "250"
    await sleep(10000);
    color_text = "yellow"
    proceed_to_typer_element("Computer: What... what was that?");
    //var typing_sound = sound.typing_sound.play()
    await sleep(2000);
    //sound.stop()

    delay_text = '100'
    color_text = "gray"
    await sleep(7500);
    proceed_to_typer_element("Computer: I think we are not alone...");

    await sleep(5000);
    color_text = "red"
    proceed_to_typer_element("?????: Sorry to disturb you but I think I've done a little oopsie whoopsie.")

    delay_text = '100'
    color_text = "gray"
    await sleep(8000);
    proceed_to_typer_element("Computer: What... what do you mean?");

    delay_text = '100'
    color_text = "red"
    await sleep(7000);
    proceed_to_typer_element("?????: You remember what you said about something crashed?");
    await sleep(7500);
    delay_text = '250'
    proceed_to_typer_element("?????: Well... it was ME!")
    await sleep(7000);
    delay_text = '100'
    console.log("Name: "+localStorage.name);
    username = localStorage.name
    if (username == "" || username == null || username == undefined) {
        proceed_to_typer_element("?????: I also know a few things about you.")
    }

    else {
        proceed_to_typer_element("?????: I also know a few things about you... " +username+".")
    }
    await sleep(7500)
    //Code for the webcam
    var constraints = { audio: false, video: { width: 1280, height: 720 } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
    var video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
        video.play();
        console.log("Webcam access granted.");
        access_granted()
    };
    })
    // Always check for errors at the end.
    .catch(function(err) { 
    console.log(err.name + ": " + err.message);
    console.log(err.name);
    if (err.name == "NotAllowedError") {
        alert("Access to camera rejected.")
        proceed_to_typer_element("?????: So you rejected the access to your webcam? I would probably have done the same.")
    }

    if (err.name == "NotFoundError") {
        alert("No Webcam has been detected.")
        proceed_to_typer_element("?????: Hmmm... no webcam detected. That's fine.")
    }
    });
    
    function access_granted() {
        proceed_to_typer_element("?????: Hello there!")
    }

    await sleep(5000)
    proceed_to_typer_element("?????: I can also access your location.")
    navigator.geolocation.getCurrentPosition(function(position) {
        gps_long = position.coords.latitude
        gps_lat = position.coords.longitude
        console.log(gps_long);
        console.log(gps_lat);
        proceed_to_typer_element("?????: You're at "+gps_long+" and "+gps_long+".")
    });

    await sleep(5000)
    proceed_to_typer_element("?????: I can also write things in the clipboard.")
    navigator.clipboard.writeText("Hello world!");
    
}
typing()