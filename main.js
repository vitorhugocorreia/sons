//criando/declarando a função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    }
//criando referência constante listaDeTeclas com buscando todos os itens pela classe .tecla 
const listaDeTeclas = document.querySelectorAll(".tecla");    
//invocando a função tocaSomPom a partir do item "0" , 1º botão
listaDeTeclas[0].onclick = tocaSom;

//criando referência variável "contador" iniciando = 0
let contador = 0;

// Estrutura de repetição - Enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    
    contador = contador + 1;

}