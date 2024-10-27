function iniciar_sesion() {
    document.getElementById("inicio_sesion_popup").style.display = "flex";
}

function cancelar_inicio() {
    if (confirm("¿Estás seguro de que deseas cancelar el inicio de sesión?")) {
        document.getElementById("inicio_sesion_popup").style.display = "none";
    }
}

function entrar_cuenta() {
    const nombre_usuario = document.getElementById("nombre_inicio_sesion").value;
    const contraseña_usuario = document.getElementById("contraseña_inicio_sesion").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (nombre_usuario === usuario.nombre && contraseña_usuario === usuario.contraseña) {
        usuario.activo = true;
        alert("Inicio de sesión correcto");
        localStorage.setItem("usuario", JSON.stringify(usuario));
        document.getElementById("inicio_sesion_popup").style.display = "none";
        perfil_barra_navegacion();
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

function perfil_barra_navegacion() {
    document.getElementById("botones_registro_inicio").style.display = "none";
    perfil_barra_navegacion = document.getElementById("mi_perfil").style.display = "flex";
}

function menu_desplegable() {
    const menu = document.getElementById("menu_desplegable");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function ver_mis_datos() {
    document.getElementById("mis_datos").style.display = "flex";
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if(usuario) {
        document.getElementById("mi_usuario").value = usuario.nombre;
        document.getElementById("mi_email").value = usuario.email;
        document.getElementById("mi_contraseña").value = usuario.contraseña;
        document.getElementById("mi_repetir_contraseña").value = usuario.contraseña;
        document.getElementById("mi_ciudad").value = usuario.ciudad;
        document.getElementById("mi_pais").value = usuario.pais;
        document.getElementById("mi_genero").value = usuario.genero;
        document.getElementById("mis_hijos").value = usuario.num_hijos;
    }
}

function guardar_datos() {
    const nombre_usuario = document.getElementById("nombre_usuario").value;
    const email_usuario = document.getElementById("email_usuario").value;
    const contraseña_usuario = document.getElementById("contraseña_usuario").value;
    const ciudad_usuario = document.getElementById("ciudad_usuario").value;
    const pais_usuario = document.getElementById("pais_usuario").value;
    const genero = document.getElementById("genero").value;
    const num_hijos = document.getElementById("num_hijos").value;

    const usuario = {
        nombre: nombre_usuario,
        email: email_usuario,
        contraseña: contraseña_usuario,
        ciudad: ciudad_usuario,
        pais: pais_usuario,
        genero: genero,
        num_hijos: num_hijos
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Datos guardados correctamente");
    document.getElementById("mis_datos").style.display = "none";
}

function cerrar_mis_datos() {
    document.getElementById("mis_datos").style.display = "none";
}
/*
function ver_mis_cartas() {
    popup_cartas = document.getElementById("mis_cartas")
    cartas_usuario = JSON.parse(localStorage.getItem("cartas_usuario")) || [];

    popup_cartas.innerHTML = cartas_usuario.length > 0 
    ? cartas_usuario.map((carta,index) => generar_carta(carta, index)).join(""): 
    "<p>No has enviado ninguna carta</p>";

    document.getElementById("mis_cartas").style.display = "block";
}

function generar_carta(carta, index) {
    return `
        <div class="box" draggable="true" ondragstart="drag(event, ${index})" ondrop="drop(event, ${index})" ondragover="allowDrop(event)">
                <div class="datos_box">
                    <img class="foto_carta" src="${carta.imagen}" alt="Foto ${carta.nombre}">
                    <div class="datos">
                        <p>${carta.nombre}</p>
                        <p class="lugar_residencia">${carta.lugar}</p>
                    </div>
                </div>
                <div class="texto_carta">
                    <p>${carta.mensaje}</p>
                </div>
                <button onclick="eliminarCarta(${index})" class="eliminar_carta">Eliminar</button>
            </div>
        `;
}
*/

function enviar_carta() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario.activo === false) {
        alert("Debes iniciar sesión para enviar una carta");
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const ciudad = document.getElementById("ciudad").value;
    const pais = document.getElementById("pais").value;
    const carta = document.getElementById("carta").value;

    if (email !== usuario.email) {
        alert("El email no coincide con el de tu cuenta");
        return;
    }

    const carta_usuario = {
        nombre: nombre,
        email: email,
        ciudad: ciudad,
        pais: pais,
        carta: carta
    };

    usuario.cartas.push(carta_usuario);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Carta enviada correctamente");
    document.getElementById("formulario_mi_carta").reset();

}

function cerrar_sesion() {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        document.getElementById("botones_registro_inicio").style.display = "flex";
        document.getElementById("mi_perfil").style.display = "none";
        document.getElementById("menu_desplegable").style.display = "none";
        document.getElementById("mis_datos").style.display = "none";
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        usuario.activo = false;
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }
}

