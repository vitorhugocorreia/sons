function tocaSomPom(){
    document.querySelector("#som_tecla_pom").play();
    }
    document.querySelector(".tecla_pom").onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector("#som_tecla_clap").play();
    }
    document.querySelector(".tecla_clap").onclick = tocaSomClap;

const listaDeTeclas = document.querySelectorAll(".tecla");    

listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;
// Estrutura de repetição - Enquanto
while() {
}