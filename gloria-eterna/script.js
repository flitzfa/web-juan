const tracks = [
  {
    match: "Argentina vs. Arabia Saudita",
    title: "Tropezón no es caída",
    genre: "Cuarteto estilo cordobes",
    audio: "https://www.dropbox.com/scl/fi/45m8fwidhyhyihq9euub8/1.-Arabia.-Tropezon-no-es-caida-1.wav?rlkey=mcft1hgt12jrbyem78gw29y87&st=gqvfgw3d&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(23, 185, 255, 0.55)", "rgba(217, 177, 92, 0.34)"],
  },
  {
    match: "Argentina vs. México",
    title: "Garra",
    genre: "Reggaeton",
    audio: "https://www.dropbox.com/scl/fi/3nydbz89fih3uhn5ycn9p/2.-Mexico.-Garra-y-coraje-1.wav?rlkey=geupe5doutxmy53pnadq3ffmd&st=lgnfkub8&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(12, 126, 196, 0.62)", "rgba(244, 251, 255, 0.26)"],
  },
  {
    match: "Argentina vs. Polonia",
    title: "Chezny compadre",
    genre: "Rock",
    audio: "https://www.dropbox.com/scl/fi/req6bqpwcn4fbtugi41dw/3.-Polonia.-Chezni-compadre-1.wav?rlkey=gblk0z42tetevjwrtx3dfwgis&st=2d1nyv3s&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(217, 177, 92, 0.42)", "rgba(180, 29, 57, 0.24)"],
  },
  {
    match: "Argentina vs. Australia",
    title: "Canguro vs. Yacaré",
    genre: "Cumbia bonaerense",
    audio: "https://www.dropbox.com/scl/fi/wij4crbglxbkebd15mp1q/4.-Australia.-Canguro-vs-Yacare-1.wav?rlkey=tvofgr71kizz7p9ci01xlf6n2&st=2clnqgbo&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(25, 171, 100, 0.34)", "rgba(23, 185, 255, 0.42)"],
  },
  {
    match: "Argentina vs. Países Bajos",
    title: "El Topo Gigio",
    genre: "Rocksteady",
    audio: "https://www.dropbox.com/scl/fi/sje7pfwjlncltxe2e8l53/5.-Paises-bajos.-El-topo-giggio-de-van-Gaal-1.wav?rlkey=78fpuevyybzwzc4hhy5qb7vp1&st=5r1j6odh&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(239, 108, 46, 0.34)", "rgba(23, 185, 255, 0.38)"],
  },
  {
    match: "Argentina vs. Croacia",
    title: "Tranqui 120",
    genre: "Reggae",
    audio: "https://www.dropbox.com/scl/fi/t6f6iiggpzbdrhhpvg76b/6.-Croacia.-Chapa-de-campeon-1.wav?rlkey=46su495zq5pxhs1xl53qnpqfd&st=1wpxt5l5&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(30, 171, 99, 0.36)", "rgba(217, 177, 92, 0.35)"],
  },
  {
    match: "Argentina vs. Francia",
    title: "Prueba de fuego",
    genre: "Cumbia santafesina",
    audio: "https://www.dropbox.com/scl/fi/s53yf39fitxjmlypwvyfa/7.-Francia.-Prueba-de-fuego-1.wav?rlkey=srw0psbr7wk7c4mbe5co1087f&st=5svzbnxr&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(23, 185, 255, 0.5)", "rgba(217, 177, 92, 0.46)"],
  },
  {
    match: "La premiación",
    title: "La premiación",
    genre: "Rock",
    audio: "https://www.dropbox.com/scl/fi/ntgylzmpzoxnwopxudhjs/8.-Premiacion-1.wav?rlkey=6vti2clh65sd7ury7chk151nd&st=56306r4e&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(244, 251, 255, 0.3)", "rgba(217, 177, 92, 0.56)"],
  },
  {
    match: "Lista de los guerreros",
    title: "Lista de los guerreros",
    genre: "Ska",
    audio: "https://www.dropbox.com/scl/fi/4fwiciqmvr2oxkytubpzo/9.-Lista-de-los-guerreros-1.wav?rlkey=8h7vcrs3l28ohnxca2ho1uqg6&st=val66cp4&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(23, 185, 255, 0.42)", "rgba(31, 214, 130, 0.26)"],
  },
  {
    match: "Gloria eterna",
    title: "Gloria eterna",
    genre: "Canción homenaje al 10",
    audio: "https://www.dropbox.com/scl/fi/5nlaog95oysaqz2dbdoeg/10.-Gloria-eterna-1.wav?rlkey=cre0wh4766y7p6934nhioqx55&st=dxhxfluz&raw=1",
    cover: "images/portada-limpia.webp",
    colors: ["rgba(217, 177, 92, 0.62)", "rgba(23, 185, 255, 0.5)"],
  },
];

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("is-active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("is-active");
}, 4600);

