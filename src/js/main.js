import apiLink from "./config";
// SELECTORS
const menuButton = document.querySelector('.menu_button');
const overlayModel = document.querySelector('.overlay_model');
const sectionHeroEl = document.querySelector('.hero_section');
const navLinks = document.querySelectorAll('.nav_link-model');
const year = document.querySelector('.year');
const header = document.querySelector('.header');
const form = document.querySelector('.feedback_form');

const model_window = document.querySelector('.model_window');
const model_close = document.querySelector('.model_close');
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;
model_close.addEventListener('click', () => {
  model_window.classList.add('hidden');
})
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
        img.classList.add('loaded'); 
        observer.unobserve(img);
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

// feedback form handling

form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(apiLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const data = await response.json();
    if (data.submit) model_window.classList.remove('hidden');
  } catch (error) {
    console.log(error);
  }
  form.reset();
});
