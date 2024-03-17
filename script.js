const gtCount = document.getElementById("gtCount");
const ktCount = document.getElementById("ktCount");
const expoCount = document.getElementById("expoCount");
const startBtn = document.getElementById("startBtn");
const gtsText = document.getElementById("gtsText");
const ktsText = document.getElementById("ktsText");
const textOutput = document.getElementById("textOutput");

function expoCalc() {
  gtsText.textContent = Math.trunc(gtCount.value / expoCount.value);
  ktsText.textContent = Math.trunc(ktCount.value / expoCount.value);
}

startBtn.addEventListener("click", expoCalc);
