const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
const intro = document.querySelector('.intro__container');
const introHeight = intro.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow--up');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

document.addEventListener('scroll', () => {
  window.scrollY > headerHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled');
});

document.addEventListener('scroll', () => {
  window.scrollY > introHeight * 0.4 ? arrowUp.classList.add('scrolled') : arrowUp.classList.remove('scrolled');
});
