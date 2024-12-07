// Debugging stuff
//console.log(localStorage);
console.info(localStorage.sound);

let color_text = 'gray';
let delay_text = '100';

// Define the audio for the typing sound.
let sound;

if (localStorage.sound === "off") {
    console.log("No audio");
}
else {
    sound = new Howl({
        src: ['../../Media/Sound/Computer typing.wav'],
    });
}

// Check audio
window.onload = function () {
    if (localStorage.sound === "off") {
        console.log("No audio");
    } else {
        let typingSound = new Audio("../../Media/Sound/Tuesday T.wav");
        typingSound.play();
        let typingSoundHowl = new Howl({
            src: ['../../Media/Sound/Computer typing.mp3'],
            preload: true
        });
        typingSoundHowl.play();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function create_element_typer(text_to_print) {
    const paragraph = document.createElement("span");
    paragraph.classList.add("typer");
    paragraph.setAttribute('data-colors', color_text);
    paragraph.setAttribute('data-words', text_to_print);
    paragraph.setAttribute('data-delay', delay_text);
    paragraph.setAttribute('data-loop', "1");
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

async function code() {
    delay_text = "1000";
    await sleep(5000);
    proceed_to_typer_element(". . .");

    delay_text = "100";
    color_text = "darkred";
    await sleep(7500);
    proceed_to_typer_element("?????: Who... who are you?");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(2750);
        sound.stop();
    }

    await sleep(5000);

    let name;

    // Prevent empty names, character limit (20) and only letters
    while (name === "" || name == null || name.length > 20 || !/^[a-zA-Z]*$/g.test(name)) {
        name = prompt("Who are you?");
        localStorage.name = name;
        console.log("Name: " + localStorage.name);
    }

    // For the Easter egg.
    if (name === "root" || name === "sudo") {
        console.log("Debug Easter egg");
        color_text = "orange";
        proceed_to_typer_element("Easter Egg: This ain't a Linux terminal.");

        if (localStorage.sound !== "off") {
            sound.play();
            await sleep(5000);
            sound.stop();
        }

        do {
            name = prompt("Who are you?");
        } while (name === "" || name == null || name.length > 20 || !/^[a-zA-Z]*$/g.test(name) || name === "sudo" || name === "root");

        localStorage.name = name;
        console.log("Name: " + localStorage.name);
    }

    color_text = "white";
    await sleep(2500);
    proceed_to_typer_element("You: " + name + ".");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(2750);
        sound.stop();
    }

    await sleep(5000);
    proceed_to_typer_element("?????: Hello... " + name + "...");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(2750);
        sound.stop();
    }

    await sleep(5000);
    proceed_to_typer_element("?????: Wha... what happened?");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(3000);
        sound.stop();
    }

    delay_text = "1000";
    color_text = "white";
    await sleep(5000);
    proceed_to_typer_element(". . .");

    delay_text = "100";
    color_text = "gray";
    await sleep(7500);
    proceed_to_typer_element("?????: It looks like something crashed.");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(4000);
        sound.stop();
    }

    color_text = "lime";
    await sleep(7500);
    proceed_to_typer_element("Computer: I'm the computer by the way.");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(4000);
        sound.stop();
    }

    color_text = "aqua";
    await sleep(5000);
    proceed_to_typer_element("Computer: Nice to meet you " + name + ".");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(3525);
        sound.stop();
    }

    color_text = "gray";
    await sleep(7500);
    proceed_to_typer_element("Computer: Do you want to help me?");

    if (localStorage.sound !== "off") {
        sound.play();
        await sleep(3250);
        sound.stop();
    }

    await sleep(5000);
    ask_help();

    async function ask_help() {
        let choice_help = "";
        do {
            choice_help = prompt("Do you want to help me? (Yes or No)");
        } while (choice_help === "" || choice_help == null);

        localStorage.choice_help = choice_help;
        console.log("Choice: " + localStorage.choice_help);

        if (choice_help.toLowerCase() === "yes") {
            console.info("Help accepted");
            delay_text = "500";
            color_text = "lime";

            if (localStorage.sound !== "off") {
                let helpAudio = new Audio("../../Media/Sound/User Interface, Data, Processing, Loading, Old Computer, Fast Stutter Followed By Choppy Stutter SND68328 1.wav");
                helpAudio.play();
            }

            proceed_to_typer_element("Computer: Thank you.");
            await sleep(10500);
            color_text = "gray";
            delay_text = "100";
            proceed_to_typer_element("Computer: Okay, let's start.");

            if (localStorage.sound !== "off") {
                sound.play();
                await sleep(3000);
                sound.stop();
            }

            await sleep(3000);
            proceed_to_typer_element("Computer: But we'll need to find our way into the mainframe.");

            if (localStorage.sound !== "off") {
                sound.play();
                await sleep(10000);
                sound.stop();
            }

            // Redirect to the next level
            window.open("../Levels/Level1/index.html", "_self");
        } else if (choice_help.toLowerCase() === "no") {
            console.info("Help rejected");
            delay_text = "500";
            color_text = "red";

            if (localStorage.sound !== "off") {
                let rejectionAudio = new Audio("../../Media/Sound/Scary Violin.mp3");
                rejectionAudio.play();
            }

            proceed_to_typer_element("Computer: Well... in this case...");
            await sleep(20000);

            if (localStorage.sound !== "off") {
                let scareAudio = new Audio("../../Media/Sound/Violin scare.wav");
                scareAudio.play();
            }

            document.getElementById("body").style.background = "red";
            await sleep(500);
            window.close(); // Alternative scenario. Just for fun.
            window.open("../GameOver/index.html", "_self");
        } else {
            proceed_to_typer_element("Computer: Sorry, I didn't understand you.");
            if (localStorage.sound !== "off") {
                sound.play();
                await sleep(4000);
                sound.stop();
            }

            await sleep(4000);
            ask_help(); // Retry asking for help
        }
    }
}

// Start the code execution
code();