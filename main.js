// scroll revearl

ScrollReveal({ 
    reset: true,
    distance: '40px',
    duration: 2000,
    delay: 80 , 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .home-content p, .about-content', { origin: 'left' });

// funções para abrir o texto (ler mais) ao clicar no button

//pt-br
function readMore() {
    let btnReadMore = document.getElementById('btn readMore');
    let point = document.getElementById('point');
    let moreText = document.getElementById('moreText');

    if(point.style.display != 'none') {
        moreText.style.display = 'inline';
        btnReadMore.innerHTML = 'Ler menos';
        point.style.display = 'none';
    } else {
        moreText.style.display = 'none';
        btnReadMore.innerHTML = 'Ler mais';
        point.style.display = 'inline';
    }
}
//en-us
function readMoreEnglish() {
    let btnReadMore = document.getElementById('btn readMore');
    let point = document.getElementById('point');
    let moreText = document.getElementById('moreText');

    if(point.style.display != 'none') {
        moreText.style.display = 'inline';
        btnReadMore.innerHTML = 'Read less';
        point.style.display = 'none';
    } else {
        moreText.style.display = 'none';
        btnReadMore.innerHTML = 'Read more';
        point.style.display = 'inline';
    }
}

// icone toggle navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ativar hover da navbar ao scrollar por section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remover icone toggle quando clicar no link dentro do navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// typed js
//BR
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-End.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
