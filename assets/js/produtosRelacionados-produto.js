;const listaGeral = JSON.parse(localStorage.getItem("listaGeral"));
const produto = JSON.parse(localStorage.getItem('produto'));
const listaProdutos = document.querySelector('.lista-produtos');

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
    listaProdutos.innerHTML = "";
    if (produto[4] == "starWars") {
        for (let i = 0; i < tela; i++) {
            listaProdutos.innerHTML += `
            <li class="produto__card">
                <img src="${listaGeral[0][i].urlImagem}" alt="${listaGeral[0][i].nome}" class="card__img">
                <p class="card__nome">${listaGeral[0][i].nome}</p>
                <p class="card__preco">${listaGeral[0][i].preco}</p>
                <p class="hidden" data-categoria="${listaGeral[0][i].categoria}">${listaGeral[0][i].descricao}</p>
                <a href="./produto.html" class="card__link">Ver produto</a>
            </li>`;
        }
    } else  if (produto[4] == "consoles") {
        for (let i = 0; i < tela; i++) {
            listaProdutos.innerHTML += `
            <li class="produto__card">
                <img src="${listaGeral[1][i].urlImagem}" alt="${listaGeral[1][i].nome}" class="card__img">
                <p class="card__nome">${listaGeral[1][i].nome}</p>
                <p class="card__preco">${listaGeral[1][i].preco}</p>
                <p class="hidden" data-categoria="${listaGeral[1][i].categoria}">${listaGeral[1][i].descricao}</p>
                <a href="./produto.html" class="card__link">Ver produto</a>
            </li>`;
        }
    } else  if (produto[4] == "diversos") {
        for (let i = 0; i < tela; i++) {
            listaProdutos.innerHTML += `
            <li class="produto__card">
                <img src="${listaGeral[2][i].urlImagem}" alt="${listaGeral[2][i].nome}" class="card__img">
                <p class="card__nome">${listaGeral[2][i].nome}</p>
                <p class="card__preco">${listaGeral[2][i].preco}</p>
                <p class="hidden" data-categoria="${listaGeral[2][i].categoria}">${listaGeral[2][i].descricao}</p>
                <a href="./produto.html" class="card__link">Ver produto</a>
            </li>`;
        }
    }
}