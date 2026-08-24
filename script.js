const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const time = document.getElementById('time');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const player = document.getElementById('player');
const fileImput = document.getElementById('fileImput');
const overlayWord = document.getElementById("overlayWord");

fileImput.addEventListener('change', () =>{
    const file = fileImput.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        video.src = url;
        video.play();
    }
})

// Play / Pause
playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = '⏸';
  } else {
    video.pause();
    playBtn.textContent = '▶';
  }
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent || 0;
  time.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
  //show word in the display 
  if(video.currentTime >= 3 && video.currentTime <= 8){
    overlayWord.style.display = 'block';
    overlayWord.textContent = "brian-the best"
  } else {
    overlayWord.style.display = 'none'
  }
});

// Let user click/drag the progress bar to seek
progress.addEventListener('input', () => {
  video.currentTime = (progress.value / 100) * video.duration;
});

// Volume control
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
});

// Helper: turn seconds into "1:23" format
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

