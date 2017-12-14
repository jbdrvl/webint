var logo_img = document.getElementById('logo-img');

function animateLogo(scale, duration, elasticity) {
  anime.remove(logo_img);
  anime({
    targets: logo_img,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}

function enterLogo() { animateLogo(1.2, 1500, 800) };
function leaveLogo() { animateLogo(1.0, 1500, 500) };

logo_img.addEventListener('mouseenter', enterLogo, false);
logo_img.addEventListener('mouseleave', leaveLogo, false);
