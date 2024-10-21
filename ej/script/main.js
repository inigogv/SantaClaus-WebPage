const contador = () => {
    // Fecha objetivo: 24 de diciembre a las 23:59
    const fechaObjetivo = new Date('December 24, 2024 23:59:00').getTime();

    // Actualizar el contador cada segundo (1000 ms)
    const intervalo = setInterval(() => {
        const fechaActual = new Date().getTime();
        const diferencia = fechaObjetivo - fechaActual;

        // Si la cuenta regresiva ha terminado, detener el intervalo
        if (diferencia < 0) {
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "¡Feliz Navidad!";
            return;
        }

        // Calcular días, horas, minutos y segundos restantes
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Mostrar el tiempo restante en el formato adecuado, sin el valor inicial estático
        document.getElementById("contador").innerHTML = 
            `${dias} días ${horas}h ${minutos}min ${segundos}s`;

    }, 1000);
};

// Iniciar el contador cuando se cargue la página
window.onload = contador;