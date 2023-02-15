let navMain = document.querySelector('.site-list')
let navToggle = document.querySelector('.navigation__toggle')
let navJs = document.querySelector('.navigation')

navJs.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('site-list--open');
  navMain.classList.toggle('site-list--close');
  navToggle.classList.toggle('navigation__toggle--open');
  navToggle.classList.toggle('navigation__toggle--close');
})
