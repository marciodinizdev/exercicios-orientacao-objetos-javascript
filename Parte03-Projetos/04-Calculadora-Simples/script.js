const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const resultado = document.querySelector('.resultado');

function calcular(operador) {
    const valor1 = parseFloat(input1.value)
    const valor2 = parseFloat(input2.value)
    let res;
    switch (operador) {
        case '+':
            res = valor1 + valor2
            break;
        
        case '-':
            res = valor1 - valor2
            break;
        
        case '*':
            res = valor1 * valor2
            break;
        
        case '/':
            res = valor1 / valor2
            break;
    
        default:
            break;
    }
    resultado.innerHTML = 'Resultado: ' + res
    
}