function sleep(ms) {        //Command that allow the sleep command
    return new Promise(resolve => setTimeout(resolve, ms));
}

function audio() {
    if (localStorage.sound === "off"){
        //console.log("if audio: "+localStorage.sound);
        console.log("No audio");
        credits()
    }
    else {
        //console.log("else audio: "+localStorage.sound);
        var audio = new Audio("../../Media/Music/Caspar - Final Nights 4 - Original Soundtrack - 09 Closure.flac");
        console.log("Debug audio")
        audio.play();
        credits()
    }
}

function credits() {
    //window.scrollTo(0,5000000,{ behavior: 'smooth' });
    //console.log("Debug function");
    console.log("Name: "+localStorage.name);
    username = localStorage.name
    if (username == "" || username == null || username == undefined) {
        document.getElementById("user").innerHTML = "And thank YOU for playing!"
    }

    else {
        document.getElementById("user").innerHTML = "And thank you, "+username+" for playing!" 
    }
}

credits_done()
async function credits_done(){
    await sleep(145000)
    window.open('../Game/GoodEnding/HTML.html','_self')
}