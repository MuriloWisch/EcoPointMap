function createMobileNavbar({ mobileMenuSel, navListSel, navLinksSel }) {
  const mobileMenu = document.querySelector(mobileMenuSel)
  const navList = document.querySelector(navListSel)
  const navLinks = document.querySelectorAll(navLinksSel)
  const activeClass = 'active'

  function animateLinks() {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    })
  }

  function handleClick() {
    navList.classList.toggle(activeClass)
    mobileMenu.classList.toggle(activeClass)
    animateLinks()
  }

  function init() {
    if (!mobileMenu) return;
    mobileMenu.addEventListener('click', handleClick)
  }

  return {
    init,
    handleClick,
  }
}

const mobileNavbar = createMobileNavbar({
  mobileMenuSel: '.mobile-menu',
  navListSel:   '.nav-list',
  navLinksSel:  '.nav-list li'
})

mobileNavbar.init()
