document.addEventListener("DOMContentLoaded", function () {
    // Анімація для першого покемона
    gsap.to("#pokemon1", { x: 200, duration: 2, repeat: -1, yoyo: true });
  
    // Анімація для другого покемона
    gsap.to("#pokemon2", { x: -200, duration: 2, repeat: -1, yoyo: true });
  
    // Анімація для третього покемона
    gsap.to("#pokemon3", { y: 100, duration: 2, repeat: -1, yoyo: true });
  });
  