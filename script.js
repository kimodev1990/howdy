const upperTitle = document.getElementById("upper-title");
const lowerTitle = document.getElementById("lower-title");

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
