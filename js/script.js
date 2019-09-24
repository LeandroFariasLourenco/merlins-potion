window.onload = function () {
    exibirPopUp();


    function exibirPopUp() {
        let pocoes = document.getElementsByClassName("vitrine_container_pocao");
        let sobreposicao = document.querySelector("#sobreposicao");
        let sair = document.querySelector("#sair");

        let titulo = document.getElementById("titulo_pocao")
        let efeito = document.getElementById("efeitos_pocao");
        let preco = document.getElementById("preco_pocao");
        let imagem = document.getElementById("imagem_pocao");

        let ingredientes = document.querySelector(".ingredientes_pocao");
        let conteudoListas = "";
        let tamanhoIngredientes = null;

        //Pegando JSON das poções
        let json = JSON.parse(get("https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json"));

        for (let i = 0; i < pocoes.length; i++) {
            pocoes[i].addEventListener("click", function () {
                sobreposicao.classList.remove("invisivel");
                sobreposicao.classList.add("visivel");

                titulo.innerHTML = json.potions[i + 1].name;
                efeito.innerHTML = json.potions[i + 1].effect;
                preco.innerHTML = "$" + json.potions[i + 1].price;
                imagem.src = "images/products/" + json.potions[i + 1].image;

                tamanhoIngredientes = json.potions[i + 1].ingredients.length;
                for (let j = 0; j < tamanhoIngredientes; j++) {
                    conteudoListas += "<li>" + json.potions[i + 1].ingredients[j] + "</li>";
                }
                ingredientes.innerHTML = conteudoListas;
                conteudoListas = "";

                sair.addEventListener("click", function () {
                    sobreposicao.classList.remove("visivel");
                    sobreposicao.classList.add("invisivel");
                })
            })
        }
    }

    function get(url) {
        var http = new XMLHttpRequest();
        http.open("GET", url, false);
        http.send(null);
        return http.responseText;
    }
}