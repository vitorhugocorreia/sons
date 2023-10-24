//criando/declarando a função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    }
//chamando/invocando a função tocaSomPom pelo clique do botão pom
    document.querySelector(".tecla_pom").onclick = tocaSomPom;

//criando referência constante listaDeTeclas com buscando todos os itens pela classe .tecla 
const listaDeTeclas = document.querySelectorAll(".tecla");    
//invocando a função tocaSomPom a partir do item "0" , 1º botão
listaDeTeclas[0].onclick = tocaSomPom;

//criando referência variável "contador" iniciando = 0
let contador = 0;
// Estrutura de repetição - Enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    listaDeTeclas[contador].onclick = function () {

        tocaSom("#som_tecla_splash");
        };
    contador = contador + 1;

}