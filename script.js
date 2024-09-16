// Reference to audio player element
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songList = document.getElementById('song-list');
const songTitle = document.getElementById('song-title');
const albumArt = document.getElementById('album-art'); // Album art element
const albumCOVER = document.getElementById('album-COVER');
// Playlist array (with song titles, source, and album image)
const songs = [
    { title: "Song 1", src: "v1.mpeg", img: "song1-album.png" },
    { title: "Song 2", src: "v2.mpeg", img: "song2-album.png" },
    { title: "Song 3", src: "v3.mpeg", img: "song3-album.png" }
];

let currentSongIndex = 0;

// Function to load a selected song
function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    audioPlayer.src = song.src;
    albumArt.src = song.img; // Update album art image
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
}

// Play the current song
playBtn.addEventListener('click', () => {
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
});

// Pause the current song
pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
});

// Skip to the next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Skip to the previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Play a song when clicked from the playlist
songList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentSongIndex = [...songList.children].indexOf(e.target);
        loadSong(currentSongIndex);
    }
});
