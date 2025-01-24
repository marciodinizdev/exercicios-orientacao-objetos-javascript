const input = document.querySelector('.input');
const resultado = document.querySelector('.resultado');

function realizarOperacao() {
    resultado.innerHTML = ''
    numero = parseFloat(input.value)
    if (isNaN(numero)) {
        resultado.innerHTML = `<span style="color: red; font-weight: bold">Valor Inválido!</span> Digite um número válido` 
    } else {
        
        for (let indice = 1; indice < 11; indice++) {

            let res;
            switch (operacao) {

                case 'somar':
                    res = numero + indice
                    resultado.innerHTML += `${numero} + ${indice} = ${res} <br>`;
                    break;
                
                case 'subtrair':
                    res = numero - indice
                    resultado.innerHTML += `${numero} - ${indice} = ${res} <br>`;
                    break;

                case 'multiplicar':
                    res = numero * indice
                    resultado.innerHTML += `${numero} x ${indice} = ${res} <br>`;
                    break;
                
                case 'dividir':
                    res = numero / indice
                    resultado.innerHTML += `${numero} / ${indice} = ${res} <br>`;
                    break;

                default:
                    break;
            }

        }
        
    }
    
}

document.querySelector('.somar').addEventListener('click', () => {
    operacao = 'somar';
    realizarOperacao();
});
document.querySelector('.subtrair').addEventListener('click', () => {
    operacao = 'subtrair';
    realizarOperacao();
});
document.querySelector('.multiplicar').addEventListener('click', () => {
    operacao = 'multiplicar';
    realizarOperacao();
});
document.querySelector('.dividir').addEventListener('click', () => {
    operacao = 'dividir';
    realizarOperacao();
});