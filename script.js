// Dark mode toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Change icon based on mode
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Animation on scroll (for fade-in)
const fadeElements = document.querySelectorAll('.fade-in');
function fadeInOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);