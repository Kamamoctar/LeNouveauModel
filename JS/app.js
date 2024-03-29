// ++++++++++++++++++++++++++++ LE THEME SOMBRE ++++++++++++++++++++++++++++
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// ++++++ 
// PRECEDEMENT SELECTIONNER (...DaNS LOCAL STORAGE)
// ++++++
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// ++++++ 
//  NOUS OBTENONS LE THEME ACTUEL DE L'INTERFACE 
// ++++++
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// ++++++ 
//  POUR VALIDER SI LE CHOIX EST FAIT PRECEDEMMT 
// ++++++
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// ++++++ 
//  ACTIVATION ET DESACTIVATION MANUELLE 
// ++++++
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME marche")

// +++++++++++++++++++++++++++++++++
//          LE MENU
// +++++++++++++++++++++++++++++++++
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU visible  =============
/*  Validate if the constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ================  MENU caché  =============
/*  Valider si constante existe */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// ==================DISPARITON MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // ENLEVE LA VISIBILITE DU MENU QUNAD CLICK SUR nav-link
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log('remove menu marche');


// ++++++++++++++++++++++++++++
// ? TYPEWRITER EFFECT
// ++++++++++++++++++++++++++++

new Typewriter('#typewriter', {
    strings: ['NAMADOU Moctar K.', '#Information Manager', '#Communicant'],
    autoStart: true,
    loop: true,
    cursor: '|'
});
console.log('Marche Aussi');


// ++++++++++++++++++++++++++++
// ? LE SWIPER JS DU PORTFOLIO
// ++++++++++++++++++++++++++++

var swiper = new Swiper(".blog-slider", {
    // cssMode: true,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
});
console.log('le swiper marche')

// 
// AFFICHE UNE DATE
// 
const date = new Date()
const AnneeActuelle = date.getFullYear()
document.getElementById('LadateDuCopy').innerHTML = AnneeActuelle


// 
// LE DEFILEMENT :: SCROLL UP
// 

function scrollUp(){
    const scrollup = document.getElementById('scroll-up')
    //QUAND SUPERIEUR A 560 
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll')
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
    console.log('ca marche le scroll')
}
window.addEventListener('scroll', scrollUp)

// ==========================
// ACTIV MENU ITEMS
// ==========================
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Section highlight working!")
}
window.addEventListener('scroll', scrollActive)