//  TO-DO
//X

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
                src: ['../../../Media/Music/Running - DanThePianoMan.wav'],
                html5: true,
                volume: 0,
            }),
            typing_sound: new Howl({
                src: ['../../../Media/Sound/Computer typing.mp3']
            })
        };

        var music = sound.music.play();
        sound.music.fade(0,0.5,10000,music);
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
    proceed_to_typer_element("Computer: We need to find a way to the mainframe.");
    //var typing_sound = sound.typing_sound.play()
    await sleep(2000);
    //sound.stop()

    delay_text = '65'
    color_text = "white"
    await sleep(5000);
    proceed_to_typer_element("Puzzle: The mainframe is on a circuit that leads to no other component. Click on the component you think is the answer.");
    await sleep(10000);
    document.getElementById("puzzle_image").src="../../../Media/Images/Puzzle 1/PCB.png";
    await sleep(1000);
    document.getElementById("chip_4").src='../../../Media/Images/Puzzle 1/Chip.png';
    await sleep(500);
    document.getElementById("chip_2").src='../../../Media/Images/Puzzle 1/Chip.png';
    await sleep(500);
    document.getElementById("chip_3").src='../../../Media/Images/Puzzle 1/Chip.png';
    await sleep(500);
    document.getElementById("chip_1").src='../../../Media/Images/Puzzle 1/Chip.png';
    await sleep(500);
    document.getElementById("chip_5").src='../../../Media/Images/Puzzle 1/Chip.png';
}
typing()