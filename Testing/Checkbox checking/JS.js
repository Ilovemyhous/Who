function setCheck() {
  var x = document.getElementById("music_checkbox");
  x.checked = true;
  //console.log("Debug setCheck");
  let music = true
  console.log(music);
}

// Bind function to onclick event for checkbox
document.getElementById('music_checkbox').onclick = function() {
  // access properties using this keyword
  if ( this.checked ) {
      // Returns true if checked
      let music = true
      console.log(music);
  } else {
      // Returns false if not checked
      let music = false
      console.log(music);
  }
};