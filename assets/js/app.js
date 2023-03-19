/*========== Menu aparecer ou escondido ==========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*========== Menu aparecer ==========*/
/*== Valida se a constante existe ==*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========== Menu escondido ==========*/
/*== Valida se a constante existe ==*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*========== Remove menu mobile ==========*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    //Quando clicamos em cada link do menu removemos a classe para aparacer o menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== Accordion skills ==========*/
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }

    if(itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*========== Abas de qualificações ERRO PRECISA AJEITAR!!! ==========*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelectorAll(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')
        });
        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    });
});


/*========== Modelo de serviços ==========*/
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*========== swiper do portfolio ==========*/
let swiper = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*========== Feedback ==========*/