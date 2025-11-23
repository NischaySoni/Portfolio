// --- Typing Effect ---
const text = "Nischay Soni";
const typedTextSpan = document.getElementById("typed-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedTextSpan.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// --- Scroll Animations ---
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// --- Dark Mode Toggle ---
const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("i");

// Check local storage for theme preference
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem('theme', 'light');
  }
});

// --- Hamburger Menu ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});