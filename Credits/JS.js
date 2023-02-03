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
        var audio = new Audio("../../Media/Music/A Mind Is Born (Space Objects remix).mp3");
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

//Detect the screen size, to then adjust the credits page.
console.info("Height:"+window.screen.availHeight);
console.info("Width:"+window.screen.availWidth);

if (window.screen.availWidth >= 3000 && window.screen.availHeight >= 2000) {
    console.info ("4K detected");
    //alert("4K detected");
}

else if (window.screen.availWidth >= 2000 && window.screen.availHeight >= 1250) {
    console.info ("QHD detected");
    //alert("QHD detected");
}

else if (window.screen.availWidth <= 2000 && window.screen.availHeight <= 1100) {
    console.info ("HD detected");
    //alert("HD detected");

    var styleEl = document.createElement('style');
    styleEl.innerHTML = '#Credits {height: 100vh; display: block; position: absolute; top: 100%; width: 99%; animation: creditRoll 171s linear forwards infinite; animation-iteration-count: 1; } @keyframes creditRoll { 0% { top: 130%; } 100% { top: -522%; }}'
    document.head.appendChild(styleEl);
}

//This function will be called once the page load, and then will run the timer.
credits_done()
async function credits_done(){
    await sleep(180000)
    window.open('../Game/GoodEnding/HTML.html','_self')
}