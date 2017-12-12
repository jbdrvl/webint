var colors = [
  "#CDB07E", //orange
  "#7EB7CD", //blue
  "#B56CB4", //pink
  "#6C92B5", //blue grayscale
  "#6CB588", //green
  "#87B56C", //green2
  "#D19C93"
];
var colourIndex = localStorage.getItem("color");
// on récupère l'élément
var elmt = document.getElementById("all");

// on modifie son style
elmt.style.backgroundColor = colors[colourIndex];
