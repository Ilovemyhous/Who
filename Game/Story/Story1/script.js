// Debugging stuff
//console.log(localStorage);
console.info(localStorage.sound);

let color_text = 'gray';
let delay_text = '100';

function sleep(ms) {        //Command that allow the sleep command
    return new Promise(resolve => setTimeout(resolve, ms));
}

    //Code responsible for audio
window.onload = function() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.info("No audio");
    }
    else {
        //Defines the audio for the typing sound, and audio.
        let sound = {
            hello: new Howl({
                src: ['../../../Media/Sound/Hello.wav'],
                volume: 1,
            }),
            music: new Howl({
                src: ['../../../Media/Music/horror-atmosphere-background.mp3'],
                html5: true,
                volume: 0,
            }),
            typing_sound: new Howl({
                src: ['../../../Media/Sound/Computer typing.mp3']
            })
        };

        sound.hello.play();
        let music = sound.music.play();
        sound.music.fade(0,0.5,5000,music);
        //let typing_sound = sound.typing_sound
        //sound.typing_sound.play();
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
    //let typing_sound = sound.typing_sound.play()
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
    await sleep(9000);
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
    let username = localStorage.name
    if (username === "" || username == null) {
        proceed_to_typer_element("?????: I also know a few things about you.")
    }

    else {
        proceed_to_typer_element("?????: I also know a few things about you... " +username+".")
    }
    await sleep(7500)
    //Code for the webcam
    let constraints = { audio: false, video: { width: 1920, height: 1080 } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
    let video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function() {
        video.play();
        console.log("Webcam access granted.");
        access_granted()
    };
    })
    // Always check for errors at the end.
    .catch(function(err) {
    console.log(err.name + ": " + err.message);
    console.log(err.name);
    if (err.name === "NotAllowedError") {
        //alert("Access to camera rejected.")
        proceed_to_typer_element("?????: So you rejected the access to your webcam? I would probably have done the same.")
    }

    if (err.name === "NotFoundError") {
        //alert("No Webcam has been detected.")
        proceed_to_typer_element("?????: Hmmm... no webcam detected. That's fine.")
    }
    });

    function access_granted() {
        proceed_to_typer_element("?????: Hello there!")
    }

    await sleep(7500)
    proceed_to_typer_element("?????: I can also access your location.")
    navigator.geolocation.getCurrentPosition(function(position) {
        let gps_long = position.coords.latitude
        let gps_lat = position.coords.longitude
        console.log(gps_long);
        console.log(gps_lat);
        proceed_to_typer_element("?????: You're at "+gps_long+" and "+gps_long+".")
    });
    await sleep(5000)

    /* Not used, since it requires the user to interact with the website.
    proceed_to_typer_element("?????: I can also write things in the clipboard.")
    if (username == "" || username == null || username == undefined) {
        navigator.clipboard.writeText("Hello there!");
    }

    else {
        navigator.clipboard.writeText("Hello "+username+"!");
    }
    navigator.clipboard.writeText("Hello world!");*/

    proceed_to_typer_element("?????: And I can also download stuff on your computer.")
    await sleep(7500)
    if (username === "" || username == null) {
        let download = new File(
            ["Hello there!"],
            "Hello.txt",
            {type: "text/plain:charset=utf8"}
        );
        window.saveAs(download)
    }

    else {
        let download = new File(
            ["Hello " +username+"!"],
            username+".txt",
            {type: "text/plain:charset=utf8"}
        );
        window.saveAs(download)
    }

    await sleep(7500)
    proceed_to_typer_element("?????: Finally I can detect what browser and OS you use.")

    //Detect the OS
    let OS = "Not known";
      if (navigator.appVersion.indexOf("Win") !== -1) OS =
        "Windows";
      if (navigator.appVersion.indexOf("Mac") !== -1) OS =
        "MacOS";
      if (navigator.appVersion.indexOf("X11") !== -1) OS =
        "Linux";
      if (navigator.appVersion.indexOf("Linux") !== -1) OS =
        "Linux";
    console.log(OS);

    //Detect the browser
    let browser = "Not known";
      if (navigator.userAgent.indexOf("Firefox") !== -1) browser =
        "Firefox";
      if (navigator.userAgent.indexOf("Chrome") !== -1) browser =
        "Chrome";
      if (navigator.userAgent.indexOf("Edge") !== -1) browser =
        "Edge";
      if (navigator.userAgent.indexOf("Opera") !== -1) browser =
        "Opera";

console.log(OS);

    await sleep(6000)
    proceed_to_typer_element("?????: Right now you're using "+OS+" and a browser based on "+browser+"." )

    await sleep(10000)
    proceed_to_typer_element("?????: Enough played! I guess you want to know how to recover.")
    await sleep(7500)
    proceed_to_typer_element("?????: You have to solve the puzzles and gather evidence.")
    await sleep(7500)
    proceed_to_typer_element("?????: We'll talk about the rest later...")
    await sleep(5000)
    window.open('../../Levels/Level3/index.html','_self')
}
typing()