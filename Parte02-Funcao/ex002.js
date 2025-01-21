function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Triângulo equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return 'Triângulo isósceles';
    } else {
        return 'Triângulo escaleno';
    }
}

var resultado = classificarTriangulo(3, 2, 1);
console.log(resultado);