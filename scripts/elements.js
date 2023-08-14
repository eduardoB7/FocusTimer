const allControllsBtn = document.querySelectorAll(".controlls div");
const allDocument = document.querySelector("body");
const allControllCardsBG = document.querySelectorAll(".cardsBtn div");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const addTime = document.getElementById("addTime");
const removeTime = document.getElementById("removeTime");
const florestCard = document.querySelector(".florestSound");
const rainCard = document.querySelector(".rainSound");
const coffeCard = document.querySelector(".coffeSound");
const fireCard = document.querySelector(".fireSound");
const ligthModeBtn = document.querySelector(".ligthModeBtn");
const darkModeBtn = document.querySelector(".darkModeBtn");
const volumeSliders = document.querySelectorAll(".volume-slider");
let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
export const elements = {
  playBtn,
  pauseBtn,
  stopBtn,
  addTime,
  removeTime,
  minutesDisplay,
  secondsDisplay,
  florestCard,
  rainCard,
  coffeCard,
  fireCard,
  ligthModeBtn,
  allControllsBtn,
  darkModeBtn,
  allControllCardsBG,
  allDocument,
  volumeSliders,
};
