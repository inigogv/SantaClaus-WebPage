let nochebuena = null;
let actualizar_tiempo_restante = null;

const contador = ()=>{
    // Fecha objetivo: 24 de diciembre a las 23:59
    nochebuena = new Date("December 24, 2024 23:59:00").getTime();

    // Actualizar el contador cada segundo (1000 ms)
    actualizar_tiempo_restante = setInterval(actualizar_tiempo,1000);
};

const actualizar_tiempo = ()=>{
    const tiempo_restante = nochebuena - Date.now();

    // Si la cuenta regresiva ha terminado, detener el intervalo
    if (tiempo_restante <= 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "¡Feliz Navidad!";
        return;
    }

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(tiempo_restante / (1000 * 60 * 60 * 24)); // Milisegundos en un día
    const horas = Math.floor((tiempo_restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Milisegundos en una hora
    const minutos = Math.floor((tiempo_restante % (1000 * 60 * 60)) / (1000 * 60)); // Milisegundos en un minuto
    const segundos = Math.floor((tiempo_restante % (1000 * 60)) / 1000); // Milisegundos en un segundo

    // Mostrar el tiempo restante en el formato adecuado, sin el valor inicial estático
    document.getElementById("contador").innerHTML = `${dias} días ${horas}h ${minutos}min ${segundos}s`;

};

// Iniciar el contador cuando se cargue la página
window.onload = contador;