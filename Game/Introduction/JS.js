// Debugging stuff
//console.log(localStorage);
console.info(localStorage.sound);

let color_text = 'gray';
let delay_text = '100';

//Defines the audio for the typing sound.
if (localStorage.sound === "off"){
    //console.log("if audio: "+localStorage.sound);
    console.log("No audio");
}
else {
    //console.log("else audio: "+localStorage.sound);
    var sound = new Howl({
        src: ['../../Media/Sound/Computer typing.wav'],
    });
}

//Check audio
function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        var sound = new Audio("../../Media/Sound/Tuesday T.wav");
        //console.log("Debug audio")
        sound.play();
        var sound = new Howl({
            src: ['../../Media/Sound/Computer typing.mp3'],
            preload: true
          });
        var typing_sound = sound.play()
    }
}

function sleep(ms) {    //Code for the sleep command
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

/*function audio_typing() {     //Not used anymore
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
    }
}*/

async function code(){

    delay_text = "1000"
    await sleep(5000);
    proceed_to_typer_element(". . .");

    delay_text = "100"
    color_text = "darkred"
    await sleep(7500)
    proceed_to_typer_element("?????: Who... who are you?");
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(2750);
        sound.stop()
    }

    await sleep(5000);
    
    let name;

    // System that prevents empty names
    do{
        name = prompt("Who are you ?");
    }while(name == "" || name == null || name == undefined);
    localStorage.name = name
    console.log("Name: "+localStorage.name);

    //For the easter egg.
    if (name == "root" || name == "sudo") {
        console.log("Debug Easter egg");
        color_text = "orange"
        proceed_to_typer_element("Easter Egg: This ain't a Linux terminal.")
        var typing_sound = sound.play()
        await sleep(5000);
        sound.stop()

        do{
            name = prompt("Who are you ?");
        }while(name == "" || name == null || name == undefined || name == "sudo" || name == "root");
        localStorage.name = name
        console.log("Name: "+localStorage.name);
    }

    color_text = "white"
    await sleep(2500);
    proceed_to_typer_element("You: "+ name +".");
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }

    color_text = "gray"
    await sleep(2500);
    proceed_to_typer_element("?????: Hello... " + name + "...");
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(2750);
        sound.stop()
    }

    await sleep(5000);
    proceed_to_typer_element("?????: Wha... what happened?")
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(3000);
        sound.stop()
    }

    delay_text = "1000"
    color_text = "white"
    await sleep(5000);
    proceed_to_typer_element(". . .");

    delay_text = "100"
    color_text = "gray"
    await sleep(7500);
    proceed_to_typer_element("?????: It looks like something crashed.")
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(4000);
        sound.stop()
    }

    color_text = "lime"
    await sleep(7500);
    proceed_to_typer_element("Computer: I'm the computer by the way.")
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(4000);
        sound.stop()
    }

    color_text = "aqua"
    await sleep(5000);
    proceed_to_typer_element("Computer: Nice to meet you "+name+".")
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(3525);
        sound.stop()
    }

    color_text = "gray"
    await sleep(7500);
    proceed_to_typer_element("Computer: Do you want to help me?")
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        //console.log("No audio");
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        //console.log("Debug audio")
            
        var typing_sound = sound.play()
        await sleep(3250);
        sound.stop()
    }
    await sleep(5000);
    ask_help()

    let choice_help = "";

    async function ask_help() {
        let choice_help = "";
        do{
            choice_help = prompt("Do you want to help me? (Yes or No)");
        }while(choice_help == "" || choice_help == null || choice_help == undefined);
        localStorage.choice_help = choice_help
        console.log("Choice: "+localStorage.choice_help);

        if (choice_help == "Yes") {
            console.info("Help accepted");
            delay_text = "500"
            color_text = "lime"
            if (localStorage.sound === "off"){
                //console.log("if audio: "+localStorage.sound);
                //console.log("No audio");
            }
            else {
                //console.log("else audio: "+localStorage.sound);
                //console.log("Debug audio")
                    
                audio = new Audio("../../Media/Sound/User Interface, Data, Processing, Loading, Old Computer, Fast Stutter Followed By Choppy Stutter SND68328 1.wav");
                audio.play();
            }
            
            proceed_to_typer_element("Computer: Thank you.")
            await sleep(10500)
            color_text = "gray"
            delay_text = "100"
            proceed_to_typer_element("Computer: Okay let's start.")
            if (localStorage.sound === "off"){
                //console.log("if audio: "+localStorage.sound);
                //console.log("No audio");
            }
            else {
                //console.log("else audio: "+localStorage.sound);
                //console.log("Debug audio")
                    
                var typing_sound = sound.play()
                await sleep(3000);
                sound.stop()
            }
            await sleep(3000);
            proceed_to_typer_element("Computer: But we'll need to find our way into the mainframe.")
            if (localStorage.sound === "off"){
                //console.log("if audio: "+localStorage.sound);
                //console.log("No audio");
            }
            else {
                //console.log("else audio: "+localStorage.sound);
                //console.log("Debug audio")
                    
                var typing_sound = sound.play()
            }
            await sleep(10000)
            window.open("../Levels/Level1/HTML.html","_self")
        }
        else if (choice_help == "No"){
            console.info("Help rejected");
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
            window.close(); //Alternative scenario. Just for fun.
            window.open("../GameOver/HTML.html","_self")
        }
        else {
            proceed_to_typer_element("Computer: Sorry I didn't understand you.")
            var typing_sound = sound.play()
            await sleep(4000);
            sound.stop()

            await sleep(4000)
            ask_help()
        }
    }
    
}

code();