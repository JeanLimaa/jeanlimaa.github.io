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
  }



  //chat.js
const ctx = document.getElementById('graphichs-chart');
const ctx2 = document.getElementById('graphichs-chart2');
const ctx3 = document.getElementById('graphichs-chart3');
const ctx4 = document.getElementById('graphichs-chart4');
    
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['10-14 anos', '14-18 anos', '18+ anos'],
    datasets: [{
      label: 'Idade dos jogadores',
      data: [12, 19, 3],
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
  type: 'doughnut',
  data: {
    labels: ['10-14 anos', '14-18 anos', '18+ anos'],
    datasets: [{
      label: 'Idade dos jogadores',
      data: [12, 19, 3],
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
  type: 'line',
  data: {
    labels: ['10-14 anos', '14-18 anos', '18+ anos'],
    datasets: [{
      label: 'Idade dos jogadores',
      data: [12, 19, 3],
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
  type: 'bar',
  data: {
    labels: ['10-14 anos', '14-18 anos', '18+ anos'],
    datasets: [{
      label: 'Idade dos jogadores',
      data: [12, 19, 3],
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
