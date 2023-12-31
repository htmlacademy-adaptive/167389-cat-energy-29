let navMenu = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navLink = document.querySelectorAll('.main-nav__link');
let menuWrapper=document.querySelector('.main-header');

navMenu.classList.remove('main-nav--nojs');
navMenu.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
  } else {
    navMenu.classList.add('main-nav--closed');
    navMenu.classList.remove('main-nav--opened');
  }
});

//карта

const mapOnline = document.querySelector('.contacts__map-online');
const mapOffline = document.querySelector('.contacts__map-offline');
mapOnline.style.display = 'block';
mapOffline.style.display = 'none';
