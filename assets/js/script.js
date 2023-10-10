$(function(){

  $(".nav-m").on("click", function(){

    window.location.href = '#sitemap';   

  })

  $(".home").on("click", function(){

    window.location.href = '#home';   

  })

  $(window).scroll(function(){
    if($(window).scrollTop()){

      $("header .container img").addClass("logo");

    }else{

      $("header .container img").removeClass("logo");

    }

  });
});



function isiOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function scrollToElement(targetElement) {
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Ajuste a duração conforme necessário

  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.addEventListener('click', function (e) {
  if (isiOS() && e.target && e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      scrollToElement(targetElement);
    }
  }
});

