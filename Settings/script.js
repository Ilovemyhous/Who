let video = document.querySelector('video');
let promise = video.play();

// CODE FOR AUTOPLAY CHECK
if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay allowed!
    console.log("Autoplay enabled");
    //document.getElementById("autoplay_success").innerHTML = "Autoplay is enabled, the video above should play."
    document.getElementById("autoplay_success").innerHTML = "Autoplay is enabled, the video above should play."
    document.getElementById("autoplay_success").style.color = "green"
  }).catch(error => {
    // Autoplay not allowed!
    console.log("Autoplay disabled");
    document.getElementById("autoplay_fail").innerHTML = "Autoplay has to be enabled for the game. Enable it, (for the browser NOT this tab) and reload the page."
    document.getElementById("autoplay_fail").style.color = "red"
    //alert("Autoplay has to be enabled for the game.")
  });
}

// CODE FOR CANVAS CHECK
// Not used anymore
/*window.onload = function() {
  let gl1 = Object.create(glitch_exec);
  gl1.start(document.getElementById("canvas_check"));
}*/

// CODE FOR THE AUDIO CHECKBOX
function setCheck() {
  if (localStorage.sound === 'on' || !localStorage.sound) {
      let x = document.getElementById("sound");
      x.checked = true;
      //console.log("Debug setCheck");
      let sound = true
      localStorage.sound = "on"
      console.log("sound: "+sound);
      //localStorage && (localStorage.sound = sound.value);
      console.log("sound debug: "+localStorage.sound);
  }
}

// Bind function to onclick event for checkbox
document.getElementById('sound').onclick = function() {
  // access properties using this keyword
  if ( this.checked ) {
      // Returns true if checked
      let sound = true
      console.log(sound);
      localStorage.sound = "on"
      console.log("sound debug: "+localStorage.sound);
  } else {
      // Returns false if not checked
      let sound = false
      console.log(sound);
      localStorage.sound = "off"
      console.log("sound debug: "+localStorage.sound);
      let test = localStorage.getItem('sound')
  }
}

// Call setCheck when the page loads
document.addEventListener('DOMContentLoaded', setCheck);