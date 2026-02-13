const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");

const MUSIC_TIME_KEY = "valentineMusicTime";
const MUSIC_PLAYING_KEY = "valentineMusicShouldPlay";

const setStatus = (message) => {
  if (musicStatus) {
    musicStatus.textContent = message;
  }
};

const persistMusicState = () => {
  if (!bgMusic) return;

  localStorage.setItem(MUSIC_TIME_KEY, String(bgMusic.currentTime || 0));
  localStorage.setItem(MUSIC_PLAYING_KEY, String(!bgMusic.paused));
};

const playMusic = async () => {
  if (!bgMusic) return false;

  try {
    await bgMusic.play();
    if (musicToggle) {
      musicToggle.textContent = "⏸️ Pause our song";
    }
    setStatus("Now playing 💖");
    localStorage.setItem(MUSIC_PLAYING_KEY, "true");
    return true;
  } catch (error) {
    setStatus("Tap the play button to start the music.");
    return false;
  }
};

if (bgMusic) {
  bgMusic.volume = 0.7;

  const savedTime = Number(localStorage.getItem(MUSIC_TIME_KEY));
  if (!Number.isNaN(savedTime) && savedTime > 0) {
    bgMusic.currentTime = savedTime;
  }

  bgMusic.addEventListener("timeupdate", persistMusicState);
  window.addEventListener("beforeunload", persistMusicState);

  bgMusic.addEventListener("error", () => {
    setStatus(
      'Song file not found. Place "Khat Navjot Ahuja (pagalall.com).mp3" in this project folder.'
    );
  });

  const shouldPlay = localStorage.getItem(MUSIC_PLAYING_KEY) !== "false";
  if (shouldPlay) {
    playMusic();
  }
}

if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", async () => {
    if (bgMusic.paused) {
      await playMusic();
      return;
    }

    bgMusic.pause();
    localStorage.setItem(MUSIC_PLAYING_KEY, "false");
    musicToggle.textContent = "▶️ Play our song";
    setStatus("Music paused.");
    persistMusicState();
  });
}

if (yesBtn && response) {
if (yesBtn && noBtn && response) {
  yesBtn.addEventListener("click", () => {
    response.textContent = "YAY! You just made me the happiest person alive! 💕";
    yesBtn.textContent = "Best Valentine Ever 💗";
  });
}

if (noBtn && response) {
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.floor(Math.random() * 160) - 80;
    const y = Math.floor(Math.random() * 80) - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  noBtn.addEventListener("click", () => {
    response.textContent = "Hmm... let's pretend you clicked yes 😄";
  });
}
