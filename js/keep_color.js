var colors = [
  "#4ABDAC",
  "#272BAD",
  "#B56CB4"
];
var colourIndex = localStorage.getItem("color");
// on récupère l'élément
var elmt = document.getElementById("all");

// on modifie son style
elmt.style.backgroundColor = colors[colourIndex];
