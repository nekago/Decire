"use strict";

var showAboutActive = document.querySelector('.menu__list-link');
showAboutActive.addEventListener('click', function (event) {
  showAboutActive.classList.add('menu__list-link--active');
}); //functional rightSideMenu

var headerButton = document.querySelector('.header__btn'),
    rightSideMenu = document.querySelector('.rightside-menu'),
    rightSideMenuButtonClose = document.querySelector('.rightside-menu__close');
headerButton.addEventListener('click', toggleRightSideMenu);
rightSideMenuButtonClose.addEventListener('click', toggleRightSideMenu);

function toggleRightSideMenu() {
  rightSideMenu.classList.toggle('rightside-menu--close');
}

document.body.addEventListener('click', function (event) {
  if (!(event.path.length && event.path.includes(rightSideMenu) || event.path.includes(headerButton))) {
    rightSideMenu.classList.add('rightside-menu--close');
  }
}); //functional slider

$('.top__slider').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoPlay: true
});
//# sourceMappingURL=app.js.map
