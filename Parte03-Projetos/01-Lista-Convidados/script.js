/* 

Aplicação que recebe nomes de convidados para uma festa e os armazena em uma lista. Ao 
final, exibe: 
1 -> Quantos convidados foram adicionados. 
2 -> A lista completa de convidados. 
3 -> Uma mensagem personalizada para cada convidado, como: "Bem-vindo, [nome]! Estamos 
ansiosos para a festa!".

*/

const convidados = [];

const input = document.querySelector('.input');
const resposta = document.querySelector('.resposta');
const listaFinal = document.querySelector('.lista-final');

const tituloLista = document.createElement('h2');
tituloLista.textContent = 'Lista de convidados';

const quantidade = document.createElement('p');
quantidade.innerHTML = 'Quantidade de convidados: ' + convidados.length;

listaFinal.appendChild(tituloLista);
listaFinal.appendChild(quantidade);

function convidar() {

    let nome = input.value.trim();
    resposta.style.animation = 'none'

    if (nome === '') {
        resposta.innerHTML ='<span style="color: red; font-weight: bold" >Nome inválido!</span>' + ' Por favor, insira um nome válido!';
        return;
    } else {
        
        convidados.push(nome);
        input.value = '';

        quantidade.innerHTML = 'Quantidade de convidados: ' + convidados.length;
        
        resposta.innerHTML = `Você adicionou <span style="color: #5DFE4D; font-weight: bold;">${nome}</span> à lista de convidados!`;

        resposta.style.animation = "none";
        setTimeout(() => {
            resposta.style.animation = "explosao 1.8s ease-out forwards";
        }, 10);
    }

}

function finalizar() {
    listaFinal.innerHTML = '';
    listaFinal.appendChild(tituloLista);
    listaFinal.appendChild(quantidade);

    if (convidados.length === 0) {
        quantidade.innerHTML = 'Quantidade de convidados: ' + convidados.length + '<br><br> Ninguém foi convidado para a festa...';
    } else {
        quantidade.innerHTML = 'Quantidade de convidados: ' + convidados.length + '<br><br> Convidados: <br>' + convidados.join(', ');

        const ul = document.createElement('ul');
        listaFinal.appendChild(ul)
        convidados.forEach((convidado) => {
            const li = document.createElement('li');
            li.innerHTML = `<span style="font-style: italic;;">Boas vindas, ${convidado}, Estamos ansiosos para a festa!</span>`
            ul.appendChild(li)
        })

    }

}
