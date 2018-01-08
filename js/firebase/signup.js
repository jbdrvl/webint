$('document').ready(function () {
  $('#signup-button').click(function () {

    //SIGNUP DATA
    var email = $('#email').val();
    var reemail = $('#reemail').val();
    var password = $('#spassword').val();
    var rpassword = $('#srpassword').val();

    if ( email==reemail && password==rpassword ){
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $('#background').css("visibility","visible");
      $('#alertinfo').html(errorMessage);
      $('#arrow').click(function () {
        $('#background').css("visibility","hidden");
      });
      });
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        $('#background').css("visibility","visible");
        $('#alertinfo').html("A confirmation email has been sent");
        $('#arrow').click(function () {
          $('#background').css("visibility","hidden");
        });
      }, function(error) {
      alert("error with email verification")
      });
      $('#arrow').click(function () {
        $('#background').css("visibility","hidden");
      });
    } else {
      $('#background').css("visibility","visible");
      $('#alertinfo').html("Not the same email or password written in the form...");
      $('#arrow').click(function () {
        $('#background').css("visibility","hidden");
      });
    }
  });
});
