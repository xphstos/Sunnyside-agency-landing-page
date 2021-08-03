const HEADER_NAV = document.querySelector("nav.nav--header")
const MENU_TOGGLE = document.querySelector("button.header__nav-toggle")
const MENU_BREAK = window.matchMedia("(min-width: 769px)")

window.addEventListener(
	"resize",
	() => MENU_BREAK.matches && isMenuOpen() && closeMenu()
)
MENU_TOGGLE.addEventListener("click", toggleMenu)

function isMenuOpen() {
	return HEADER_NAV.classList.contains("nav--is-open")
}

function openMenu() {
	HEADER_NAV.classList.add("nav--is-open")
}

function closeMenu() {
	HEADER_NAV.classList.remove("nav--is-open")
}

function toggleMenu() {
	isMenuOpen() ? closeMenu() : openMenu()
}
