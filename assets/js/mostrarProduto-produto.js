function mostrarProduto() {
    const produto = JSON.parse(localStorage.getItem('produto'));

    const imagem = document.querySelector('.produto__imagem');
    imagem.setAttribute('src', `${produto[0]}`);
    imagem.setAttribute('alt', `${produto[1]}`);

    const nome = document.querySelector('.info__nome');
    nome.textContent = `${produto[1]}`;


    const preco = document.querySelector('.info__preco');
    preco.textContent = `${produto[2]}`;

    const descricao = document.querySelector('.info__descricao');
    descricao.textContent = `${produto[3]}`;
}
mostrarProduto();