//============================== SHOW MENU =============================

// définition des constantes à appelées
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// pour afficher la barre de navigation
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//pour cacher la barre de navigation
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//======================== REMOVE MENU MOBILE ==========================

//déclaration de la constante
const navLink = document.querySelectorAll('.nav__link')

// cache le menu après avoir cliqué sur un lien
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//================================= CHANGE BACKGROUND HEADER =================

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // au dessus de 50 viewpot height
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

//=========================== SCROLL SECTION ACTIVE LINK ==============================

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.scrollX

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//====================================== SHOW SCROLL UP ========================================
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ========================================== SCROLL REVEAL ANIMATION =======================================
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__content, .footer__logo, .footer__description`)
sr.reveal(`.home__tree-1`, {origin: 'left', delay:800})
sr.reveal(`.home__tree-2`, {origin: 'right', delay:800})
sr.reveal(`.home__img`, {delay:800})
sr.reveal(`.category__card, .items__card`, {interval: 100})
sr.reveal(`.about__img, .about__data, .footer__tree-2`, {origin: 'left'})
sr.reveal(`.party__images, .party__data, .footer__tree-1`, {origin: 'right'})