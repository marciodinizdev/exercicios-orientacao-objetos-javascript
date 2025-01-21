// Função que recebe dois valores e retorna o resultado da exponenciação do primeiro pelo segundo.

// Forma 1
function elevar1(base, expoente) {
    resultado = base ** expoente
    return 'Resultado na forma 1: ' + resultado
}
console.log(elevar1(4, 2))

// Forma 2
function elevar2(base, expoente) {
    resultado = Math.pow(base, expoente)
    return 'Resultado na forma 2: ' + resultado
}
console.log(elevar2(4, 2))