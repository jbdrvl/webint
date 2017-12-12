var colors = [
  "#4ABDAC", //orange
  "#7EB7CD", //blue
  "#B56CB4", //pink
  "#6C92B5", //blue grayscale
  "#6CB588", //green
  "#87B56C", //green2
  "#D19C93"
];

var second_color = [
  "#F7B733"
]
var colourIndex = Math.floor(Math.random() * colors.length);
//HTML5 local storage
localStorage.setItem("color",colourIndex);
// on récupère l'élément
var html = document.getElementById("all");
var box = document.getElementById("login-form")

// on modifie son style
html.style.backgroundColor = colors[0];
