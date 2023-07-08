//aumentar e diminuir a fonte-size para acessibilidade
const educationSection = document.querySelector('#education-content');
const root = document.querySelector(':root');

document.getElementById('font-size-icon').onclick = () => {
        if(educationSection.dataset.fontsize === 'normal'){
            root.style.setProperty('--education-font-size', '3.5rem');
            root.style.setProperty('--education-font-size-responsive', '4rem');
            educationSection.dataset.fontsize = 'acessibility';
        } else {
            root.style.setProperty('--education-font-size', '2rem');
            root.style.setProperty('--education-font-size-responsive', '2.5rem');
            educationSection.dataset.fontsize = 'normal';
        }
    
}