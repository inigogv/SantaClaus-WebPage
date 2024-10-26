let puntos = 0;
let tiempo_restante = 90;
let intervalo_tiempo;
let intervalo_movimiento;

function mostrar_iniciar_juego_click_the_circle() {
    document.getElementById("img_juego").style.display = "none";
    document.getElementById("juego_click_the_circle").style.display = "block";
    document.getElementById("boton_empezar_juego_click_the_circle").style.display = "block";
    document.getElementById("boton_salir").style.display = "none";
    document.getElementById("mensaje_fin").style.display = "none";
    
    document.getElementById("puntos").innerText = "0";
    document.getElementById("tiempo").innerText = "90";

    puntos = 0;
    tiempo_restante = 90;
}

function iniciar_juego_click_the_circle() {
    document.getElementById("boton_empezar_juego_click_the_circle").style.display = "none";
    document.getElementById("boton_salir").style.display = "inline";

    puntos = 0;
    tiempo_restante = 90;
    document.getElementById("puntos").innerText = puntos;
    document.getElementById("tiempo").innerText = tiempo_restante;

    mover_circulo();
    intervalo_tiempo = setInterval(reducir_tiempo, 1000);
    intervalo_movimiento = setInterval(mover_circulo, 1200);
}

function mover_circulo() {
    let tablero = document.getElementById("tablero_juego");
    let circulo = document.getElementById("circulo");
    if (!circulo) {
        circulo = document.createElement("div");
        circulo.id = "circulo";
        circulo.style.position = "absolute";
        circulo.style.width = "30px";
        circulo.style.height = "30px";
        circulo.style.borderRadius = "50%";
        circulo.style.backgroundColor = "#daa520";
        circulo.style.cursor = "pointer";
        circulo.addEventListener('click', sumar_punto);
        tablero.appendChild(circulo);
    }

    let maxX = tablero.offsetWidth - circulo.offsetWidth;
    let maxY = tablero.offsetHeight - circulo.offsetHeight;
    let posX = Math.floor(Math.random() * maxX);
    let posY = Math.floor(Math.random() * maxY);

    circulo.style.left = `${posX}px`;
    circulo.style.top = `${posY}px`;
}

function sumar_punto() {
    puntos++;
    document.getElementById("puntos").innerText = puntos;
}

function reducir_tiempo() {
    tiempo_restante--;
    document.getElementById("tiempo").innerText = tiempo_restante;

    if (tiempo_restante == 0) {
        salir_del_juego();
    }
}

function salir_del_juego() {
    clearInterval(intervalo_tiempo);
    clearInterval(intervalo_movimiento);
    mostrar_fin_juego();

    document.getElementById("mensaje_fin").style.display = "block";
    document.getElementById("boton_salir").style.display = "none";
    document.getElementById("img_juego").style.display = "block";
    document.getElementById("juego_click_the_circle").style.display = "none";
}

function mostrar_fin_juego() {
    document.getElementById("mensaje_fin").style.display = "block";
    document.getElementById("boton_salir").style.display = "none";
}

function reiniciar_juego() {
    mostrar_iniciar_juego_click_the_circle();
    iniciar_juego_click_the_circle();
}

function mostrar_imagen(ruta_imagen) {
    clearInterval(intervalo_tiempo);
    clearInterval(intervalo_movimiento);

    document.getElementById('juego_click_the_circle').style.display = "none";
    document.getElementById('img_juego').style.display = "block";
    document.getElementById('img_juego').src = ruta_imagen;
}
