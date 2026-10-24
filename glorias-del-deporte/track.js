// Reproductor y botón de compartir, compartidos por las páginas de cada deportista.
const audio = document.querySelector("audio");
const button = document.querySelector(".play-toggle");
const icon = document.querySelector(".play-icon");
const progress = document.querySelector(".track-progress");
const current = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const shareButton = document.querySelector(".share-link");
const copyToast = document.querySelector("#copy-toast");
let toastTimer;

const formatTime = (seconds) => Number.isFinite(seconds) ? Math.floor(seconds / 60) + ":" + Math.floor(seconds % 60).toString().padStart(2, "0") : "0:00";
const setIcon = (playing) => {
  icon.classList.toggle("fa-play", !playing);
  icon.classList.toggle("fa-pause", playing);
  icon.classList.toggle("pl-1", !playing);
};
const update = () => {
  progress.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  current.textContent = formatTime(audio.currentTime);
  duration.textContent = formatTime(audio.duration);
};
const showToast = () => {
  clearTimeout(toastTimer);
  copyToast.classList.remove("opacity-0", "-translate-y-2");
  copyToast.classList.add("opacity-100", "translate-y-0");
  toastTimer = setTimeout(() => {
    copyToast.classList.add("opacity-0", "-translate-y-2");
    copyToast.classList.remove("opacity-100", "translate-y-0");
  }, 2000);
};

button.addEventListener("click", () => audio.paused ? audio.play() : audio.pause());
audio.addEventListener("play", () => setIcon(true));
audio.addEventListener("pause", () => setIcon(false));
audio.addEventListener("loadedmetadata", update);
audio.addEventListener("timeupdate", update);
audio.addEventListener("ended", () => { setIcon(false); progress.value = 0; current.textContent = "0:00"; });
progress.addEventListener("click", (event) => {
  if (!audio.duration) return;
  const rect = progress.getBoundingClientRect();
  audio.currentTime = ((event.clientX - rect.left) / rect.width) * audio.duration;
});
shareButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(window.location.href);
  showToast();
});
