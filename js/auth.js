$('document').ready(function () {
  $('#login').click(function () {
    var email = $('#username').val();
    var password = $('#password').val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      //alert(errorMessage);
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var currentUser = firebase.auth().currentUser;
        //alert(currentUser.email);
        window.location.replace("home.html");
        //firebase.auth().signOut();
      } else {
        // No user is signed in.
      }
    });
  });
});
