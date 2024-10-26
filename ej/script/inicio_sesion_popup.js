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
        alert("Inicio de sesión correcto");
        document.getElementById("inicio_sesion_popup").style.display = "none";
        perfil_barra_navegacion();
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

function perfil_barra_navegacion() {
    document.getElementById("botones_registro_inicio").style.display = "none";
    const perfil_barra_navegacion = document.getElementById("mi_perfil");
    perfil_barra_navegacion.style.display = "flex";

    const foto_perfil = `
            <div class="foto_perfil">
                <img class= "imagen_perfil" src="images/foto_perfil.png" alt="Foto de perfil" onclick="menu_desplegable()">
            </div>
        `;
    perfil_barra_navegacion.innerHTML += foto_perfil;
}

function menu_desplegable() {
    const menu = document.getElementById("menu_desplegable");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
    if (menu.innerHTML == "") {
        const menu_desplegable = `
                <ul class="opciones_menu">
                    <li class="datos_perfil">Mi perfil</li>
                    <li class="cartas_perfil">Mis cartas</li>
                    <li class="cerrar_perfil" onclick="cerrar_sesion()">Cerrar sesión</li>
                </ul>
    `;
    menu.innerHTML += menu_desplegable;
    }
}