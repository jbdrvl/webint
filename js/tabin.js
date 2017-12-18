var colors = [
  "#4ABDAC",
  "#272BAD",
  "#B56CB4"
];

var second_color = [
  "#F7B733",
  "#D55C53",
  "#D55C53"
];

var tab = 1;
var colourIndex = localStorage.getItem("color");

var signin = document.getElementById("signin");
var signup = document.getElementById("signup");
var title = document.getElementById("login-title");

if (tab == 1){
  signin.style.borderBottomColor=second_color[colourIndex];
  signin.style.fontWeight="900";
}

if (tab == 2){
  
}
