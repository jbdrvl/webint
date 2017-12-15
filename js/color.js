var colors = [
  "#4ABDAC", //orange
  "#272BAD", //blue
  "#B56CB4" //pink
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
var buttons = document.getElementsByClassName("my-button");
console.log(buttons);

// on modifie son style
html.style.backgroundColor = colors[colourIndex];

//récupère également la couleur pour le bouton login
try {
  login.onmouseover = function()
  {
    this.style.color = colors[colourIndex];
  }
  login.onmouseout = function()
  {
    this.style.color = "white";
  }
} catch(err) {
  console.log('[DEBUG] did not find element with ID name: login');
}
//same as login for button.my-button
try {
  for (var i=0; i<buttons.length; i++) {
    buttons[i].onmouseover = function()
    {
      this.style.color = colors[colourIndex];
    }
    buttons[i].onmouseout = function()
    {
      this.style.color = "white";
    }
  }
} catch(err) {
  console.log('[DEBUG] did not find any button');
}
