const botao = document.getElementById('btn-regras');
const destino = document.getElementById('container-tabela');

botao.addEventListener('click', () => {
    
    fetch('programacao.html')
        .then(resposta => {
            
            return resposta.text();
        })
        .then(html => {
            
            destino.innerHTML = html;
        })
        .catch(erro => {
            console.error('Erro ao carregar as regras:', erro);
            alert('Não foi possível carregar as regras.');
        });
});