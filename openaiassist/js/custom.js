const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const songNameDisplay = document.getElementById('songName');

let isPlaying = false;
let currentSongIndex = 0;
let songs = [];

fileInput.addEventListener('change', (e) => {
    songs = Array.from(e.target.files);
    loadSong(currentSongIndex);
});

function loadSong(index) {
    const song = songs[index];
    if (song) {
        const songURL = URL.createObjectURL(song);
        audioPlayer.src = songURL;
        songNameDisplay.textContent = song.name;
        audioPlayer.load();
        playPauseBtn.textContent = '▶️';
        isPlaying = false;
    }
}

function playPauseSong() {
    if (!audioPlayer.src) return;
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

function updateProgress() {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const minutes = Math.floor(audioPlayer.currentTime / 60);
        const seconds = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, '0');
        currentTimeDisplay.textContent = `${minutes}:${seconds}`;

        const totalMinutes = Math.floor(audioPlayer.duration / 60);
        const totalSeconds = Math.floor(audioPlayer.duration % 60).toString().padStart(2, '0');
        durationDisplay.textContent = `${totalMinutes}:${totalSeconds}`;
    }
}

function changeSong(step) {
    currentSongIndex = (currentSongIndex + step + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audioPlayer.play();
}

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', () => changeSong(1));
playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', () => changeSong(-1));
nextBtn.addEventListener('click', () => changeSong(1));