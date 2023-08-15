"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elements = void 0;
var allControllsBtn = document.querySelectorAll(".controlls div");
var allDocument = document.querySelector("body");
var allControllCardsBG = document.querySelectorAll(".cardsBtn div");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var addTime = document.getElementById("addTime");
var removeTime = document.getElementById("removeTime");
var florestCard = document.querySelector(".florestSound");
var rainCard = document.querySelector(".rainSound");
var coffeCard = document.querySelector(".coffeSound");
var fireCard = document.querySelector(".fireSound");
var ligthModeBtn = document.querySelector(".ligthModeBtn");
var darkModeBtn = document.querySelector(".darkModeBtn");
var volumeSliders = document.querySelectorAll(".volume-slider");
var minutesDisplay = document.querySelector(".minutes");
var secondsDisplay = document.querySelector(".seconds");
var elements = {
  playBtn: playBtn,
  pauseBtn: pauseBtn,
  stopBtn: stopBtn,
  addTime: addTime,
  removeTime: removeTime,
  minutesDisplay: minutesDisplay,
  secondsDisplay: secondsDisplay,
  florestCard: florestCard,
  rainCard: rainCard,
  coffeCard: coffeCard,
  fireCard: fireCard,
  ligthModeBtn: ligthModeBtn,
  allControllsBtn: allControllsBtn,
  darkModeBtn: darkModeBtn,
  allControllCardsBG: allControllCardsBG,
  allDocument: allDocument,
  volumeSliders: volumeSliders
};
exports.elements = elements;