ScrollReveal({ 
    reset: false,
    distance: '20px',
    duration: 3000,
    delay: 300,
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    viewOffset: {
        bot: 100,
        top: 200
    }
    
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .home-content p, .about-content', { origin: 'left' });
ScrollReveal().sync();

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
let buttonLinks = document.querySelectorAll('header nav button');

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
            buttonLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav button[href*=' + id +']').classList.add('active');
            });
        };
    });
        // remover icone toggle quando clicar no link dentro do navbar
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
  };



  //chat.js
const ctx = document.getElementById('graphichs-chart');
const ctx2 = document.getElementById('graphichs-chart2');
const ctx3 = document.getElementById('graphichs-chart3');
const ctx4 = document.getElementById('graphichs-chart4');
const ctx5 = document.getElementById('graphichs-chart5');
    
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Sim', 'Não', 'Médio'],
    datasets: [{
      label: 'POSSUI FÁCIL COMPREENSÃO?',
      data: [6, 3, 2],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Ruim', 'Médio', 'Ótimo'],
    datasets: [{
      label: 'CLASSIFICAÇÃO DA JOGABILIDADE',
      data: [44, 28, 28],
      borderWidth: 1
    }]
  },
  options: {

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Falta de dinâmica', 'Falta de acessibilidade', 'Produtivo'],
    datasets: [{
      label: 'OPINIÃO GERAL',
      data: [8, 1, 3],
      borderWidth: 1
    }]
  },
  options: {

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['Nenhum', 'Estética/Diversão', 'Aprendizado administrativo'],
    datasets: [{
      label: 'ASPECTOS POSITIVOS',
      data: [4, 4, 3],
      borderWidth: 1
    }]
  },
  options: {

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: ['Dificuldade ao acessar', 'Falta de dinamismo', 'Outros'],
    datasets: [{
      label: 'ASPECTOS NEGATIVOS',
      data: [6, 5, 3],
      borderWidth: 1
    }]
  },
  options: {

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
