// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Active nav link on click
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navItems.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
  });
});
const allSections = document.querySelectorAll('.section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  allSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  let current = '';
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if(scrollPos >= top && scrollPos < bottom) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if(href === current) link.classList.add('active');
  });
}
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Example: CTA button alert
const ctaBtn = document.getElementById('ctaButton');
ctaBtn.addEventListener('click', () => {
  alert('Thank you! We will contact you shortly.');
});
// Navbar shadow on scroll (professional feel)
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});