let video = document.querySelector('video');
let promise = video.play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
    console.log("Autoplay enabled");
    //document.getElementById("autoplay_success").innerHTML = "Autoplay is enabled, the video above should play."
    document.write("Autoplay is enabled, the video above should play.")
  }).catch(error => {
    // Autoplay not allowed!
    document.getElementById("autoplay_fail").innerHTML = "Autoplay has to be enabled for the game."
    //alert("Autoplay has to be enabled for the game.")
  });
}