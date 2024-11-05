import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
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
  menuButton.classList.toggle('menu_overlay');
  document.body.classList.toggle('disable_scroll');
});
navLinks.forEach(Element => {
  Element.addEventListener('click', () => {
    overlayModel.classList.toggle('hidden');
    menuButton.classList.toggle('menu_overlay');
    document.body.classList.toggle('disable_scroll');
  });
});
// lazy loading
document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('.lazy');

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
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

// Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-60px`,
});
headerObserver.observe(sectionHeroEl);
