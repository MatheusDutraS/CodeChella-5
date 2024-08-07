import { listaTodosProdutos, mostrarProdutos } from "./todosProdutos.js";

function colocarBotao() {
    var deletar = document.querySelectorAll('#deletar');
    deletar.forEach(btn => {
        btn.addEventListener('click', () => {
            var nome = btn.parentNode.parentNode.querySelector('.card__nome').textContent;
            var categoria = btn.parentNode.dataset.categoria;
    
            if (categoria == "starWars") {
                let index = acharItem(0, nome);
                removerItem(0, index);
            } else if (categoria == "consoles") {
                let index = acharItem(1, nome);
                removerItem(1, index);
            } else {
                let index = acharItem(2, nome);
                removerItem(2, index);
            }
            mostrarProdutos();
            colocarBotao();
            localStorage.setItem("listaGeral", JSON.stringify(listaTodosProdutos));
        })
    })
}

function acharItem(lista, nomePoduto) {
    for (let i = 0; i < listaTodosProdutos[lista].length; i++) {
        if (listaTodosProdutos[lista][i].nome == nomePoduto) {
            return i;
        }
    }
}

function removerItem(lista, index) {
    listaTodosProdutos[lista].splice(index, 1);
}

colocarBotao();