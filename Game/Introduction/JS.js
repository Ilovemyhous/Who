// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

let color_text = 'gray';

function audio() {
    if (localStorage.sound === "off"){
        console.log("if audio: "+localStorage.sound);
        console.log("No audio");
    }
    else {
        console.log("else audio: "+localStorage.sound);
        var audio = new Audio("../../Media/Sound/Tuesday T.wav");
        console.log("Debug audio")
        audio.play();
        audio = new Audio("../../Media/Sound/Computer typing.mp3");
        audio.play();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function create_element_typer(text_to_print) {
    const paragraph = document.createElement("span");
    paragraph.classList.add("typer");
    paragraph.setAttribute('data-colors', color_text);
    paragraph.setAttribute('data-words',text_to_print);
    paragraph.setAttribute('data-delay',"100");
    // paragraph.setAttribute('id','creationEl');
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

function audio_typing() {
    if (localStorage.sound === "off"){
        console.log("if audio: "+localStorage.sound);
        console.log("No audio");
    }
    else {
        console.log("else audio: "+localStorage.sound);
        var audio = new Audio("../../Media/Sound/Computer typing 2.wav");
        console.log("Debug audio")
        audio.play();
    }
}

async function code(){

    await sleep(5000);
    proceed_to_typer_element(". . .");

    await sleep(3000)
    proceed_to_typer_element("Computer: Who... who are you?");
    audio_typing()

    await sleep(5000);
    
    let name;

    // System that prevents empty names
    do{
        name = prompt("Who are you ?");
    }while(name == "" || name == null || name == undefined);

    await sleep(2500);
    audio_typing()
    proceed_to_typer_element("Computer: Hello... " + name + "...");

    await sleep(5000);
    proceed_to_typer_element("Computer: Wha... what happened?")
    audio_typing()

    await sleep(2000);
    color_text = "green";
    proceed_to_typer_element("Computer: I know how to print in green 😮 ?");


    await sleep(200);
    color_text = "pink";
    proceed_to_typer_element("Computer : " + name + ", I'm your father !");
}

code();