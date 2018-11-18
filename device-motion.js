



var soundPlayer = new Audio();
var isPlaying = false;
var gAlpha = 50;

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // Do stuff with the new orientation data
  document.getElementById('absolute').innerHTML = absolute;
  document.getElementById('alpha').innerHTML = alpha;
  document.getElementById('beta').innerHTML = beta;
  document.getElementById('gamma').innerHTML = gamma;

  gAlpha = alpha;
  //soundPlayer.playbackRate = alpha / 50;
  //soundPlayer.play();
}


function buttonPressed() {
    isPlaying = (isPlaying) ? false : true;

    if(isPlaying) {
      soundPlayer.src = "Alesis-Fusion-Clean-Guitar-C3.wav";
      soundPlayer.mozPreservesPitch = false;

      if(soundPlayer.paused) {
        soundPlayer.play();
        soundPlayer.loop =true;
      }
    }
    else {
      soundPlayer.pause();
    }

}
var playButton = document.getElementById('playButton');

playButton.addEventListener("click", buttonPressed);
window.addEventListener("deviceorientation", handleOrientation, true);

window.setInterval(() => {
  soundPlayer.playbackRate = gAlpha / 1000;
  //console.log("updating...");
}, 0500);
