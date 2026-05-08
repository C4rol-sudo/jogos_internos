// 1. Localiza o botão e a caixa de destino
const botao = document.getElementById('btn-regras');
const destino = document.getElementById('container-tabela');

// 2. Cria a função que busca o arquivo
botao.addEventListener('click', () => {
    
    // O fetch vai "chamar" o arquivo regras.html
    fetch('programacao.html')
        .then(resposta => {
            // Se der tudo certo, pega o texto do arquivo
            return resposta.text();
        })
        .then(html => {
            // Joga o HTML da tabela dentro da nossa div
            destino.innerHTML = html;
        })
        .catch(erro => {
            console.error('Erro ao carregar as regras:', erro);
            alert('Não foi possível carregar as regras.');
        });
});