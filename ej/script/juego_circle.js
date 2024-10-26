let puntos = 0;
let tiempoRestante = 90;
let intervaloTiempo;
let intervaloMovimiento;

function iniciarJuegoClickTheCircle() {
    document.getElementById('img_juego').style.display = 'none';
    document.getElementById('juego_click_the_circle').style.display = 'block';

    puntos = 0;
    tiempoRestante = 90;
    document.getElementById('puntos').innerText = puntos;
    document.getElementById('tiempo').innerText = tiempoRestante;

    let tablero = document.getElementById('tablero_juego');
    let circulo = document.getElementById('circulo');
    if (!circulo) {
        circulo = document.createElement('div');
        circulo.id = 'circulo';
        circulo.style.position = 'absolute';
        circulo.style.width = '30px';
        circulo.style.height = '30px';
        circulo.style.borderRadius = '50%';
        circulo.style.backgroundColor = '#daa520';
        circulo.style.cursor = 'pointer';
        circulo.addEventListener('click', sumarPunto);
        tablero.appendChild(circulo);
    }

    moverCirculo();
    intervaloTiempo = setInterval(reducirTiempo, 1000);
    intervaloMovimiento = setInterval(moverCirculo, 1200);
}

function moverCirculo() {
    let tablero = document.getElementById('tablero_juego');
    let circulo = document.getElementById('circulo');
    let maxX = tablero.offsetWidth - circulo.offsetWidth;
    let maxY = tablero.offsetHeight - circulo.offsetHeight;
    let posX = Math.floor(Math.random() * maxX);
    let posY = Math.floor(Math.random() * maxY);

    circulo.style.left = `${posX}px`;
    circulo.style.top = `${posY}px`;
}

function sumarPunto() {
    puntos++;
    document.getElementById('puntos').innerText = puntos;
}

function reducirTiempo() {
    tiempoRestante--;
    document.getElementById('tiempo').innerText = tiempoRestante;

    if (tiempoRestante <= 0) {
        clearInterval(intervaloTiempo);
        clearInterval(intervaloMovimiento);
        alert(`¡Tiempo agotado! Obtuviste ${puntos} puntos.`);
        document.getElementById('juego_click_the_circle').style.display = 'none';
        document.getElementById('img_juego').style.display = 'block';
    }
}

function mostrarImagen(rutaImagen) {
    document.getElementById('juego_click_the_circle').style.display = 'none';
    document.getElementById('img_juego').style.display = 'block';
    document.getElementById('img_juego').src = rutaImagen;
}
