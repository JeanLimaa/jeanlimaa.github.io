const root = document.querySelector(':root');
const input = document.getElementById('input');
const inputResult = document.querySelector('#result');
const btn = document.getElementById('copyToClipboard');

const allowedKeys = ['(', ')', '*', '/','+', '-','1', '2', '3', '4', '5', '6', '7', '8', '9', 'delete', '.',' ', '%'];

// para cada elemento com a classe charKey; ao ser acionado a evento click,
//irá executar a função adicionando o valor que está em seu data (data-value)


document.getElementById('clear').onclick = function(){
    input.value = '';
    input.focus();
}

input.addEventListener('keydown', function(ev) {
    ev.preventDefault();
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key;
        return;
    };
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    };
    if (ev.key === 'Enter'){
        calculate();
    };
    btn.classList.remove('success');
    btn.innerText = 'Copy';  
});


function calculate() {
    //vai executar primeiro, caso der erro, não ira passar para calcular e irá permanecer no ERRO
    inputResult.value = 'ERROR';
    inputResult.classList.add('error');

    //calcular
    const result = eval(input.value);
    inputResult.value = result;
    inputResult.classList.remove('error');
};
document.querySelector('#equal').onclick = calculate;
const main = document.getElementById('main');

document.getElementById('themeSwitcher').onclick = () => {
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }
}

btn.onclick = (ev) => {
    const button = ev.currentTarget;

    if(button.innerText === 'Copy' && inputResult.value != ''){
        button.classList.add('success');
        button.innerText = 'Copied!';
        navigator.clipboard.writeText(inputResult.value);   
    } else {
        button.classList.remove('success');
        button.innerText = 'Copy';
    }
}
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value;
        input.value += value;
        //remover o "copied ao adicionar uma nova operação/numero"
        btn.classList.remove('success');
        btn.innerText = 'Copy';  
    })
})