function createTrackCard(track, index) {
  const article = document.createElement("article");
  article.className = "track-card reveal";
  article.style.setProperty("--track-a", track.colors[0]);
  article.style.setProperty("--track-b", track.colors[1]);

  article.innerHTML = `
    <div class="track-art" role="img" aria-label="Cover visual de ${track.title}">
      <img src="${track.cover}" alt="" loading="lazy" />
      <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
    </div>
    <div class="track-body">
      <p class="match">${track.match}</p>
      <h3>${track.title}</h3>
      <p class="genre">${track.genre}</p>
      <div class="track-player">
        <button class="play-toggle" type="button" aria-label="Reproducir ${track.title}">
          <span class="play-icon" aria-hidden="true"></span>
        </button>
        <div class="player-main">
          <div class="player-meta">
            <span>Escuchar tema</span>
            <span class="player-time">0:00 / 0:00</span>
          </div>
          <input class="player-progress" type="range" min="0" max="100" value="0" step="0.1" aria-label="Progreso de ${track.title}" />
        </div>
        <audio class="track-audio" preload="auto" src="${track.audio}"></audio>
      </div>
    </div>
  `;

  return article;
}

const grid = document.querySelector("#trackGrid");
tracks.forEach((track, index) => grid.appendChild(createTrackCard(track, index)));

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function updatePlayer(audio) {
  const card = audio.closest(".track-card");
  const progress = card?.querySelector(".player-progress");
  const time = card?.querySelector(".player-time");
  if (!progress || !time) return;

  const duration = audio.duration || 0;
  const current = audio.currentTime || 0;
  progress.value = duration ? String((current / duration) * 100) : "0";
  time.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
}

function setPlaybackState(button, isPlaying) {
  const card = button.closest(".track-card");
  const audio = card?.querySelector("audio");
  button.classList.toggle("is-playing", isPlaying);
  button.setAttribute("aria-label", `${isPlaying ? "Pausar" : "Reproducir"} ${card?.querySelector("h3")?.textContent || "tema"}`);
  if (audio) updatePlayer(audio);
}

// The real audio URL is attached only after the user asks to play a track.
document.addEventListener("click", (event) => {
  const button = event.target.closest(".play-toggle");
  if (!button) return;

  const card = button.closest(".track-card");
  const audio = card.querySelector("audio");

  document.querySelectorAll("audio").forEach((otherAudio) => {
    if (otherAudio !== audio) {
      otherAudio.pause();
      const otherButton = otherAudio.closest(".track-card")?.querySelector(".play-toggle");
      if (otherButton) setPlaybackState(otherButton, false);
    }
  });

  if (audio.paused) {
    audio.play();
    setPlaybackState(button, true);
  } else {
    audio.pause();
    setPlaybackState(button, false);
  }
});

document.addEventListener("pause", (event) => {
  if (!event.target.matches("audio")) return;
  const card = event.target.closest(".track-card");
  const button = card?.querySelector(".play-toggle");
  if (button) setPlaybackState(button, false);
}, true);

document.addEventListener("timeupdate", (event) => {
  if (event.target.matches("audio")) updatePlayer(event.target);
}, true);

document.addEventListener("loadedmetadata", (event) => {
  if (event.target.matches("audio")) updatePlayer(event.target);
}, true);

document.addEventListener("ended", (event) => {
  if (!event.target.matches("audio")) return;
  const audio = event.target;
  const card = audio.closest(".track-card");
  const button = card?.querySelector(".play-toggle");
  if (button) setPlaybackState(button, false);
  audio.currentTime = 0;
  updatePlayer(audio);
}, true);

document.addEventListener("input", (event) => {
  const progress = event.target.closest(".player-progress");
  if (!progress) return;
  const audio = progress.closest(".track-card")?.querySelector("audio");
  if (!audio || !audio.duration) return;
  audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  updatePlayer(audio);
});

const lightbox = document.querySelector("#imageLightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

document.querySelectorAll(".moment-card img, .intro-cover img").forEach((image) => {
  image.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose?.focus();
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// === NAVBAR MÓVIL: cierra el menú hamburguesa al hacer clic en un enlace ===
const menuToggle = document.getElementById("menu-toggle");
document.querySelectorAll("[data-menu-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) menuToggle.checked = false;
  });
});

