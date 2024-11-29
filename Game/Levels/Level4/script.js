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
    console.info("Debug audio");
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.info("No audio");
    }
    else {
        //Defines the audio for the typing sound, and audio.
        let sound = {
            music: new Howl({
                src: ['../../../Media/Sound/Wind Chimes.mp3'],
                html5: true,
                volume: 0,
                loop: true,
            }),
            metal_sound: new Howl({
                src: ['../../../Media/Sound/MetalClang.wav']
            })
        };

        let music = sound.music.play();
        sound.music.fade(0,0.25,10000,music);

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
    await sleep(4000)
    //console.log("Debug function")
    delay_text = "100"
    color_text = "green"
    proceed_to_typer_element("In order to complete the reboot you must solve this puzzle. This is due to a safety measure.")
    await sleep(11000);
    delay_text = "35"
    color_text = "white"
    proceed_to_typer_element("Puzzle: Ten candles stand burning in a dining room. A strong breeze blows in through an open window and extinguishes two of them. Checking back in on the candles later you see that one more candle has gone out. To make sure no more flames go out you shut the window. Assuming the wind doesn't extinguish any more candles how many candles do you have left in the end?")
    await sleep(20000);
    //var answer = prompt("Your answer.")
    let answer_input = document.getElementById("answer");
    answer_input.classList.toggle("show");
    await sleep(1000);
    button_answer.classList.toggle("show");
}
typing()

//Runs the "check_answer" function when you press enter.
function clickPress(event) {
    if (event.keyCode == 13) {
        check_answer()
    }
}

async function check_answer() {
    let answer = document.getElementById("answer").value
    if (answer === "3") {
        //console.info("Correct answer!");
        await sleep(250)
        delay_text ="100"
        color_text = "green"
        proceed_to_typer_element("Continuing the reboot process.")
        await sleep(4000)
        delay_text = "1000"
        color_text = "white"
        proceed_to_typer_element(". . .")
        await sleep(4000)
        window.open('../../Story/Story3/HTML.html','_self')
    }

    else {
        //console.info("Wrong answer!");
        //sound.stop()
        if (localStorage.sound === "off") {
            //Nothing happens
        } else {
            //sound.metal_sound.play()
            stop()
            var audio = new Audio("../../../Media/Sound/MetalClang.wav");
            audio.play()
        }
        button_answer.classList.toggle("hide");
        answer_input.classList.toggle("hide");
        delay_text ="64"
        color_text = "red"
        proceed_to_typer_element("ERROR: System is in lockdown mode!")
        await sleep(3500)
        proceed_to_typer_element("ERROR: Reboot canceled!")
        await sleep(2500)
        window.open('../../GameOver/HTML.html','_self')
    }
}