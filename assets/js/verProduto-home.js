const btnVerProduto = document.querySelectorAll(".card__link");

btnVerProduto.forEach(btn => {
    btn.addEventListener('click', () => {
        const url = btn.parentNode.querySelector('.card__img').getAttribute('src');
        const nome = btn.parentNode.querySelector('.card__nome').textContent;
        const preco = btn.parentNode.querySelector('.card__preco').textContent;
        const descricao = btn.parentNode.querySelector('.hidden').textContent;
        const categoria = btn.parentNode.querySelector('.hidden').dataset.categoria;

        const listaInfo = [url, nome, preco, descricao, categoria];
        localStorage.setItem('produto', JSON.stringify(listaInfo));
    })
})