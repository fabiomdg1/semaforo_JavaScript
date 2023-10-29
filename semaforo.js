const img = document.getElementById("img");
const botoes = document.getElementById("botoes");

/* ------Modo 1-----------
const semaforo = (event) =>{
    if(event.target.id == "btnVermelho"){
        ligarSemaforo.luzVermelha();
    } else if(event.target.id == "btnAmarelo"){
        ligarSemaforo.luzAmarela();
    } else if(event.target.id == "btnVerde"){
        ligarSemaforo.luzVerde();
    }
    
}*/

// Modo 2 - Função chamada de callback
const semaforo = (event) => {
    //console.log(event.target.id);
    ligarSemaforo[event.target.id]();
}

// Objeto ligarSemaforo
const ligarSemaforo = {
    "btnVermelho" : () => img.src = "./img/semaforoVermelho.png",
    "btnAmarelo" : () => img.src = "./img/semaforoAmarelo.png",
    "btnVerde" : () => img.src = "./img/semaforoVerde.png"
}


botoes.addEventListener("click", semaforo);





// const btnVermelho = document.getElementById("btnVermelho");
// const btnAmarelo = document.getElementById("btnAmarelo");
// const btnVerde = document.getElementById("btnVerde");
// const btnAutomatico = document.getElementById("btnAutomatico");





