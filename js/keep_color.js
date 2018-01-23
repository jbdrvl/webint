var colors = [
  "#548B34",
  "#245F88",
  "#ba5536",
  "#777E3F",
  "#80781F",
  "#167155",
  "#4D3565",
  "#53665D"
];

var second_color = [
  "#f98866",
  "#336b87",
  "#a43820",
  "#68829e",
  "#5bc8ac",
  "#f18d9e",
  "#1995ad",
  "#5f6457"
];

var colourIndex = localStorage.getItem("color");
// on récupère l'élément
var elmt = document.getElementById("all");

// on modifie son style
elmt.style.backgroundColor = colors[colourIndex];
/* SECONDARY COLOR */
var secColors = document.getElementsByClassName('sec-colors');
try {
  for (var i=0; i<secColors.length; i++) {
    secColors[i].style.color=second_color[colourIndex];
  }
} catch(err) {
  console.log('[DEBUG] did not find any field with className = sec-colors');
}

buttons = document.getElementsByTagName("button");

for (var i=0; i<buttons.length; i++) {
  buttons[i].style.backgroundColor="rgba(255, 255, 255, 0.3)";
  buttons[i].addEventListener("mouseover", function() {
    this.style.backgroundColor="white";
    this.style.color = colors[colourIndex];
  });
  buttons[i].addEventListener("mouseout", function() {
    this.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    this.style.color = "white";
  });
}
