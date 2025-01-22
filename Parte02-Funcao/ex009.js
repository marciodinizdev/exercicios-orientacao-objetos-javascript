// Função que arredonda a nota do aluno e verifica se ele foi aprovado ou reprovado

function arredondarNota(nota) {
    if (nota < 38) {
        return nota;
    } else {
        let resto = nota % 5;
        if (resto >= 3) {
            return nota + (5 - resto);
        } else {
            return nota;
        }
    }
}

function classificarAluno(nota) {
    let notaArredondada = arredondarNota(nota);
    if (notaArredondada >= 40) {
        return `Aprovado com nota ${notaArredondada}`;
    } else {
        return `Reprovado com nota ${notaArredondada}`;
    }
}

console.log(classificarAluno(40));