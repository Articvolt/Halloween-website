// SHOW MENU

// définition des constantes à appelées
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

// pour afficher la barre de navigation
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//pour cacher la barre de navigation
if(navClose$) {
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU

//déclaration de la constante
const navLink = document.querySelectorAll('.nav__link')

// cache le menu après avoir cliqué sur un lien
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))
