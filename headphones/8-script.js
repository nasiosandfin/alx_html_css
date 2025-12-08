// Select elements
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  
  // Animate hamburger icon (optional)
  hamburger.classList.toggle('open');
});
