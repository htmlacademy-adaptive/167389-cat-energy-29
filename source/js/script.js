let navMenu = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navLink = document.querySelectorAll('.main-nav__link');
let menuWrapper=document.querySelector('.main-header');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
  } else {
    navMenu.classList.add('main-nav--closed');
    navMenu.classList.remove('main-nav--opened');
  }
});