"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RunApp = RunApp;
var _elements = require("./elements.js");
var _sounds = require("./sounds.js");
var _functions = require("./functions.js");
var florestSoundControll = _functions.cardsVolumeControll.florestSoundControll,
  rainSoundControll = _functions.cardsVolumeControll.rainSoundControll,
  coffeSoundControll = _functions.cardsVolumeControll.coffeSoundControll,
  fireSoundControll = _functions.cardsVolumeControll.fireSoundControll;
function RunApp() {
  var playBtn = _elements.elements.playBtn,
    pauseBtn = _elements.elements.pauseBtn,
    stopBtn = _elements.elements.stopBtn,
    addTime = _elements.elements.addTime,
    removeTime = _elements.elements.removeTime,
    florestCard = _elements.elements.florestCard,
    rainCard = _elements.elements.rainCard,
    coffeCard = _elements.elements.coffeCard,
    fireCard = _elements.elements.fireCard,
    ligthModeBtn = _elements.elements.ligthModeBtn,
    allControllsBtn = _elements.elements.allControllsBtn,
    darkModeBtn = _elements.elements.darkModeBtn,
    allDocument = _elements.elements.allDocument,
    allControllCardsBG = _elements.elements.allControllCardsBG;

  //  evento botao de play
  playBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    (0, _sounds.Sounds)().pressButton();
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
    (0, _functions.countdown)();
  });

  //   evento botao de pause
  pauseBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    (0, _sounds.Sounds)().pressButton();
    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
    (0, _functions.pauseTimeOut)();
  });
  // evento botao Stop
  stopBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    (0, _sounds.Sounds)().pressButton();
    (0, _functions.stopTimeOut)();
  });
  // Evento botao de adicionar tempo
  addTime.addEventListener("click", function (ev) {
    ev.preventDefault();
    (0, _functions.addTimerBtn)();
  });
  // Evento botao de remover tempo
  removeTime.addEventListener("click", function (ev) {
    ev.preventDefault();
    (0, _functions.removeTimerBtn)();
  });

  // Função para controlar sons ambientes
  function toggleCard(cardElement, soundFunction, allDocument, IDSoundControll) {
    var isActive = cardElement.classList.contains("activeIcon");
    [florestCard, rainCard, coffeCard, fireCard].forEach(function (element) {
      IDSoundControll.value = 0;
      element.classList.remove("activeIcon");
      element.classList.remove("activeIconDarkClicked");
    });
    [_functions.sounds.florestSoundPause, _functions.sounds.rainSoundPause, _functions.sounds.coffeSoundPause, _functions.sounds.fireSoundPause].forEach(function (sound) {
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
  florestCard.addEventListener("click", function () {
    toggleCard(florestCard, _functions.sounds.florestSoundplay, allDocument, florestSoundControll);
  });
  rainCard.addEventListener("click", function () {
    toggleCard(rainCard, _functions.sounds.rainSoundplay, allDocument, rainSoundControll);
  });
  coffeCard.addEventListener("click", function () {
    toggleCard(coffeCard, _functions.sounds.coffeSoundplay, allDocument, coffeSoundControll);
  });
  fireCard.addEventListener("click", function () {
    toggleCard(fireCard, _functions.sounds.fireSoundplay, allDocument, fireSoundControll);
  });

  // Evento de mudar tema ligth/Dark

  ligthModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("darkMode");
    allControllsBtn.forEach(function (element) {
      element.classList.toggle("BtnDarkMode");
    });
    ligthModeBtn.style.display = "none";
    darkModeBtn.style.display = "block";
    allControllCardsBG.forEach(function (element) {
      element.classList.toggle("activeIconDark");
      element.style.setProperty("--Slide-color", "#e1e1e6");
    });
  });
  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("darkMode");
    allControllCardsBG.forEach(function (element) {
      element.classList.toggle("activeIconDark");
      element.style.setProperty("--Slide-color", "#323238");
    });
    allControllsBtn.forEach(function (element) {
      element.classList.toggle("BtnDarkMode");
    });
    ligthModeBtn.style.display = "block";
    darkModeBtn.style.display = "none";
  });
}