var colors = [
  "#89DA59",
  "#90afc5",
  "#ba5536",
  "#aebd38",
  "#e6d72a",
  "#98dbc6",
  "#bcbabe",
  "#acd0c0"
];

var second_color = [
  "#f98866",
  "#336b87",
  "#a43820",
  "#68829e",
  "#5bc8ac",
  "#f18d9e",
  "#1995ad",
  "#5f6457"
];
localStorage.setItem("tab",1);
var colourIndex = localStorage.getItem("color");
const mq = window.matchMedia( "(max-device-width: 480px)" );


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
    $('#data_login').css("visibility","hidden");
    if (mq.matches){
      $('#logo').css("width","20vh");
      $('#logo').css("height","20vh");
      $('#logo').css("top","9%");
      $('#login-form').css("top","48%");
      $('#login-form').css("height","45%");//TODO
      $('#login-title').css("height","20%");
      $('#buttons_container').css("height","20%");
    } else {
      $('#logo').css("width","30vh");
      $('#logo').css("height","30vh");
      $('#logo').css("top","15%");
      $('#login-form').css("top","70%");
      $('#login-form').css("height","45%");//TODO
      $('#login-title').css("height","20%");
      $('#buttons_container').css("height","20%");
    }
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
    if (mq.matches){
      $(this).css('font-size', '2.5em');
      $(this).css('margin-right', '1em');
    } else {
      $(this).css('font-size', '1.5em');
      $(this).css('margin-right', '1em');
    }
  } else if (textLength > 13) {
    if (mq.matches){
    } else {
      $(this).css('font-size', '1.2em');
    }
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
    $('#form-login-container').css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},200);
    $('#form-signup-container').css("visibility","hidden");
    $('#data_login').css("visibility","visible");

    if (mq.matches) {
      $('#logo').css("width","50%");
      $('#logo').css("height","40%");
      $('#logo').css("top","9%");
      $('#login-form').css("top","68%");
      $('#login-form').css("height","50%");
      $('#login-title').css("height","15%");
      $('#buttons_container').css("height","15%");
    } else {
      $('#logo').css("width","45vh");
      $('#logo').css("height","45vh");
      $('#logo').css("top","15%");
      $('#login-form').css("top","75%");
      $('#login-form').css("height","20%");
      $('#login-title').css("height","45%");
      $('#buttons_container').css("height","45%");
    }
  })
  $('#signin').mouseover(function () {
    $('#signin').css("font-weight","1000");
  })
  $('#signin').mouseout(function () {
    $('#signin').css("font-weight","500");
  })
});
