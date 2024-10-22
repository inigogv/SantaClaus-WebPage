let navidad = null;
let actualizar_tiempo_restante = null;

function contador(){
    navidad = new Date("December 24, 2024 23:59:00").getTime();
    actualizar_tiempo_restante = setInterval(actualizar_tiempo,1000);
};

function actualizar_tiempo(){
    const tiempo_restante = navidad - Date.now();

    if (tiempo_restante == 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "¡Feliz Navidad!";
        return;
    }

    const dias = Math.floor(tiempo_restante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempo_restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempo_restante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempo_restante % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias} días ${horas}h ${minutos}min ${segundos}s`;

};

window.onload = contador;