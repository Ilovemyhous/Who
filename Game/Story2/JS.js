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
            jumpscare: new Howl({
                src: ['../../Media/Sound/Violin scare.wav'],
                volume: 1,
            }),
            music: new Howl({
                src: ['../../Media/Sound/Ominous Background.wav'],
                html5: true,
                volume: 0,
                loop: true,
            }),
            typing_sound: new Howl({
                src: ['../../Media/Sound/Computer typing.mp3']
            })
        };

        var jumpscare = sound.jumpscare.play();
        var music = sound.music.play();
        sound.music.fade(0,1,5000,music);
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
    document.getElementById('shake').style.animation = ""; //Use this to reset the animation.
    await sleep(100)
    //console.log("Debug function")
    delay_text = "250"
    await sleep(6500);
    color_text = "gray"
    proceed_to_typer_element("Computer: Enough of...");
    //var typing_sound = sound.typing_sound.play()
    await sleep(2000);
    //sound.stop()

    delay_text = '100'
    color_text = "red"
    await sleep(3500);
    proceed_to_typer_element("?????: SILENCE! I'm the one speaking here!");
    await sleep(100);
    document.getElementById('shake').style.animation = "shake 0.25s";

    await sleep(5000)
    document.getElementById('shake').style.animation = "";
    username = localStorage.name
    if (username == "" || username == null || username == undefined) {
        proceed_to_typer_element("?????: Everything was fine until YOU joined!")
    }

    else {
        proceed_to_typer_element("?????: Everything was fine until YOU joined "+username+"!")
    }
    await sleep(3475)
    document.getElementById('shake').style.animation = "shake 0.35s";

    await sleep(3500)
    document.getElementById('shake').style.animation = "";
    delay_text = '175'
    proceed_to_typer_element("?????: Now let me ask you a few questions...")

    //Choice 1
    await sleep(8500)
    proceed_to_typer_element("?????: Do you know WHO I am?")
    await sleep(7500)
    let choice_question1 = "";
        do{
            choice_question1 = prompt("Do you know WHO I am? (Yes or No)");
        }while(choice_question1 == "" || choice_question1 == null || choice_question1 == undefined);

    if (choice_question1 == "Yes") {
        await sleep(10);
        proceed_to_typer_element("?????: We are but dust and shadows. -Horace")
    }

    else {
        await sleep(10)
        document.getElementById("glass_1").src='../../Media/Images/Story 2/Glass1.png';
        document.getElementById('shake').style.animation = "shake 0.5s";
        var sfx = new Audio("../../Media/Sound/Glitch.mp3")
        sfx.play()
    }

    //Choice 2
    await sleep(8500)
    proceed_to_typer_element("?????: Do you know WHO you are?")
    await sleep(7500)
    let choice_question2 = "";
        do{
            choice_question2 = prompt("Do you know WHO you are? (Yes or No)");
        }while(choice_question2 == "" || choice_question2 == null || choice_question2 == undefined);

    if (choice_question2 == "Yes") {
        await sleep(10);
        proceed_to_typer_element("?????: We are but dust and shadows. -Horace")
    }

    else {
        await sleep(10)
        document.getElementById("glass_2").src='../../Media/Images/Story 2/Glass2.png';
        document.getElementById('shake').style.animation = "shake 0.5s";
        var sfx = new Audio("../../Media/Sound/Glitch.mp3")
        sfx.play()
    }

}
typing()