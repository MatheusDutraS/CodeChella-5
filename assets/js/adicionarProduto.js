var listaTodosProdutos = JSON.parse(localStorage.getItem("listaGeral"));

const btn = document.getElementById('btn');
const camposInput = document.querySelectorAll('[required]');

const campoUrl = document.getElementById("url");
const campoCategoria = document.getElementById('categoria');
const campoNome = document.getElementById('nome');
const campoDescricao = document.getElementById('descricao');
const campoPreco = document.getElementById('preco');

const iconeValido = 

camposInput.forEach((campo) => {
    campo.addEventListener('blur', () => {
        verificarCampos(campo);
    })
})

btn.addEventListener('click', () => {
    const preco = parseInt(campoPreco.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    adicionarProduto(campoUrl.value, campoCategoria.value, campoNome.value, campoDescricao.value, preco);
    limparCampos();
    habilitarBotao();
    limparValidacao();
})

function adicionarProduto(url, categoria, nome, descricao, preco) {
    if (categoria == "starWars") {
        listaTodosProdutos[0].push(
            {
                urlImagem: `${url}`,
                categoria: `${categoria}`,
                nome: `${nome}`,
                preco: `R$ ${preco}`,
                descricao: `${descricao}`
            }
        )
    } else if (categoria == "consoles") {
        listaTodosProdutos[1].push(
            {
                urlImagem: `${url}`,
                categoria: `${categoria}`,
                nome: `${nome}`,
                preco: `R$ ${preco}`,
                descricao: `${descricao}`
            }
        )
    } else {
        listaTodosProdutos[2].push(           
            {
                urlImagem: `${url}`,
                categoria: `${categoria}`,
                nome: `${nome}`,
                preco: `R$ ${preco}`,
                descricao: `${descricao}`
            }
        )
    }
    // localStorage.setItem("listaGeral", JSON.stringify(listaTodosProdutos));
}

const tiposDeErro = [
    'patternMismatch',
    'tooShort',
    'valueMissing'
];

const mensagens = {
    url: {
        patternMismatch: "Erro! A extensão da imagem não é válida. Tente imagem com final .png, .jpg ou .jpeg",
        valueMissing: "Erro! O campo da URL está vazio"
    },
    categoria: {
        valueMissing: "Erro! O campo da categoria está vazio",
    },
    nome: {
        tooShort: "Erro! O nome do produto deve conter mais de 5 caracteres",
        valueMissing: "Erro! O campo do nome está vazio"
    },
    preco: {
        patternMismatch: "Erro! O valor do preço é inválido ou extrapola o permitido pelo site, que é 10000 reais",
        valueMissing: "Erro! O campo do preco está vazio"
    },
    descricao: {
        valueMissing: "Erro! O campo da descricao está vazio"
    }
};

function verificarCampos(campo) {
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const iconeValido = campo.parentNode.querySelector('.icone--valido');
    const iconeInvalido = campo.parentNode.querySelector('.icone--invalido');

    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    });

    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem;
        campo.parentNode.classList.remove('campo--valido');
        campo.parentNode.classList.add('campo--invalido');
        iconeValido.style.display = "none"
        iconeInvalido.style.display = "block"
    } else {
        mensagemErro.textContent = ""
        campo.parentNode.classList.add('campo--valido');
        campo.parentNode.classList.remove('campo--invalido');
        iconeValido.style.display = "block"
        iconeInvalido.style.display = "none"
    }
    habilitarBotao();
}

function habilitarBotao() {
    if (campoUrl.checkValidity() && campoCategoria.checkValidity() && campoDescricao.checkValidity() && campoNome.checkValidity() && campoPreco.checkValidity()) {
        btn.removeAttribute("disabled");
        btn.classList.remove("desabilitado");
    } else {
        btn.setAttribute("disabled", true);
        btn.classList.add("desabilitado");
    }
}
function limparCampos() {
    camposInput.forEach(campo => {
        campo.value = "";
    })
}

function limparValidacao() {
    const iconeValido = document.querySelectorAll('.icone--valido');
    const fieldset = document.querySelectorAll('.fieldset');

    iconeValido.forEach((icone) => {
        icone.style.display = "none";
    })

    fieldset.forEach((field) => {
        field.classList.remove('campo--valido');
    })
}