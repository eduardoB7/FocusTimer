import { elements } from "./elements.js";
import { cardsVolumeControll } from "./functions.js";
const {
  florestSoundControll,
  rainSoundControll,
  coffeSoundControll,
  fireSoundControll,
} = cardsVolumeControll;
export function Sounds() {
  const buttonPress = new Audio("sounds/button-press.wav");
  const kitchenTime = new Audio("sounds/kichen-timer.mp3");
  const florestSound = new Audio("sounds/Floresta.wav");
  const rainSound = new Audio("sounds/Chuva.wav");
  const coffeSound = new Audio("sounds/Cafeteria.wav");
  const fireSound = new Audio("sounds/Lareira.wav");

  function setVolume(audioElement, volume) {
    audioElement.volume = volume / 100;
  }

  elements.volumeSliders.forEach((element) => {
    element.addEventListener("input", (event) => {
      let volumeValue = event.currentTarget.value;
      element.value = volumeValue;

      // Chame a função setVolume passando o áudio e o valor do volume

      setVolume(florestSound, florestSoundControll.value);
      setVolume(rainSound, rainSoundControll.value);
      setVolume(coffeSound, coffeSoundControll.value);
      setVolume(fireSound, fireSoundControll.value);
    });
  });

  function florestSoundplay() {
    florestSound.loop = true;
    florestSound.volume = 0.5;
    florestSound.play();
  }

  function florestSoundPause() {
    florestSound.pause();
  }

  function rainSoundplay() {
    rainSound.loop = true;
    rainSound.volume = 0.5;
    rainSound.play();
  }

  function rainSoundPause() {
    rainSound.pause();
  }

  function coffeSoundplay() {
    coffeSound.loop = true;
    coffeSound.volume = 0.5;
    coffeSound.play();
  }

  function coffeSoundPause() {
    coffeSound.pause();
  }

  function fireSoundplay() {
    fireSound.loop = true;
    fireSound.volume = 0.5;
    fireSound.play();
  }

  function fireSoundPause() {
    fireSound.pause();
  }

  function pressButton() {
    buttonPress.play();
  }

  function timerFinish() {
    kitchenTime.play();
  }

  return {
    pressButton,
    timerFinish,
    florestSoundplay,
    rainSoundplay,
    coffeSoundplay,
    florestSoundPause,
    fireSoundplay,
    fireSoundPause,
    rainSoundPause,
    coffeSoundPause,
    fireSoundPause,
  };
}
