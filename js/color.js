var colors = [
  "#4ABDAC",
  "#272BAD",
  "#B56CB4"
];

var second_color = [
  "#F7B733",
  "#D55C53"
]
var colourIndex = Math.floor(Math.random() * colors.length);
//HTML5 local storage
localStorage.setItem("color",colourIndex);
// on récupère l'élément
var html = document.getElementById("all");
var login = document.getElementById("login");

// on modifie son style
html.style.backgroundColor = colors[colourIndex];

//récupère également la couleur pour le bouton login
login.onmouseover = function()
{
  this.style.color = colors[colourIndex];
}
login.onmouseout = function()
{
  this.style.color = "white";
}
