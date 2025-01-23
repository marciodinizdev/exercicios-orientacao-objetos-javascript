const input = document.querySelector('.input');
const resultado = document.querySelector('.resultado');

const verificar = () => {
    let idade = input.value.trim()

    if (idade == '' || isNaN(idade)) {
        resultado.innerHTML = `<span style="color: red; font-weight: bold">Valor Inválido!</span> Digite uma idade válida` 
    }
    else if (idade == 0) {
        resultado.innerHTML = 'Você não nasceu!'
    }
    else if (idade <= 12) {
        resultado.innerHTML = 'Você é uma criança'
    } else if (idade > 12 && idade < 18) {
        resultado.innerHTML = 'Você é um adolescente';
    } else if (idade >= 18 && idade < 60) {
        resultado.innerHTML = 'Você é um adulto'
    } else {
        resultado.innerHTML = 'Você é um idoso'
    }
}