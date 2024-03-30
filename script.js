const upperTitle = document.getElementById("upper-title");
const lowerTitle = document.getElementById("lower-title");
const partnersButton = document.getElementById("partnerships-button");
const mediaButton = document.getElementById("media-button");
const partnershipsPopup = document.getElementById("partnerships-popup");
const connectPopup = document.getElementById("connect-popup");
const closeSignPartner = document.getElementById("close-sign-label-partner");
const closeSignLabelMedia = document.getElementById("close-sign-label-media");
const logoTitle = document.getElementById("logo-title");
const bodyBG = document.getElementById("body-bg");

function upperHeadTitle(x) {
  if (x.matches) {
    upperTitle.innerHTML = "LIVE LIFE IN FLOW";
    lowerTitle.innerHTML = "coming soon";
  } else {
    upperTitle.innerHTML = "coming soon";
    lowerTitle.innerHTML = "LIVE LIFE IN FLOW";
  }
}

var x = window.matchMedia("(min-width:768px)");
upperHeadTitle(x);
x.addEventListener("change", () => {
  upperHeadTitle(x);
});

partnersButton.addEventListener("click", () => {
  partnershipsPopup.classList.remove("hidden");
  connectPopup.classList.add("hidden");
  upperTitle.classList.add("title-opacity");
  lowerTitle.classList.add("title-opacity");
  logoTitle.classList.add("title-opacity");
  bodyBG.classList.add("change-bg");
});

mediaButton.addEventListener("click", () => {
  connectPopup.classList.remove("hidden");
  partnershipsPopup.classList.add("hidden");
  upperTitle.classList.add("title-opacity");
  lowerTitle.classList.add("title-opacity");
  logoTitle.classList.add("title-opacity");
  bodyBG.classList.add("change-bg");
});

closeSignPartner.addEventListener("click", () => {
  partnershipsPopup.classList.add("hidden");
  upperTitle.classList.remove("title-opacity");
  lowerTitle.classList.remove("title-opacity");
  logoTitle.classList.remove("title-opacity");
  bodyBG.classList.remove("change-bg");
});

closeSignLabelMedia.addEventListener("click", () => {
  connectPopup.classList.add("hidden");
  upperTitle.classList.remove("title-opacity");
  lowerTitle.classList.remove("title-opacity");
  logoTitle.classList.remove("title-opacity");
  bodyBG.classList.remove("change-bg");
});
