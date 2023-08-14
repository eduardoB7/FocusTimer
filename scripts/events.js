import { elements } from "./elements.js";
import { Sounds } from "./sounds.js";
import { sounds } from "./functions.js";
import {
  countdown,
  pauseTimeOut,
  stopTimeOut,
  addTimerBtn,
  removeTimerBtn,
  cardsVolumeControll,
} from "./functions.js";

const {
  florestSoundControll,
  rainSoundControll,
  coffeSoundControll,
  fireSoundControll,
} = cardsVolumeControll;

export function RunApp() {
  const {
    playBtn,
    pauseBtn,
    stopBtn,
    addTime,
    removeTime,
    florestCard,
    rainCard,
    coffeCard,
    fireCard,
    ligthModeBtn,
    allControllsBtn,
    darkModeBtn,
    allDocument,
    allControllCardsBG,
  } = elements;

  //  evento botao de play
  playBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    Sounds().pressButton();
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
    countdown();
  });

  //   evento botao de pause
  pauseBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    Sounds().pressButton();

    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
    pauseTimeOut();
  });
  // evento botao Stop
  stopBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    Sounds().pressButton();
    stopTimeOut();
  });
  // Evento botao de adicionar tempo
  addTime.addEventListener("click", (ev) => {
    ev.preventDefault();
    addTimerBtn();
  });
  // Evento botao de remover tempo
  removeTime.addEventListener("click", (ev) => {
    ev.preventDefault();
    removeTimerBtn();
  });

  // Função para controlar sons ambientes
  function toggleCard(
    cardElement,
    soundFunction,
    allDocument,
    IDSoundControll
  ) {
    const isActive = cardElement.classList.contains("activeIcon");
    [florestCard, rainCard, coffeCard, fireCard].forEach((element) => {
      IDSoundControll.value = 0;
      element.classList.remove("activeIcon");
      element.classList.remove("activeIconDarkClicked");
    });
    [
      sounds.florestSoundPause,
      sounds.rainSoundPause,
      sounds.coffeSoundPause,
      sounds.fireSoundPause,
    ].forEach((sound) => {
      sound();
    });
    if (!isActive) {
      if (allDocument.classList.contains("darkMode")) {
        cardElement.classList.add("activeIconDarkClicked");
        cardElement.classList.add("activeIcon");
        IDSoundControll.value = 50;
      } else {
        IDSoundControll.value = 50;
        cardElement.classList.add("activeIcon");
      }
      soundFunction();
    }
  }
  florestCard.addEventListener("click", () => {
    toggleCard(
      florestCard,
      sounds.florestSoundplay,
      allDocument,
      florestSoundControll
    );
  });
  rainCard.addEventListener("click", () => {
    toggleCard(rainCard, sounds.rainSoundplay, allDocument, rainSoundControll);
  });
  coffeCard.addEventListener("click", () => {
    toggleCard(
      coffeCard,
      sounds.coffeSoundplay,
      allDocument,
      coffeSoundControll
    );
  });
  fireCard.addEventListener("click", () => {
    toggleCard(fireCard, sounds.fireSoundplay, allDocument, fireSoundControll);
  });

  // Evento de mudar tema ligth/Dark

  ligthModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    allControllsBtn.forEach((element) => {
      element.classList.toggle("BtnDarkMode");
    });
    ligthModeBtn.style.display = "none";
    darkModeBtn.style.display = "block";
    allControllCardsBG.forEach((element) => {
      element.classList.toggle("activeIconDark");
      element.style.setProperty("--Slide-color", "#e1e1e6");
    });
  });

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    allControllCardsBG.forEach((element) => {
      element.classList.toggle("activeIconDark");
      element.style.setProperty("--Slide-color", "#323238");
    });
    allControllsBtn.forEach((element) => {
      element.classList.toggle("BtnDarkMode");
    });
    ligthModeBtn.style.display = "block";
    darkModeBtn.style.display = "none";
  });
}
