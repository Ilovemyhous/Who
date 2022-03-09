let video = document.querySelector('video');
let promise = video.play();

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

//document.cookie = "music=true; expires=11 Feb 2022 12:00:00 UTC; SameSite=None; Secure";
//document.cookie = "sounds=true; expires=11 Feb 2022 12:00:00 UTC; SameSite=None; Secure";

//Source: https://stackoverflow.com/questions/11801042/getting-a-checkbox-to-write-a-javascript-cookie
// Cookie for the music
function setCookie(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate)
}

function getCookie(c_name) {
  if (document.cookie.length>0) {
      c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1) { 
          c_start=c_start + c_name.length+1 
          c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
              return unescape(document.cookie.substring(c_start,c_end))
      } 
  }
  return null
}
onload=function(){
document.getElementById('music').checked = getCookie('music')==1? true : false;
}
function set_check_music(){
setCookie('music', document.getElementById('music').checked? 1 : 0, 100);
}

//Source: https://stackoverflow.com/questions/11801042/getting-a-checkbox-to-write-a-javascript-cookie
// Cookie for the sounds
function setCookie(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate)
}

function getCookie(c_name) {
  if (document.cookie.length>0) {
      c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1) { 
          c_start=c_start + c_name.length+1 
          c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
              return unescape(document.cookie.substring(c_start,c_end))
      } 
  }
  return null
}
onload=function(){
document.getElementById('sounds').checked = getCookie('sounds')==1? true : false;
}
function set_check_sounds(){
setCookie('sounds', document.getElementById('sounds').checked? 1 : 0, 100);
}