// Função que calcula as raízes de uma equação do segundo grau
function bhaskara(a, b, c) {

    delta = b**2 - 4 * a * c
    if (delta < 0) {
        return 'Delta é negativo, portanto não existem raízes reais!'
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)

        if (delta > 0) {
            return `As raízes são: ${x1.toFixed(1)} e ${x2.toFixed(1)}`
        } else  {
            return `A raiz é: ${x1.toFixed(1)}`
        }
    }

}

// Equação: x^2 -5x + 6 = 0
console.log(bhaskara(1, -5, 6)) // As raízes são: 3,2