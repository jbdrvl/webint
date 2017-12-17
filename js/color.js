var colors = [
  "#4ABDAC",
  "#272BAD",
  "#B56CB4"
];

var second_color = [
  "#F7B733",
  "#D55C53"
];
var colourIndex = Math.floor(Math.random() * colors.length);
//HTML5 local storage
localStorage.setItem("color",colourIndex);
// on récupère l'élément
var html = document.getElementById("all");
var login = document.getElementById("login");
var label_u = document.getElementById("username_label");
var label_p = document.getElementById("password_label");
var buttons = document.getElementsByClassName('my-button');
var secColors = document.getElementsByClassName('sec-colors');

// on modifie son style
html.style.backgroundColor = colors[colourIndex];

try{
  label_u.style.backgroundColor = colors[colourIndex];
  label_p.style.backgroundColor = colors[colourIndex];
} catch(err) {
  console.log('[DEBUG] did not find element with ID name: login');
}

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

try {
  for (var i=0; i<secColors.length; i++) {
    secColors[i].style.color=second_color[colourIndex];
  }
} catch(err) {
  console.log('[DEBUG] did not find any field with className = sec-colors');
}
