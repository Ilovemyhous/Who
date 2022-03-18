// Debugging stuff
//console.log(localStorage);
console.log(localStorage.sound);

let color_text = 'gray';
let delay_text = '100';

function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        var audio = new Audio("../../Media/Sound/Tuesday T.wav");
        //console.log("Debug audio")
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

function audio_typing() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        var audio = new Audio("../../Media/Sound/Computer typing 2.wav");
        //console.log("Debug audio")
        audio.play();
    }
}

async function code(){

    delay_text = "1000"
    await sleep(5000);
    proceed_to_typer_element(". . .");

    delay_text = "100"
    color_text = "darkred"
    await sleep(7500)
    proceed_to_typer_element("?????: Who... who are you?");
    audio_typing()

    await sleep(5000);
    
    let name;

    // System that prevents empty names
    do{
        name = prompt("Who are you ?");
    }while(name == "" || name == null || name == undefined);
    localStorage.name = name
    console.log("Name: "+localStorage.name);

    color_text = "gray"
    await sleep(2500);
    audio_typing()
    proceed_to_typer_element("?????: Hello... " + name + "...");

    await sleep(5000);
    proceed_to_typer_element("?????: Wha... what happened?")
    audio_typing()

    delay_text = "1000"
    color_text = "white"
    await sleep(5000);
    proceed_to_typer_element(". . .");

    delay_text = "100"
    color_text = "gray"
    await sleep(7500);
    proceed_to_typer_element("?????: It looks like something crashed.")
    audio_typing()

    color_text = "green"
    await sleep(7500);
    proceed_to_typer_element("Computer: I'm the computer btw.")
    audio_typing()

    color_text = "aqua"
    await sleep(5000);
    proceed_to_typer_element("Computer: Nice to meet you "+name+".")
    audio_typing()

    color_text = "gray"
    await sleep(7500);
    proceed_to_typer_element("Computer: Do you want to help me?")
    audio_typing()
    await sleep(5000);
    ask_help()

    let choice_help = "";

    async function ask_help(params) {
        let choice_help = "";
        do{
            choice_help = prompt("Do you want to help me? (Yes or No)");
        }while(choice_help == "" || choice_help == null || choice_help == undefined);
        localStorage.choice_help = choice_help
        console.log("Choice: "+localStorage.choice_help);

        if (choice_help == "Yes") {
            console.log("Help accepted");
            delay_text = "500"
            color_text = "green"
            proceed_to_typer_element("Computer: THANK YOU!")
            audio = new Audio("../../Media/Sound/User Interface, Data, Processing, Loading, Old Computer, Fast Stutter Followed By Choppy Stutter SND68328 1.wav");
            audio.play();
        }
        else if (choice_help == "No"){
            console.log("Help rejected");
            delay_text = "500"
            color_text = "red"
            audio = new Audio("../../Media/Sound/Scary Violin.mp3");
            audio.play();
            proceed_to_typer_element("Computer: Well... in this case...")
            await sleep(20000)
            audio = new Audio("../../Media/Sound/Violin scare.wav");
            audio.play();
            document.getElementById("body").style.background = "red"
            await sleep(500)
            close;
            window.close();
            window.open("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/293572d0-d49e-48a2-8ba8-6d94ec953d59/ddaf3t8-380e0b88-9a9d-4ccf-af65-b8c1508d9e73.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5MzU3MmQwLWQ0OWUtNDhhMi04YmE4LTZkOTRlYzk1M2Q1OVwvZGRhZjN0OC0zODBlMGI4OC05YTlkLTRjY2YtYWY2NS1iOGMxNTA4ZDllNzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GzE3yjRY6TGt1J_R21ijvNF_uWnVLp7oUgGSy3yvVKc","_self")
        }
        else {
            proceed_to_typer_element("Computer: I didn't understood you.")
            audio_typing()
            await sleep(5000)
            ask_help()
        }
    }
    
}

code();