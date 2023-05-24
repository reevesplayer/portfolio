document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

  function isElementInViewport(element, offset) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top <= (windowHeight - offset) &&
      rect.bottom >= 0
    );
  }

  window.addEventListener('scroll', function() {
    var headerImg = document.querySelector('.header-img');
    var scrolled = window.scrollY;
    headerImg.style.transform = 'rotateX(' + (-scrolled * 0.1) + 'deg) translateY(' + (scrolled * 0.5) + 'px)';
  });
  
  
  function handleScroll() {
    var elements = document.querySelectorAll('.fade-in-left, .fade-in-bottom, .profile-img');
    elements.forEach(function (element) {
      if (element.classList.contains('fade-in-bottom') || element.classList.contains('profile-img')) {
        if (isElementInViewport(element, 200)) {
          element.classList.add('fade-in-visible');
        } else {
          element.classList.remove('fade-in-visible');
        }
      } else {
        if (isElementInViewport(element, 50)) {
          element.classList.add('fade-in-visible');
        } else {
          element.classList.remove('fade-in-visible');
        }
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLink = document.querySelector('.scroll-link');
    scrollLink.addEventListener('click', function(event) {
      event.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });