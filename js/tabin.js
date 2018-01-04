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

$('#signin').css("border-color",second_color[colourIndex]);


$('document').ready(function () {
  $('#signup').click(function () {
    localStorage.setItem("tab",0);
    $('#login-title-p').html("Create an account");
    $('#signin').css("border-color","white");
    $('#signup').css("border-color",second_color[colourIndex]);
    $('#signin').css("font-weight","500");
    $('#signup').css("font-weight","900");
    $('#form-login-container').css("visibility","hidden");
    $('#form-signup-container').css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},200);
    $('#logo').css("width","30vh");
    $('#logo').css("height","30vh");
    $('#logo').css("bottom","35%");
    $('#login-form').css("top","70%");
    $('#login-form').css("height","45%");//TODO
    $('#login-title').css("height","20%");
    $('#buttons_container').css("height","20%");
    $('#data_login').css("visibility","hidden");
  })
  $('#signup').mouseover(function () {
    $('#signup').css("font-weight","1000");
  })
  $('#signup').mouseout(function () {
    $('#signup').css("font-weight","500");
  })
  $('.input').keypress(function() {
  var textLength = $(this).val().length;
  if (textLength < 13) {
      $(this).css('font-size', '1.5em');
      $(this).css('margin-right', '1em');
  } else if (textLength > 13) {
      $(this).css('font-size', '1.2em');
  }
 //console.log(textLength);
});

});

$('document').ready(function () {
  $('#signin').click(function () {
    localStorage.setItem("tab",1);
    $('#login-title-p').html("Welcome back");
    $('#signup').css("border-color","white");
    $('#signin').css("border-color",second_color[colourIndex]);
    $('#signup').css("font-weight","500");
    $('#signin').css("font-weight","900");
    $('#logo').css("width","45vh");
    $('#logo').css("height","45vh");
    $('#logo').css("bottom","7em");
    $('#login-form').css("top","75%");
    $('#login-form').css("height","20%");
    $('#form-login-container').css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},200);
    $('#form-signup-container').css("visibility","hidden");
    $('#login-title').css("height","45%");
    $('#buttons_container').css("height","45%");
    $('#data_login').css("visibility","visible");
  })
  $('#signin').mouseover(function () {
    $('#signin').css("font-weight","1000");
  })
  $('#signin').mouseout(function () {
    $('#signin').css("font-weight","500");
  })
});
