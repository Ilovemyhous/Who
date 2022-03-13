// Debugging stuff
console.log(localStorage);
console.log(localStorage.sound);

function create_element_typer(text_to_print) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("typer");
    paragraph.setAttribute('data-colors', 'gray');
    paragraph.setAttribute('data-words',text_to_print);
    paragraph.setAttribute('data-delay',"100");
    paragraph.setAttribute('id','creationEl');
    paragraph.setAttribute('data-loop',"1");
    return paragraph;
}

function proceed_to_typer_element(text_to_print) {
    const my_element = create_element_typer(text_to_print);
    document.querySelector('h2').appendChild(my_element);
    new Typer(my_element);
}

function code(){
    setTimeout(function(){
        let name;
        // System that prevents empty names
        do{
            name = prompt("Who are you?");
        }while(name == "" || name == null || name == undefined);
        
        console.log("Name: "+name);
        proceed_to_typer_element("Hello..." + name + " ...");
        // document.getElementById("asking").style.visibility = "visible"
    }, 500);
}

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
    setTimeout(function(){
        audio = new Audio("../../Media/Sound/Computer typing 2.wav");
        audio.play();
    }, 7500)
}

code();
