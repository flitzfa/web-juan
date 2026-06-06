const menuToggle = document.querySelector("#menu-toggle");
const menuButton = document.querySelector("[data-menu-button]");
const menuIcon = menuButton?.querySelector("i");
const menuLinks = document.querySelectorAll("[data-menu-link]");

function setMenuState(isOpen) {
  if (!menuToggle) return;

  menuToggle.checked = isOpen;
  menuButton?.setAttribute("aria-expanded", String(isOpen));

  if (menuIcon) {
    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);
  }
}

menuToggle?.addEventListener("change", () => {
  setMenuState(menuToggle.checked);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

const albumSlides = document.querySelectorAll(".album-slideshow .album-slide");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (albumSlides.length > 1 && !reduceMotion) {
  let currentSlide = 0;

  window.setInterval(() => {
    albumSlides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % albumSlides.length;
    albumSlides[currentSlide].classList.add("is-active");
  }, 3200);
}

const audioPlayer = document.querySelector("#audio-player");
const audioToggle = document.querySelector("#audio-toggle");
const audioToggleIcon = document.querySelector("#audio-toggle-icon");
const audioProgress = document.querySelector("#audio-progress");
const audioCurrentTime = document.querySelector("#audio-current-time");
const audioDuration = document.querySelector("#audio-duration");
const audioStatus = document.querySelector("#audio-status");

function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function setAudioPlayingState(isPlaying) {
  if (!audioToggleIcon || !audioToggle) return;

  audioToggleIcon.classList.toggle("fa-play", !isPlaying);
  audioToggleIcon.classList.toggle("fa-pause", isPlaying);
  audioToggleIcon.classList.toggle("pl-1", !isPlaying);
  audioToggle.setAttribute(
    "aria-label",
    isPlaying ? "Pausar Jijiji selección" : "Reproducir Jijiji selección"
  );

  if (audioStatus) {
    audioStatus.textContent = isPlaying ? "Reproduciendo ahora" : "Pausado";
  }
}

function updateAudioProgress() {
  if (!audioPlayer || !audioProgress) return;

  const duration = audioPlayer.duration || 0;
  const currentTime = audioPlayer.currentTime || 0;
  const progress = duration ? (currentTime / duration) * 100 : 0;

  audioProgress.value = String(progress);

  if (audioCurrentTime) audioCurrentTime.textContent = formatAudioTime(currentTime);
  if (audioDuration) audioDuration.textContent = formatAudioTime(duration);
}

if (audioPlayer && audioToggle && audioProgress) {
  audioToggle.addEventListener("click", async () => {
    if (audioPlayer.paused) {
      try {
        await audioPlayer.play();
      } catch {
        if (audioStatus) audioStatus.textContent = "No se pudo iniciar el audio";
      }
    } else {
      audioPlayer.pause();
    }
  });

  audioPlayer.addEventListener("play", () => setAudioPlayingState(true));
  audioPlayer.addEventListener("pause", () => setAudioPlayingState(false));
  audioPlayer.addEventListener("loadedmetadata", updateAudioProgress);
  audioPlayer.addEventListener("timeupdate", updateAudioProgress);

  audioPlayer.addEventListener("ended", () => {
    setAudioPlayingState(false);
    audioProgress.value = "0";
    if (audioCurrentTime) audioCurrentTime.textContent = "0:00";
  });

  audioProgress.addEventListener("input", () => {
    const duration = audioPlayer.duration || 0;
    if (!duration) return;

    audioPlayer.currentTime = (Number(audioProgress.value) / 100) * duration;
    updateAudioProgress();
  });
}
