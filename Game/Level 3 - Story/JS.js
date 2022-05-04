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