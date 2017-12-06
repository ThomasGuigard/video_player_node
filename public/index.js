document.addEventListener('DOMContentLoaded', init, false);

/**
* You can manipulate the video here
* For example: Uncomment the code below and in the index to get a Start/Stop button
*/
function init() {
  // const VP = document.getElementById('videoPlayer')
  // const VPToggle = document.getElementById('toggleButton')

  // VPToggle.addEventListener('click', function() {
  //   if (VP.paused) VP.play()
  //   else VP.pause()
  // })


}


// Vidéo actuelle
var current = 2
// Statut de la vidéo
var videoStatus = 1;


// Controles du lecteur
$('body').keyup(function(e) {
  if(e.keyCode == 8){
    $('video').each( function () {
      if (videoStatus == 0) {
        this.play();
        videoStatus = 1;
      }else {
        this.pause();
        videoStatus = 0;
      }
    });
   }
   if(e.keyCode == 32){
     $('video').each( function () {
       if (videoStatus == 0) {
         this.play();
         videoStatus = 1;
       }else {
         this.pause();
         videoStatus = 0;
       }
     });
   }
   // Monter le volume
   if (e.keyCode == 38) {
     $('video').each( function () {
       if (this.volume < 1) {
        this.volume  = this.volume + 0.2;
      }
     });
   }
   // Baisser le volume
   if (e.keyCode == 40) {
    $('video').each( function () {
      if (this.volume  > 0) {
        this.volume  = this.volume - 0.2;
      }
    });
   }
});


function loadWebGLGame(url){
  let newWebGL = $('<iframe src="'+url+'"  width="100%"  height="100%"></iframe>');
  let divA = $('<div class="fullscreen" id="webGL" style="display:inline-block;"></div>');
  let divB = $('<div class="divB"></div>');
  $('#videoPlayer'+current+'').remove();
  divB.append(newWebGL);
  divA.append(divB)
  $('body').append(divA);
  idNXV = 3;
  setTimeout(function () {
    loadNVP(idNXV)
  }, 10010);
}

function loadNVP (id) {

  let newVideo = $('<video class="fullscreen" id="videoPlayer'+id+'" display="none"><source src="http://localhost:3000/video/'+ id +'" type="video/mp4"></video>');

  setTimeout(function () {
   $('body').append(newVideo);
   $('#videoPlayer'+current+'').remove();
   $('#webGL').remove()
   newVideo.show();
   $('video').each( function () {
     this.play();
   });
   current = id
  }, 3000);
}


setTimeout(function () {
  loadNVP(1)
}, 1010);
setTimeout(function () {
  loadNVP(2)
}, 3000);
setTimeout(function () {
  loadWebGLGame("http://localhost:3000/unity")
}, 12000);
