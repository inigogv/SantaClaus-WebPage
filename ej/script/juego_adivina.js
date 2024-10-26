let intentos_restantes = 10;
let numero_secreto;

function mostrar_iniciar_juego_adivina_el_numero() {
    document.getElementById("img_juego").style.display = "none"; 
    document.getElementById("juego_click_the_circle").style.display = "none";
    document.getElementById("juego_adivina_el_numero").style.display = "block";
    document.getElementById("boton_empezar_adivina").style.display = "block";
    document.getElementById("boton_salir_adivina").style.display = "none";
    document.getElementById("mensaje_fin_adivina").style.display = "none";
    document.getElementById("tablero_juego_adivina").style.display = "none";

    document.querySelector(".datos_juego_adivina").style.display = "none";
}

function iniciar_juego_adivina_el_numero() {
    numero_secreto = Math.floor(Math.random() * 100) + 1;
    intentos_restantes = 10;

    document.getElementById("boton_empezar_adivina").style.display = "none";
    document.getElementById("boton_salir_adivina").style.display = "inline";
    document.getElementById("tablero_juego_adivina").style.display = "block";
    document.querySelector(".datos_juego_adivina").style.display = "flex";
    document.getElementById("intentos_adivina").innerText = intentos_restantes;

}

function adivinar_numero() {
    let numero_adivinado = parseInt(document.getElementById("numero_adivinado").value);

    if (numero_adivinado === numero_secreto) {
        document.getElementById("numero_secreto_final").innerText = numero_secreto;
        document.getElementById("boton_adivinar").disabled = true;
        salir_del_juego_adivina_exitosamente();
    } else {
        intentos_restantes--;
        document.getElementById("intentos_adivina").innerText = intentos_restantes;

        if (intentos_restantes === 0) {
            document.getElementById("numero_secreto_final").innerText = numero_secreto;
            document.getElementById("boton_adivinar").disabled = true;
            salir_del_juego_adivina();
        } else {
            alert(numero_adivinado < numero_secreto ? "Demasiado bajo!" : "Demasiado alto!");
        }
    }
    document.getElementById("numero_adivinado").value = "";
    validar_numero();
}

function salir_del_juego_adivina_exitosamente() {
    document.getElementById("mensaje_fin_adivina_enhorabuena").style.display = "block";
    document.getElementById("boton_salir_circle").style.display = "none";
    document.getElementById("tablero_juego_adivina").style.display = "none";
}

function salir_del_juego_adivina() {
    document.getElementById("numero_secreto_final").innerText = numero_secreto; 
    document.getElementById("mensaje_fin_adivina").style.display = "block";
    document.getElementById("boton_salir_circle").style.display = "none";
    document.getElementById("tablero_juego_adivina").style.display = "none";
}

function reiniciar_juego_adivina() {
    mostrar_iniciar_juego_adivina_el_numero();
    iniciar_juego_adivina_el_numero();
}

function mostrar_imagen(ruta_imagen) {
    document.getElementById("juego_adivina_el_numero").style.display = "none";
    document.getElementById("img_juego").style.display = "block";
    document.getElementById("img_juego").src = ruta_imagen;
}