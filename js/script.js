window.onload = function () {
    let pocoes = document.getElementsByClassName("vitrine_container_pocao");
    var posicaoPotions = 0;

    for (let i = 0; i < pocoes.length; i++) {
        pocoes[i].addEventListener("click", function () {
            posicaoPotions = i + 1;
            console.log(i)
            exibirPopUp(posicaoPotions);
        })
    }

    document.querySelector(".cabecalho_hamburger_botao").addEventListener("click", function () {
        ativarMenuMobile();
    })

}


function exibirPopUp(posicaoPotions) {
    let sobreposicao = document.querySelector("#sobreposicao");
    let sair = document.querySelector("#sairVitrine");

    sobreposicao.classList.remove("invisivel");
    sobreposicao.classList.add("visivel");

    preencherPopUp(posicaoPotions);

    sair.addEventListener("click", function () {
        sobreposicao.classList.remove("visivel");
        sobreposicao.classList.add("invisivel");
    })
}


function preencherPopUp(posicaoPotions) {

    let titulo = document.getElementById("titulo_pocao")
    let efeito = document.getElementById("efeitos_pocao");
    let preco = document.getElementById("preco_pocao");
    let imagem = document.getElementById("imagem_pocao");

    let ingredientes = document.querySelector(".ingredientes_pocao");
    let conteudoListas = "";
    let tamanhoIngredientes = null;

    //Pegando JSON das poções
    let json = JSON.parse(get("https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json"));

    titulo.innerHTML = json.potions[posicaoPotions].name;
    efeito.innerHTML = json.potions[posicaoPotions].effect;
    preco.innerHTML = "$" + json.potions[posicaoPotions].price;
    imagem.src = "images/products/" + json.potions[posicaoPotions].image;

    tamanhoIngredientes = json.potions[posicaoPotions].ingredients.length;
    for (let j = 0; j < tamanhoIngredientes; j++) {
        conteudoListas += "<li>" + json.potions[posicaoPotions].ingredients[j] + "</li>";
    }
    ingredientes.innerHTML = conteudoListas;
    conteudoListas = "";
}


function ativarMenuMobile() {
    let botao = document.querySelector(".cabecalho_hamburger");
    let opcoes = document.querySelector(".cabecalho_mobile");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let sair = document.getElementById("sairMenu");
    
    opcoes.classList.remove("invisivel");
    opcoes.classList.add("ativar");

    footer.classList.add("invisivel");
    main.classList.add("invisivel");

    sair.addEventListener("click", function(){
        botao.classList.add("visivel")
        botao.classList.remove("invisivel")

        opcoes.classList.remove("ativar")
        opcoes.classList.add("invisivel")

        footer.classList.remove("invisivel")
        main.classList.remove("invisivel")
    })
}


function get(url) {
    let http = new XMLHttpRequest();
    http.open("GET", url, false);
    http.send(null);
    return http.responseText;
}
