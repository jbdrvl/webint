var colors = [
  "#4ABDAC",
  "#272BAD",
  "#B56CB4",
  "#5E8285"
];

var second_color = [
  "#F7B733",
  "#D55C53",
  "#D55C53",
  "#63B82B"
];
var colourIndex = localStorage.getItem("color");
// on récupère l'élément
var elmt = document.getElementById("all");

// on modifie son style
elmt.style.backgroundColor = colors[colourIndex];
