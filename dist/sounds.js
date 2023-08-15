"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sounds = Sounds;
var _elements = require("./elements.js");
var _functions = require("./functions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var florestSoundControll = _functions.cardsVolumeControll.florestSoundControll,
  rainSoundControll = _functions.cardsVolumeControll.rainSoundControll,
  coffeSoundControll = _functions.cardsVolumeControll.coffeSoundControll,
  fireSoundControll = _functions.cardsVolumeControll.fireSoundControll;
function Sounds() {
  var buttonPress = new Audio("sounds/button-press.wav");
  var kitchenTime = new Audio("sounds/kichen-timer.mp3");
  var florestSound = new Audio("sounds/Floresta.wav");
  var rainSound = new Audio("sounds/Chuva.wav");
  var coffeSound = new Audio("sounds/Cafeteria.wav");
  var fireSound = new Audio("sounds/Lareira.wav");
  function setVolume(audioElement, volume) {
    audioElement.volume = volume / 100;
  }
  _elements.elements.volumeSliders.forEach(function (element) {
    element.addEventListener("input", function (event) {
      var volumeValue = event.currentTarget.value;
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
  return _defineProperty({
    pressButton: pressButton,
    timerFinish: timerFinish,
    florestSoundplay: florestSoundplay,
    rainSoundplay: rainSoundplay,
    coffeSoundplay: coffeSoundplay,
    florestSoundPause: florestSoundPause,
    fireSoundplay: fireSoundplay,
    fireSoundPause: fireSoundPause,
    rainSoundPause: rainSoundPause,
    coffeSoundPause: coffeSoundPause
  }, "fireSoundPause", fireSoundPause);
}