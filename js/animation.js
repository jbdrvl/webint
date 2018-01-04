var logo_img = document.getElementById('logo-img');

function animateLogo(scale, duration, elasticity, offset) {
  anime.remove(logo_img);
  anime({
    targets: logo_img,
    scale: scale,
    duration: duration,
    translateX: offset,
    elasticity: elasticity
  });
};
//

function enterLogo() {
  var tab = localStorage.getItem("tab");
  if (tab == 1){
    animateLogo(1.1, 1500, 800, 100);
    $('#bubble').css("visibility","visible");
  } else {
    animateLogo(1.1, 1500, 800, 0);
  }
};
function leaveLogo() {
  animateLogo(1.0, 1500, 500, 0);
  $('#bubble').css("visibility","hidden");
};

logo_img.addEventListener('mouseenter', enterLogo, false);
logo_img.addEventListener('mouseleave', leaveLogo, false);
