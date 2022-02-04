let video = document.querySelector('video');
let promise = video.play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay allowed!
    console.log("Autoplay enabled");
    //document.getElementById("autoplay_success").innerHTML = "Autoplay is enabled, the video above should play."
    document.write("Autoplay is enabled, the video above should play.")
  }).catch(error => {
    // Autoplay not allowed!
    document.getElementById("autoplay_fail").innerHTML = "Autoplay has to be enabled for the game."
    //alert("Autoplay has to be enabled for the game.")
  });
}

document.cookie = "music=true; expires=11 Feb 2022 12:00:00 UTC";
document.cookie = "sounds=true; expires=11 Feb 2022 12:00:00 UTC"; 