var username = localStorage.getItem('username');
var email = localStorage.getItem('email');
usernameSpans = document.getElementsByClassName('username-span');
document.getElementById('email').innerHTML = email;
for (var i=0; i<usernameSpans.length; i++) {
  usernameSpans[i].innerHTML = username;
}
