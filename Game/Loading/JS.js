var i = 0;
setTimeout(function bar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar_filling");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 99) {
        clearInterval(id);
        document.getElementById("bar_filling").style.background = "red"
        i = 0;
        //Check for the audio
          if (localStorage.sound === "off"){
            //console.log("if audio: "+localStorage.sound);
            console.log("No audio");
          }
          else {
            //console.log("else audio: "+localStorage.sound);
            var audio = new Audio("../../Media/Sound/Wii crashing sound.mp3");
            //console.log("Debug audio")
            audio.play();
          }
        setTimeout(function(){
            window.open("../Error/HTML.html","_self") 
        }, 2500)
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}, 1000)