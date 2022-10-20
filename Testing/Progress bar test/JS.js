var i = 0;
function bar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 99) {
        clearInterval(id);
        i = 0;
        var audio = new Audio("../../Media/Sound/Wii crashing sound.mp3");
        console.log("Debug audio")
        audio.play();
        setTimeout(function(){
            window.open("../../About/HTML.html","_self") 
        }, 2500)
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}