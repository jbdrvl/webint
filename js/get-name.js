var username = localStorage.getItem('username');

usernameSpans = document.getElementsByClassName('username-span');

for (var i=0; i<usernameSpans.length; i++) {
  usernameSpans[i].innerHTML = username;
}
