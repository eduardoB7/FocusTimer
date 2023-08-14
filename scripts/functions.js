import { elements } from "./elements.js";
import { Sounds } from "./sounds.js";
export const sounds = Sounds();
const { minutesDisplay, secondsDisplay } = elements;
const controllSlideVollume = document.querySelectorAll(".volume-slider");
controllSlideVollume.forEach((element) => {
  element.addEventListener("click", (ev) => {
    ev.stopPropagation();
  });
});
let timerOut;
let countMinut = Number(minutesDisplay.textContent);

// Função de contar os minutos/segundos
export function countdown() {
  let seconds = Number(secondsDisplay.textContent);
  timerOut = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      countMinut--;
    }
    if (countMinut === 0 && seconds === 0) {
      Sounds().timerFinish();
      resetApp();
      clearInterval(timerOut);
      return;
    }
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    minutesDisplay.textContent = String(countMinut).padStart(2, "0");
  }, 1000);
}

// Função pause
export function pauseTimeOut() {
  clearTimeout(timerOut);
}

// função stop
function resetApp() {
  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
  secondsDisplay.textContent = "00";
  minutesDisplay.textContent = 25;
  countMinut = Number(minutesDisplay.textContent);
}
export function stopTimeOut() {
  resetApp();
  clearTimeout(timerOut);
}

// Função para adicionar mais 5 minutos contador
export function addTimerBtn() {
  countMinut += 5;
  minutesDisplay.textContent = countMinut;
}

// Função para remover 5 minutos do contador
export function removeTimerBtn() {
  if (countMinut >= 25 || countMinut >= 5) {
    countMinut -= 5;
    minutesDisplay.textContent = String(countMinut).padStart(2, "0");
  }
}

//  Função para controlar o volume

export const cardsVolumeControll = {
  florestSoundControll: document.getElementById("volume-florestSound"),
  rainSoundControll: document.getElementById("volume-rainSound"),
  coffeSoundControll: document.getElementById("volume-coffeSound"),
  fireSoundControll: document.getElementById("volume-fireSound"),
};
