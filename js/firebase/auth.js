$('document').ready(function () {
  $('#login').click(function () {
    var email = $('#username').val();
    var password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $('#background').css("visibility","visible");
      $('#alertinfo').html(errorMessage);
    });
    $('#arrow').click(function () {
      $('#background').css("visibility","hidden");
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var currentUser = firebase.auth().currentUser;
        //alert(currentUser.email);
        if (currentUser.emailVerified==false) {
          $('#background').css("visibility","visible");
          $('#alertinfo').html("Please verify your email address before logging in");
        } else {
          window.location.replace("home.html");
        }
        firebase.auth().signOut();
      } else {
        // No user is signed in.
      }
    });
  });
});
