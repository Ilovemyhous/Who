// Debugging stuff
//console.log(localStorage);
//console.info(localStorage.sound);

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
            jumpscare: new Howl({
                src: ['../../../Media/Sound/Violin scare.wav'],
                volume: 1,
            }),
            music: new Howl({
                src: ['../../../Media/Sound/Ominous Background.wav'],
                html5: true,
                volume: 0,
                loop: true,
            }),
            typing_sound: new Howl({
                src: ['../../../Media/Sound/Computer typing.mp3']
            })
        };

        sound.jumpscare.play();
        let music = sound.music.play();
        sound.music.fade(0,1,5000,music);
        //let typing_sound = sound.typing_sound
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
    //let typing_sound = sound.typing_sound.play()
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
    let username = localStorage.name
    if (username === "" || username == null) {
        proceed_to_typer_element("?????: Everything was fine until YOU joined!")
    }

    else {
        proceed_to_typer_element("?????: Everything was fine until YOU joined "+username+"!")
    }
    await sleep(3475)
    document.getElementById('shake').style.animation = "shake 0.35s";

    await sleep(3600)
    delay_text = '175'
    proceed_to_typer_element("?????: Now let me ask you a few questions...")


    //Choice 1
    document.getElementById('shake').style.animation = "";
    await sleep(8500)
    proceed_to_typer_element("?????: Do you know WHO I am?")
    await sleep(5500)
    let choose_no = 0
    let choice_question1 = "";
        do{
            choice_question1 = prompt("Do you know WHO I am? (Yes or No)");
        }while(choice_question1 === "" || choice_question1 == null);

    if (choice_question1.toLowerCase() === "yes") {
        await sleep(10);
        proceed_to_typer_element("?????: We are but dust and shadows. -Horace")
        console.log("Numbers of no: "+choose_no);
    }

    else {
        await sleep(10)
        document.getElementById('shake').style.animation = "shake 0.25s";
        document.getElementById("glass_1").src='../../../Media/Images/Story 2/Glass1.png';
        let sfx = new Audio("../../../Media/Sound/Glitch.mp3")
        sfx.play()
        choose_no ++
        console.log("Numbers of no: "+choose_no);
        document.getElementById('shake').style.animation = "";
    }

    //Choice 2
    await sleep(7500)
    proceed_to_typer_element("?????: Do you know WHO you are?")
    await sleep(7500)
    let choice_question2 = "";
        do{
            choice_question2 = prompt("Do you know WHO you are? (Yes or No)");
        }while(choice_question2 === "" || choice_question2 == null);

    if (choice_question2.toLowerCase() === "yes") {
        await sleep(10);
        proceed_to_typer_element("?????: What's the point?")
        console.log("Numbers of no: "+choose_no);
    }

    else {
        await sleep(10)
        document.getElementById("glass_2").src='../../../Media/Images/Story 2/Glass2.png';
        document.getElementById('shake').style.animation = "shake 0.25s";
        let sfx = new Audio("../../../Media/Sound/Glitch.mp3")
        sfx.play()
        choose_no ++
        console.log("Numbers of no: "+choose_no);
    }

    if (choose_no === 2) {
        //console.log("Debug, 2 no");
        let audio_no = new Audio("../../../Media/Sound/Scary Violin.mp3")
        audio_no.play()
        /*let sound = {
            jumpscare: new Howl({
                src: ['../../../Media/Sound/Scary violin loop.wav'],
                volume: 1,
                loop: false,
            })
        };
        let jumpscare = sound.jumpscare.play();*/
    }

    //Choice 3
    document.getElementById('shake').style.animation = "";
    await sleep(8500)
    proceed_to_typer_element("?????: Do you know WHY you are here?")
    await sleep(7500)
    let choice_question3 = "";
        do{
            choice_question3 = prompt("Do you know WHY you are here? (Yes or No)");
        }while(choice_question3 === "" || choice_question3 == null);

    console.log(choice_question2);
    console.log(choice_question3);

    if (choice_question3.toLowerCase() === "yes") {
        console.log("Numbers of no: "+choose_no);
        await sleep(10);
        delay_text = "555"
        username = localStorage.name
        if (username === "" || username == null) {
            proceed_to_typer_element("?????: Why do you persist?")
        }

        else {
            proceed_to_typer_element("?????: Why do you persist "+username+"?")
        }
    }

    else {
        await sleep(10)
        console.log("Debug");
        document.getElementById("glass_3").src='../../../Media/Images/Story 2/Glass3.png';
        document.getElementById('shake').style.animation = "shake 0.5s";
        let sfx = new Audio("../../../Media/Sound/Glitch.mp3")
        sfx.play()
        choose_no ++
        console.log("Numbers of no: "+choose_no);
    }

    if (choose_no === 3) {
        document.body.style.background = "darkred";
    }

    let rise = new Audio("../../../Media/Sound/Cinematic Rise.wav")
    rise.play()

    if (choose_no === 0) {
        await sleep(19500)
        document.getElementById('placeholder').innerHTML = "LEAVE ME ALONE!"

        let download = new File(
            ["WHY ARE YOU HERE???"],
            "why?.txt",
            {type: "text/plain:charset=utf8"}
        );
        window.saveAs(download)

        await sleep(100)
        window.open("../../Levels/Level4/index.html","_self")
    }

    if (choose_no > 0 && choose_no < 4) {
        delay_text = "200"
        await sleep(1000)
        proceed_to_typer_element("?????: And I thought I could trust you...")
        await sleep(11000)
        proceed_to_typer_element("?????: In WHO can we trust nowadays?!")
        await sleep(8500)
        document.getElementById('placeholder').innerHTML = "LEAVE ME ALONE!"

        let download = new File(
            ["LEAVE ME ALONE!!!"],
            "leave me alone.txt",
            {type: "text/plain:charset=utf8"}
        );
        window.saveAs(download)

        await sleep(100)
        window.open("../../Levels/Level4/index.html","_self")
    }

}
typing()