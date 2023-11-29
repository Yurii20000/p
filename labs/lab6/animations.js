document.addEventListener("DOMContentLoaded", function () {
    // Анімація для першого покемона
    gsap.to("#<a href="https://pokemondb.net/pokedex/grimmsnarl"><img src="https://img.pokemondb.net/sprites/home/shiny/grimmsnarl-gigantamax.png" alt="Grimmsnarl"></a>", { x: 200, duration: 2, repeat: -1, yoyo: true });
  
    // Анімація для другого покемона
    gsap.to("#pokemon2", { x: -200, duration: 2, repeat: -1, yoyo: true });
  
    // Анімація для третього покемона
    gsap.to("#pokemon3", { y: 100, duration: 2, repeat: -1, yoyo: true });
  });
  