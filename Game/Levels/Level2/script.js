// Debugging stuff
// console.log(localStorage);
console.info(localStorage.sound);

let color_text = "gray"; // Default text color
let delay_text = "100"; // Default delay for typing

// Function to create a sleep delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to end the skippable sleep
function end(resolve, skip) {
    console.log("end");
    document.removeEventListener("keydown", skip);
    resolve();
}

// Skip function to handle key presses
function skip(event, resolve) {
    console.log("skipping");
    console.log(event);
    switch (event.key) {
        case "Enter":
        case " ":
        case "Space":
        case "Escape":
            end(resolve);
            break;
        default:
            break;
    }
}

// Skippable sleep function that allows skipping with key presses
function skippable_sleep(ms) {
    return new Promise(resolve => {
        document.addEventListener("keydown", (event) => skip(event, resolve));
        setTimeout(() => end(resolve), ms);
    });
}

// Code responsible for audio
window.onload = function() {
    if (localStorage.sound === "off") {
        // Audio is turned off
    } else {
        let sound = {
            music: new Howl({
                src: ["../../../Media/Music/Mystery - Wee Free Music.wav"],
                html5: true,
                volume: 0,
            }),
            typing_sound: new Howl({
                src: ["../../../Media/Sound/Computer typing.mp3"]
            })
        };

        let music = sound.music.play();
        sound.music.fade(0, 0.5, 5000, music);
        // let typing_sound = sound.typing_sound.play();
    }
};

// Function to create a typing element
function create_element_typer(text_to_print) {
    const paragraph = document.createElement("span");
    paragraph.classList.add("typer");
    paragraph.setAttribute("data-colors", color_text);
    paragraph.setAttribute("data-words", text_to_print);
    paragraph.setAttribute("data-delay", delay_text);
    paragraph.setAttribute("data-loop", "1");
    return paragraph;
}

// Function to proceed to the typing element
function proceed_to_typer_element(text_to_print) {
    const div = document.createElement("div");
    const my_element = create_element_typer(text_to_print);
    div.appendChild(my_element);
    const cursor = document.querySelector(".cursor");
    div.appendChild(cursor);
    document.querySelector("h2").appendChild(div);
    return new Typer(my_element);
}

// Function for skippable typing animation
async function skippable_typer_element(text_to_print, delay) {
    let typer = proceed_to_typer_element(text_to_print);
    await skippable_sleep(delay);
    typer.delay = 0;
}

// "Main" code, where you can input text, color, and delay
async function typing() {
    await sleep(100);
    await skippable_typer_element("Computer: Here we are. At the mainframe.", 5000);
    await skippable_typer_element("Computer: Hold on. There's a password with a puzzle on it.", 2000);
    delay_text = "65";
    color_text = "white";
    await skippable_sleep(5000);
    await skippable_typer_element("Puzzle: Mice are famous for their ability to multiply at breakneck speeds. The type of mouse we have here gives birth once a month birthing 12 babies each time. Baby mice mature and can give birth two months after they are born. You picked up one of these darling baby mice at the pet shop and brought it home the day after it was born. In 10 months from now how many mice will you have?", 32000);
    //let answer_input = document.getElementById("answer");
    //answer_input.classList.toggle("show");
    document.getElementById("answer").classList.toggle("show");
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
    await sleep(1000);
    let button_answer = document.getElementById("button_answer");
    button_answer.classList.toggle("show");
}
typing();

// Function to check the user's answer
function check_answer() {
    let answer = document.getElementById("answer").value;
    if (answer === "1") {
        window.open("../../Story/Story1/index.html", "_self");
    } else {
        window.open("../../GameOver/index.html", "_self");
    }
}

function clickPress(event) {
    if (event.key === "Enter") {
        check_answer();
    }
}
document.getElementById("answer").addEventListener("keypress", clickPress);

//Runs the "check_answer" function when you press enter.
document.onkeydown = function(event) {
    if (event.key === "Enter") {
        check_answer();
    }
};