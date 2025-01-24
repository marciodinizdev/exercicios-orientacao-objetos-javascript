let idAtual = 1;

function adicionarProduto() {
    const input = document.querySelector('.table-input');
    const tabela = document.querySelector('#tabela tbody');

    if (input.value.trim() === '') {
        alert('Por favor, insira  o nome do item')
        return;
    }

    const textoCapitalizado = input.value.trim().replace(/\b\w/g, letra => letra.toUpperCase());


    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th>${idAtual}</th>
        <th>${textoCapitalizado}</th>
        <th>
            <input type="button" value="❌" title="Remover" onclick="removerProduto(this)">
        </th>
    `
    tabela.appendChild(novaLinha);
    idAtual++;
    textoCapitalizado = '';
}

function removerProduto(botao) {
    const linha = botao.closest('tr');
    linha.remove();
}