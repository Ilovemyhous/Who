/*navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 1280, height: 720 } },
  function(stream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
    video.onloadedmetadata = function(e) {
    video.play();
  };
},
function(err) {
  console.log("The following error occured: " + err.name);
}
);

navigator.mediaDevices*/

// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: false, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
// Always check for errors at the end.
.catch(function(err) { 
  console.log(err.name + ": " + err.message);
  console.log(err.name);
  if (err.name == "NotAllowedError") {
    alert("Access to camera rejected.")
  }

  if (err.name == "NotFoundError") {
      alert("No Webcam has been detected.")
    }
});

console.log("Test");
