// Funções que 
function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    // R = C * (1 + i * t)
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
}
console.log(jurosSimples(100, 0.1, 10))

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    // R = C * (1 + i) ^ t
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}
console.log(jurosCompostos(100, 0.1, 10))