const chooseRegion = document.getElementById("chooseRegion");
const mainContainer = document.getElementById("mainContainer");
const mainHero = document.getElementById("mainHero");
const mainHeroSVG = document.getElementById("mainHeroSVG");
const logInFrame = document.getElementById("logInFrame");
const playBtn = document.getElementById("playBtn");
const registerBtn = document.getElementById("registerBtn");
const registerFrame = document.getElementById("registerFrame");

chooseRegion.addEventListener("click", function () {
  mainContainer.style.transform = "translateX(-150%)";
  mainHero.classList.remove = "main-hero";
  mainHeroSVG.style.width = "1440px";
  mainHeroSVG.style.height = "900px";
});

playBtn.addEventListener("click", function () {
  mainContainer.style.display = "none";
  logInFrame.style.visibility = "visible";
});

registerBtn.addEventListener("click", function () {
  mainContainer.style.transform = "translateX(-150%)";
  registerFrame.style.transform = "translateX(-50%)";
});

// console.log("HELLO!");
