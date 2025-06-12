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

const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button icon/text based on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});
