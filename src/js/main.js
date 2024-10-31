// SELECTORS
const menuButton = document.querySelector('.menu_button');
const overlayModel = document.querySelector('.overlay_model');
const sectionHeroEl = document.querySelector('.hero_section');

const navLinks = document.querySelectorAll('.nav_link-model');
const year = document.querySelector('.year');
const header = document.querySelector('.header');

const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

// EVENT LISTENERS
menuButton.addEventListener('click', () => {
  overlayModel.classList.toggle('hidden');
});
navLinks.forEach(Element => {
  Element.addEventListener('click', () => {
    overlayModel.classList.toggle('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('.lazy');

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.classList.add('loaded'); // Add loaded class for the animation
        observer.unobserve(img); // Stop observing the image once it's loaded
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  lazyImages.forEach(img => observer.observe(img));
});
