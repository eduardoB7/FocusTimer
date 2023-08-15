"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTimerBtn = addTimerBtn;
exports.cardsVolumeControll = void 0;
exports.countdown = countdown;
exports.pauseTimeOut = pauseTimeOut;
exports.removeTimerBtn = removeTimerBtn;
exports.sounds = void 0;
exports.stopTimeOut = stopTimeOut;
var _elements = require("./elements.js");
var _sounds = require("./sounds.js");
var sounds = (0, _sounds.Sounds)();
exports.sounds = sounds;
var minutesDisplay = _elements.elements.minutesDisplay,
  secondsDisplay = _elements.elements.secondsDisplay;
var controllSlideVollume = document.querySelectorAll(".volume-slider");
controllSlideVollume.forEach(function (element) {
  element.addEventListener("click", function (ev) {
    ev.stopPropagation();
  });
});
var timerOut;
var countMinut = Number(minutesDisplay.textContent);

// Função de contar os minutos/segundos
function countdown() {
  var seconds = Number(secondsDisplay.textContent);
  timerOut = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      countMinut--;
    }
    if (countMinut === 0 && seconds === 0) {
      (0, _sounds.Sounds)().timerFinish();
      resetApp();
      clearInterval(timerOut);
      return;
    }
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    minutesDisplay.textContent = String(countMinut).padStart(2, "0");
  }, 1000);
}

// Função pause
function pauseTimeOut() {
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
function stopTimeOut() {
  resetApp();
  clearTimeout(timerOut);
}

// Função para adicionar mais 5 minutos contador
function addTimerBtn() {
  countMinut += 5;
  minutesDisplay.textContent = countMinut;
}

// Função para remover 5 minutos do contador
function removeTimerBtn() {
  if (countMinut >= 25 || countMinut >= 5) {
    countMinut -= 5;
    minutesDisplay.textContent = String(countMinut).padStart(2, "0");
  }
}

//  Função para controlar o volume

var cardsVolumeControll = {
  florestSoundControll: document.getElementById("volume-florestSound"),
  rainSoundControll: document.getElementById("volume-rainSound"),
  coffeSoundControll: document.getElementById("volume-coffeSound"),
  fireSoundControll: document.getElementById("volume-fireSound")
};
exports.cardsVolumeControll = cardsVolumeControll;