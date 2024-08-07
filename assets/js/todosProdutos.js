var listaProdutos = document.querySelector('.lista-produtos');

var starWars = [
    {
        urlImagem: "./assets/img/produtos/StarWars-Caneca.png",
        categoria: "starWars",
        nome: "Caneca Stormtrooper",
        preco: "R$ 50,00",
        descricao: "Uma caneca com formato do capacete de um stormtrooper"
    },
    {
        urlImagem: "./assets/img/produtos/StarWars-Lego.png",
        categoria: "starWars",
        nome: "Lego StartWars",
        preco: "R$ 120,00",
        descricao: "Cabeças de lego do Dath Vader e Stormtrooper preto"
    },
    {
        urlImagem: "./assets/img/produtos/StarWars-Yoda.png",
        categoria: "starWars",
        nome: "Boneco do Yoda",
        preco: "R$ 70,00",
        descricao: "Um boneco em miniatura do Yoda de bengala"
    },
    {
        urlImagem: "./assets/img/produtos/StarWars-Stormtrooper.png",
        categoria: "starWars",
        nome: "Boneco do Stormtrooper",
        preco: "R$ 70,00",
        descricao: "Um boneco em miniatura de um Stormtrooper"
    },
    {
        urlImagem: "./assets/img/produtos/StarWars-babyYoda.png",
        categoria: "starWars",
        nome: "Boneco do baby Yoda",
        preco: "R$ 100,00",
        descricao: "Um boneco fofo do baby Yoda"
    },
    {
        urlImagem: "./assets/img/produtos/StarWars-KyloRen.png",
        categoria: "starWars",
        nome: "Boneco do Kylo Ren",
        preco: "R$ 80,00",
        descricao: "Um boneco do Kylo Ren"
    }
];

var consoles = [
    {
        urlImagem: "./assets/img/produtos/Consoles-Xbox.png",
        categoria: "consoles",
        nome: "Controle de Xbox",
        preco: "R$ 200,00",
        descricao: "Controle branco de Xbox"
    },
    {
        urlImagem: "./assets/img/produtos/Consoles-PS5.png",
        categoria: "consoles",
        nome: "Playstation 5",
        preco: "R$ 4.499,00",
        descricao: "Playstation 5 branco + um controle branco"
    },
    {
        urlImagem: "./assets/img/produtos/Consoles-NES.png",
        categoria: "consoles",
        nome: "Nintendinho",
        preco: "R$ 450,00",
        descricao: "Nintendinho (NES) + controle"
    },
    {
        urlImagem: "./assets/img/produtos/Consoles-NintendoSwitch.png",
        categoria: "consoles",
        nome: "Controles Nintendo Switch",
        preco: "R$ 300,00",
        descricao: "Controles Joy-Con L/R vermelho e azul"
    },
    {
        urlImagem: "./assets/img/produtos/Consoles-XBoxSeriesX.png",
        categoria: "consoles",
        nome: "Xbox Series X",
        preco: "R$ 3.999,00",
        descricao: "Xbox Series X preto"
    },
    {
        urlImagem: "./assets/img/produtos/Consoles-GBC.png",
        categoria: "consoles",
        nome: "Game Boy Color",
        preco: "R$ 150,00",
        descricao: "Game Boy Color transparente"
    }
];

var diversos = [
    {
        urlImagem: "./assets/img/produtos/Diversos-CamisaAtari.png",
        categoria: "diversos",
        nome: "Camisa Atari",
        preco: "R$ 120,00",
        descricao: "Camisa cor pastel com simbolo do Atari"
    },
    {
        urlImagem: "./assets/img/produtos/Diversos-CamisaNES.png",
        categoria: "diversos",
        nome: "Camisa NES",
        preco: "R$ 120,00",
        descricao: "Camisa cinza claro com estampa do controle do NES"
    },
    {
        urlImagem: "./assets/img/produtos/Diversos-Sonic.png",
        categoria: "diversos",
        nome: "Boneco do Sonic",
        preco: "R$ 200,00",
        descricao: "Boneco em miniatura do sonic"
    },
    {
        urlImagem: "./assets/img/produtos/Diversos-Despertador.png",
        categoria: "diversos",
        nome: "Rádio despertador",
        preco: "R$ 100,00",
        descricao: "Rádio despertador antigo"
    },
    {
        urlImagem: "./assets/img/produtos/Diversos-VR.png",
        categoria: "diversos",
        nome: "Óculos VR",
        preco: "R$ 2.499,00",
        descricao: "óculos VR branco + 2 controles"
    },
    {
        urlImagem: "./assets/img/produtos/Diversos-Pikachu.png",
        categoria: "diversos",
        nome: "Pelúcia Pikachu",
        preco: "R$ 99,00",
        descricao: "Pélucia do pikachu em tamanho médio (50cm)"
    }
];

var listaGeral = [starWars, consoles, diversos];
var listaGeralConvertida = JSON.stringify(listaGeral);
localStorage.setItem("listaGeral", listaGeralConvertida);

export var listaTodosProdutos = JSON.parse(localStorage.getItem("listaGeral"));

export function mostrarProdutos() {
    listaProdutos.innerHTML = "";

    listaTodosProdutos.forEach(lista => {
        lista.forEach(produto => {
            listaProdutos.innerHTML += `
            <li class="produto__card">
            <img src="${produto.urlImagem}" alt="${produto.nome}" class="card__img">
            <p class="card__nome">${produto.nome}</p>
            <p class="card__preco">${produto.preco}</p>
            <p class="card__descricao--todosProdutos">${produto.descricao}</p>
                <div class="container-edicao" data-categoria="${produto.categoria}">
                    <img src="./assets/img/delete.png" alt="lixeira para deletar" id="deletar">
                    <img src="./assets/img/edit.png" alt="caneta para editar" id="editar">
                </div>
            </li>
            `;
        })
    })
}
mostrarProdutos();