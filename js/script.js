const pianoKeys = document.querySelectorAll(".key");

const playSound = (key) => {
  new Audio(`assets/songs/24-piano-keys/key${key}.mp3`).play();
  const keyActive = document.querySelector(`[data-key="${key}"]`);
  keyActive.classList.add("active");
  setTimeout(() => {
    keyActive.classList.remove("active");
  }, 150);
};

const pressKey = (e) => {
  const key = e.type === "click" ? e.target.dataset.key : e.key.toLowerCase();
  const allowedKeys = [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
  ];
  if (allowedKeys.includes(key)) {
    playSound(key);
  }
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", pressKey);
});

document.addEventListener("keydown", pressKey);
