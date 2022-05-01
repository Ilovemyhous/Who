//  TO-DO
//Place the chips at the right position.

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
            music: new Howl({
                src: ['../../Media/Music/Black Fingerprint - Dylan Owen.wav'],
                //src: ['../../Media/Sound/Wii crashing sound.mp3'],
                html5: true,
                volume: 0,
            }),
            typing_sound: new Howl({
                src: ['../../Media/Sound/Computer typing.mp3']
            })
        };

        var music = sound.music.play();
        sound.music.fade(0,0.5,5000,music);
        var typing_sound = sound.typing_sound.play()
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
    delay_text = "100"
    await sleep(5000);
    proceed_to_typer_element("Computer: Hold on. There's a password with a puzzle on it.");
    //var typing_sound = sound.typing_sound.play()
    await sleep(2000);
    //sound.stop()

    delay_text = '65'
    color_text = "white"
    await sleep(5000);
    proceed_to_typer_element("Puzzle: Fifteen people are trapped aboard a ship that's going to sink in exactly 20 minutes. Their only chance for survival is the five-person life raft stowed on their vessel. To make matters worse the waters around the ship are teeming with man-eating sharks. So swimming to safety is out of the question. A round-trip to the nearest island and back to the ship takes nine minutes on the raft. How many people will live to see dry land?");
    await sleep(30000);
    //var answer = prompt("Your answer.")
    let answer_input = document.getElementById("answer");
    answer_input.classList.toggle("show");
    await sleep(1000);
    button_answer.classList.toggle("show");
}
typing()

function check_answer() {
    let answer = document.getElementById("answer").value
    if ((answer === "2") || (answer === "Two") || (answer === "two")) {
        //console.info("Correct answer!");
    }

    else {
        //console.info("Wrong answer!");
        window.open('../GameOver/HTML.html','_self')
    }
}