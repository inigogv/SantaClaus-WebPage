let puntos_adivina = 0;
let intentos_restantes = 10;
let numero_secreto;

function mostrar_iniciar_juego_adivina_el_numero() {
    document.getElementById("img_juego").style.display = "none";
    document.getElementById("juego_click_the_circle").style.display = "none";
    document.getElementById("juego_adivina_el_numero").style.display = "block";
    document.getElementById("boton_empezar_adivina").style.display = "block";
    document.getElementById("boton_salir_adivina").style.display = "none";
    document.getElementById("mensaje_fin_adivina").style.display = "none";
    document.getElementById("tablero_juego_divina").style.display = "block";
}
