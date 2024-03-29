let songs = [
    
    {
        title: "As Subhu Bada min",
        artist: "Luis Fon..",
        src: "media/as-rah-mat.mp3"
    },
    {
        title: "Rah Ma tullah",
        artist: "jo Fon..",
        src: "media/as-subhu.mp3"
       
    }

]


let songTitle = document.getElementById("song-title");
let songArtist  = document.getElementById("song-artist");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let playPause = document.getElementById("play_pause");



function loadSong(songIndex) {
    song.src = songs[songIndex].src;
    songTitle.textContent = songs[songIndex].title;
    songArtist.textContent = songs[songIndex].artist;
    song.load();
    playSong();
}

playPause.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");
    }
});

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function () {
    song.play();

    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");


}
loadSong(1);