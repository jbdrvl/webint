var username = localStorage.getItem('username');
var email = localStorage.getItem('email');
var bio = localStorage.getItem('bio');
if (username) {
  try {
    usernameSpans = document.getElementsByClassName('username-span');
    for (var i=0; i<usernameSpans.length; i++) {
      usernameSpans[i].innerHTML = username;
    }
  } catch(err) {
    console.log("[INFO] no username span on this page.");
  }
}

if (email) {
  try {
    document.getElementById('email').innerHTML = email;
  } catch(err) {
    console.log("[INFO] no email field on this page.");
  }
}

if (bio && bio!=' ') {
  try {
    document.getElementById('bio-display').innerHTML = bio;
  } catch(err) {
    console.log("[INFO] no bio");
  }
}
