// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

const sound_playable = localStorage.sound === "on";

function play_typing() {
    if (sound_playable) {
        audio = new Audio("../../Media/Sound/Computer typing 2.wav");
        audio.play(); 
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function create_element_typer(text_to_print) {
    const paragraph = document.createElement("span");
    paragraph.classList.add("typer");
    paragraph.setAttribute('data-colors', 'gray');
    paragraph.setAttribute('data-words',text_to_print);
    paragraph.setAttribute('data-delay',"100");
    paragraph.setAttribute('id','creationEl');
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

async function code(){

    await sleep(4000);

    proceed_to_typer_element("Computer: Who... who are you?");
    play_typing();

    await sleep(4000);
    
    let name;

    // System that prevents empty names
    do{
        name = prompt("Who are you?");
    }while(name == "" || name == null || name == undefined);

    proceed_to_typer_element("Hello..." + name + " ...");
}

if (sound_playable) {
    console.log("else audio: "+localStorage.sound);
    var audio = new Audio("../../Media/Sound/Tuesday T.wav");
    console.log("Debug audio")
    audio.play();
    audio = new Audio("../../Media/Sound/Computer typing.mp3");
    audio.play();
}

code();
