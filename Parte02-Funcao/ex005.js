// Função que transforma um valor em moeda
function monetarizar(valor) {
    return 'R$' + valor.toFixed(2).replace('.', ',')
}

console.log(monetarizar(0.1 + 0.2)) // R$0.30