const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
    }
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivol = new Date ("2025-10-05T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivol);

function calculaTempo(){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    
}
