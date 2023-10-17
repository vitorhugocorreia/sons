//criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector("#som_tecla_pom").play();
    }
//chamando/invocando a função tocaSomPom pelo clique do botão pom
    document.querySelector(".tecla_pom").onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll(".tecla");    
listaDeTeclas[0].onclick = tocaSomPom;