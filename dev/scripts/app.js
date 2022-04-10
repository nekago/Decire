
//show and close right side menu
const headerButton = document.querySelector('.header__btn'),
      rightSideMenu = document.querySelector('.rightside-menu'),
      rightSideMenuButtonClose = document.querySelector('.rightside-menu__close');

headerButton.addEventListener('click', toggleRightSideMenu)
rightSideMenuButtonClose.addEventListener('click', toggleRightSideMenu)

function toggleRightSideMenu() {
    rightSideMenu.classList.toggle('rightside-menu--close')
}

document.body.addEventListener('click', (event) => {
    return (event.path.length && event.path.includes(rightSideMenu) || event.path.includes(headerButton)) && rightSideMenu.classList.add('rightside-menu--close');
})

