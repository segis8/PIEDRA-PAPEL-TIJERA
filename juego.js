//Esta sera la consola con la que jugare
let puntosUsuario = 0
let puntosComputadora= 0

let instruciones= document.querySelector("#instruciones");
let contenedorPuntosUsuario= document.querySelector("#puntos-usuario");
let contenedorPuntosComputadora= document.querySelector("#puntos-computadora");
let mensaje= document.querySelector("#mensaje");
let contenedorGanaPunto= document.querySelector("#gana-punto");
let eligeTuPokemon= document.querySelector("#elige-tu-pokemon");

let contenedorElecionUsuario= document.querySelector("#elecion-usuario");
let contenedorElecionComputadora= document.querySelector("#elecion-computadora");

let botonesPokemons= document.querySelectorAll(".pokemon");
botonesPokemons.forEach(boton => {
    boton.addEventListener("click", inciarTurno);
});
function inciarTurno(e) {
    let elecionPC= Math.floor(Math.random()* 3);
    let elecionUsuario = e.currentTarget.id;
    // agua => a
    // fuego => 1
    // planta=> 2

    if (elecionPC === 0) {
        elecionPC = "agua💧";
    } else if (elecionPC ===1) {
        elecionPC = "fuego🔥"
    } else if (elecionPC === 2) {
        elecionPC = "planta🍃"
    }
    
    //fuego vence planta
    //planta vence agua
    //agua vence fuego
    //iguales es empate

    if(
        (elecionUsuario === "agua💧" && elecionPC === "fuego🔥") ||
        (elecionUsuario === "fuego🔥" && elecionPC === "planta🍃") ||
        (elecionUsuario === "planta🍃" && elecionPC === "agua💧") 
    ) {
        ganaUsuario();
    } else if (
        (elecionPC === "agua💧" && elecionUsuario === "fuego🔥") ||
        (elecionPC === "fuego🔥" && elecionUsuario === "planta🍃") ||
        (elecionPC === "planta🍃" && elecionUsuario === "agua💧")
    ) {
        ganaPc();
    } else {
        empate();
    }
    mensaje.classList.remove("disabled");
    contenedorElecionUsuario.innerHTML = elecionUsuario;
    contenedorElecionComputadora.innerHTML = elecionPC;

        if (puntosUsuario === 5 || puntosComputadora === 5){
            
            if (puntosUsuario === 5) {
                instruciones.innerHTML = "🎉 !GANASTE EL JUEGO!  🎉"
            }
            if (puntosComputadora === 5) {
                instruciones.innerHTML = "😢 !HAS PERDIDO! 😢"
            }

            eligeTuPokemon.classList.add("disabled");
            reiniciar.classList.remove("disabled");
            reiniciar.addEventListener("click",reiniciarJuego);
        }

} 

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerHTML = puntosUsuario;
    contenedorGanaPunto.innerHTML = "👍 !GANASTE UN COMBATE! 👍"
}
function ganaPc() {
    puntosComputadora++;
    contenedorPuntosComputadora.innerHTML = puntosComputadora;
    contenedorGanaPunto.innerHTML = "😜 !HAS PALMADO!  😜"
}
function empate() {
    contenedorGanaPunto.innerHTML = "🤔  !EMPATE!  🤔"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    eligeTuPokemon.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosComputadora = 0;

    contenedorPuntosUsuario.innerHTML = puntosUsuario;
    contenedorPuntosComputadora.innerHTML = puntosComputadora;

    instruciones.innerHTML = "GANA EL QUE CONSIGA 5 COMBATES"
}