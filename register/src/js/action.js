const inputFields = document.querySelectorAll('.input-focus');

// Adicionar classe quando o campo recebe foco
inputFields.forEach(input => {

    input.addEventListener('focus', () => {
        input.nextElementSibling.classList.add('active');
    });

    // Remover classe quando o campo perde o foco
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.nextElementSibling.classList.remove('active');
        }
    });
});


const fileNameNF = document.getElementById('file-name-nf');
const photoNF = document.getElementById('photo-nf');

// Adicionar texto do arquivo do usuario
photoNF.addEventListener('change', function (){
    if(photoNF != ''){
        fileNameNF.innerText = this.value;

        //Mudar a cor do icone da foto 
        photoNF.nextElementSibling.style.color = '#2d2f31'
    } 
});


const fileNameTag = document.getElementById('file-name-tag');
const photoTag = document.getElementById('photo-tag')

// Adicionar texto do arquivo do usuario
photoTag.addEventListener('change', function (){
    if(photoTag != ''){
        fileNameTag.textContent = this.value;

        //Mudar a cor do icone da foto
        photoTag.nextElementSibling.style.color = '#2d2f31'
    }       
});


//Função para ativar o botão
function checkCheckbox(){
    const checkTerm = document.getElementById('check-marked-term');
    const bnt = document.querySelector('.bnt');

    if (checkTerm.checked){
        bnt.disabled = false
        bnt.classList.remove('inactive');
        bnt.classList.add('active');
    } else {
        bnt.disabled = true
        bnt.classList.remove('active');
        bnt.classList.add('inactive');
    }
}