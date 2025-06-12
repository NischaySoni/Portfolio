// Optional: Add scroll animations or interactive features
console.log("Portfolio Loaded");

const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add('show');
    }
  });
});

const text = "Nischay Soni";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();
