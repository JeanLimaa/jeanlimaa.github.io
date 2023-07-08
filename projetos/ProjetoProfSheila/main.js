// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '40px',
    duration: 2000,
    delay: 80   
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .pontosColeta-container, .team-box img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content p, .team-container, .pontosColeta-box, .education-content img', { origin: 'left' });

// ao passar o mouse em cima remover texto e icon
let geometryOne = document.querySelectorAll('.pontosColeta-box');

geometryOne.forEach(element => {
    let h2Element = element.querySelector('h2');
    let iElementRecycle = element.querySelector('i.bx-recycle');
    let iElementExternal = element.querySelector('i.bx-link-external');
    
  element.onmouseover = () => {
    h2Element.style.visibility = 'hidden';
    iElementRecycle.style.visibility = 'hidden';
    iElementExternal.style.visibility = 'hidden';
  };

  element.onmouseout = () => {
    h2Element.style.visibility = 'visible';
    iElementRecycle.style.visibility = 'visible';
    iElementExternal.style.visibility = 'visible';
  };
});


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

//arrow ao rolar o scroll
let arrow = document.getElementById('arrow');
arrow.style.display = 'none';

window.onscroll = () => {
    if(window.scrollY > 0) {
        arrow.style.display = 'inline-block';
    } else {
        arrow.style.display = 'none';
    }
}
//abrir o video de libras e fechar
let libraYuri = document.querySelector('.libras-pitch');
let libraAccess = document.querySelector('.libras-access');
let libraClose = document.querySelector('#close-libras');
libraYuri.style.display = 'none';

libraAccess.onclick = () => {libraYuri.style.display = 'block';};
libraClose.onclick = () => {libraYuri.style.display = 'none';};

//abrir o video pitch e fechar
let pitchApresentation = document.querySelector('#pitch-apresentation');
let pitchAccess = document.querySelector('.pitch-access');
let pitchClose = document.querySelector('#close-pitch');

pitchApresentation.style.display = 'none';
pitchAccess.onclick = () => {pitchApresentation.style.display = 'block';};
pitchClose.onclick = () => {pitchApresentation.style.display = 'none';};








