"use strict";

///////////////////////
// Navigation feature

// Select elements
const navMenu = document.getElementById("nav--menu");
const navToggle = document.getElementById("nav--toggle");
const closeMenu = document.getElementById("nav--close");

// Show the menu list
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Hide the menu list
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

////////////////////////
// GSAP Animation

// Mousemove Animation on images
document.addEventListener("mousemove", move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Navigation Animation
gsap.from(".nav-logo, .nav-toggle", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 10,
});
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
  stagger: 0.2,
});

// Home Section Animation
gsap.from(".home-title", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from(".home-description", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".home-button", { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from(".home-img", { opacity: 0, duration: 1, delay: 1.3, y: 30 });
