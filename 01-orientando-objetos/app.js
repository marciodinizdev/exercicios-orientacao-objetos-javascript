console.log("Funcionou!");

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];


function capitalizar(ingredientes) {

    var modificado = [];
    for (var i = 0; i < ingredientes.length; i++) {
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1)
        var resultado = letraInicial + restoTexto;
        
        modificado[i] = resultado;
    }
    return modificado;

}

function ordenar(ingredientes) {

    var ordenado = ingredientes.sort(function(a, b) {
        return a.localeCompare(b,);
    });
    
    return ordenado;

}

console.log(capitalizar(ingredientes));
console.log(ordenar(ingredientes));