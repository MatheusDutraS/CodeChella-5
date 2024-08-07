const listaProdutos = document.querySelectorAll('.lista-produtos');
const listaGeral = JSON.parse(localStorage.getItem("listaGeral"));

if (window.screen.width < 950) {
    mostrarProduto(4);
} else if (window.screen.width > 950 && window.screen.width < 1130) {
    mostrarProduto(5);
} else if (window.screen.width > 1130) {
    mostrarProduto(6);
}

window.onresize = () => {
    if (window.screen.width < 950) {
        mostrarProduto(4);
    } else if (window.screen.width > 950 && window.screen.width < 1130) {
        mostrarProduto(5);
    } else if (window.screen.width > 1130) {
        mostrarProduto(6);
    }
}

function mostrarProduto(tela) {
    for (let y = 0; y < 3; y++) {
        listaProdutos[y].innerHTML = "";
        for (let i = 0; i < tela; i++) {
            listaProdutos[y].innerHTML += `
            <li class="produto__card">
                <img src="${listaGeral[y][i].urlImagem}" alt="${listaGeral[y][i].nome}" class="card__img">
                <p class="card__nome">${listaGeral[y][i].nome}</p>
                <p class="card__preco">${listaGeral[y][i].preco}</p>
                <p class="hidden" data-categoria="${listaGeral[y][i].categoria}">${listaGeral[y][i].descricao}</p>
                <a href="./produto.html" class="card__link">Ver produto</a>
            </li>`;
        }
    }
}