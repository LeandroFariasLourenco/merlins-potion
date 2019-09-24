window.onload = function(){

    var pocoes = document.getElementsByClassName("vitrine_container_pocao");
    var sobreposicao = document.querySelector("#sobreposicao");
    var sair = document.querySelector("#sair");
   
    
    for(let i = 0; i < pocoes.length; i++){
        pocoes[i].addEventListener("click",function(){
            sobreposicao.classList.remove("invisivel");
            sobreposicao.classList.add("visivel");
            sair.addEventListener("click" , function(){
                sobreposicao.classList.remove("visivel");
                sobreposicao.classList.add("invisivel");
            })
        })
    }

}