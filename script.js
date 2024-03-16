const menuIcons = document.querySelectorAll('.nav__menu__btn-element')
const menuNav = document.querySelector('.nav__menu')
const menuNavItem = document.querySelectorAll('.nav__menu__item')

const switchIconMenu = () => {
	menuNav.classList.toggle('nav__menu-active')
}

menuIcons.forEach(btn => {
	btn.addEventListener('click', switchIconMenu)
})

menuNavItem.forEach(el => {
	el.addEventListener('click', switchIconMenu)
})
