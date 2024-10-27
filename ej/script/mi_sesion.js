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

    const usuario = JSON.parse(localStorage.getItem(nombre_usuario));

    if (usuario && contraseña_usuario === usuario.contraseña) {
        alert("Inicio de sesión correcto");
        document.getElementById("inicio_sesion_popup").style.display = "none";
        localStorage.setItem("usuario_activo", JSON.stringify(nombre_usuario));
        perfil_barra_navegacion();
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

function perfil_barra_navegacion() {
    document.getElementById("botones_registro_inicio").style.display = "none";
    document.getElementById("mi_perfil").style.display = "flex";
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
    const usuario_activo = JSON.parse(localStorage.getItem("usuario_activo"));
    document.getElementById("mis_datos").style.display = "flex";
    const usuario = JSON.parse(localStorage.getItem(usuario_activo));
    if(usuario) {
        document.getElementById("mi_usuario").value = usuario.nombre;
        document.getElementById("mi_email").value = usuario.email;
        document.getElementById("mi_contraseña").value = usuario.contraseña;
        document.getElementById("mi_repetir_contraseña").value = usuario.contraseña;
        document.getElementById("mi_ciudad").value = usuario.ciudad;
        document.getElementById("mi_pais").value = usuario.pais;
        document.getElementById("mi_genero").value = usuario.genero;
        document.getElementById("mis_hijos").value = usuario.num_hijos;

        document.getElementById("formulario_hijos_ver_mis_datos").style.display = "block";

        const num_hijos = usuario.num_hijos;
        const formulario_hijos = document.getElementById("formulario_hijos_ver_mis_datos");
        formulario_hijos.innerHTML = ''; 

        for (let i = 1; i <= num_hijos; i++) {
            const campo = `
                <div class="hijo">
                    <p class="titulo_hijo">Hijo/hija ${i}</p>
                    <div class="cajas_agrupadas">
                        <div class="caja_label_popup">
                            <label class= "etiqueta_cajas_popup" for="nombre_hijo_${i}_mis_datos">Nombre</label>
                            <input class = "caja_escribir" type="text" id="nombre_hijo_${i}_mis_datos" minlength="3" required placeholder="Nombre">
                        </div>
                        <div class="caja_label_popup">
                            <label class= "etiqueta_cajas_popup" for="edad_hijo_${i}_mis_datos">Edad</label>
                            <input class = "caja_escribir" type="number" id="edad_hijo_${i}_mis_datos" min="0" required placeholder="Edad">
                        </div>
                    </div>
                    <div class="caja_label_popup">
                        <label class= "etiqueta_cajas_popup" for="juguetes_hijo_${i}_mis_datos">Juguetes favoritos</label>
                        <input class = "caja_escribir" type="text" id="juguetes_hijo_${i}_mis_datos" placeholder="Juguetes favoritos">
                    </div>
                </div>
                `;
            formulario_hijos.innerHTML += campo;
            document.getElementById(`nombre_hijo_${i}_mis_datos`).value = usuario.hijos[i-1].nombre;
            document.getElementById(`edad_hijo_${i}_mis_datos`).value = usuario.hijos[i-1].edad;
            document.getElementById(`juguetes_hijo_${i}_mis_datos`).value = usuario.hijos[i-1].juguetes;
            }
        }
}

function guardar_datos() {
    const usuario_activo = JSON.parse(localStorage.getItem("usuario_activo"));
    const nombre_usuario = document.getElementById("mi_usuario").value;
    const email_usuario = document.getElementById("mi_email").value;
    const contraseña_usuario = document.getElementById("mi_contraseña").value;
    const repetir_contraseña = document.getElementById("mi_repetir_contraseña").value;
    const ciudad_usuario = document.getElementById("mi_ciudad").value;
    const pais_usuario = document.getElementById("mi_pais").value;
    const genero = document.getElementById("mi_genero").value;
    const num_hijos = document.getElementById("mis_hijos").value;
    const cartas_usuario = JSON.parse(localStorage.getItem("usuario_activo")).cartas || [];
    const hijos = JSON.parse(localStorage.getItem("usuario_activo")).hijos || [];

    const usuario = {
        nombre: nombre_usuario,
        email: email_usuario,
        contraseña: contraseña_usuario,
        repetir_contraseña: repetir_contraseña,
        ciudad: ciudad_usuario,
        pais: pais_usuario,
        genero: genero,
        num_hijos: num_hijos,
        hijos: hijos,
        cartas: cartas_usuario
    }

    for (let i = 1; i <= num_hijos; i++) {
        const nombre_hijo = document.getElementById(`nombre_hijo_${i}_mis_datos`).value;
        const edad_hijo = document.getElementById(`edad_hijo_${i}_mis_datos`).value;
        const juguetes_hijo = document.getElementById(`juguetes_hijo_${i}_mis_datos`).value;

        usuario.hijos.push({
            nombre: nombre_hijo,
            edad: edad_hijo,
            juguetes: juguetes_hijo
        });
    }

    localStorage.setItem(usuario_activo, JSON.stringify(usuario));
    alert("Datos guardados correctamente");
    document.getElementById("mis_datos").style.display = "none";
}

function cerrar_mis_datos() {
    document.getElementById("mis_datos").style.display = "none";
}

function ver_mis_cartas() {
    const usuario_activo = JSON.parse(localStorage.getItem("usuario_activo"));
    const usuario = JSON.parse(localStorage.getItem(usuario_activo));
    
    const contenedor_cartas = document.getElementById("mis_cartas");
    contenedor_cartas.innerHTML = ''; 
    document.getElementById("ver_mis_cartas_popup").style.display = "flex";
    
    if (usuario && usuario.cartas && usuario.cartas.length > 0) {
        usuario.cartas.forEach((carta, index) => {
            const carta_HTML = `
                <li class="box_micarta"> 
                    <div class="datos_box">
                        <img class="foto_carta" src="images/foto_cartas.jpg" alt="Foto ${carta.nombre}">
                        <div class="datos">
                            <p>${carta.nombre}</p>
                            <p class="lugar_residencia">${carta.ciudad}, ${carta.pais}</p>
                        </div>
                    </div>
                    <div class="texto_carta">
                        <p>${carta.carta}</p>    
                    </div>
                    <div class= "botones_popup_borrar_carta">
                        <button class="botones_popup_estilo_borrar_carta" type="button" onclick="borrar_carta(${index})"> Borrar </button>
                    </div>
                </li>
            `;
            contenedor_cartas.innerHTML += carta_HTML;
        });
    } else {
        document.getElementById("mensaje_no_hay_cartas").style.display = "block";
    }
}

function borrar_carta(index) {
    const usuario_activo = JSON.parse(localStorage.getItem("usuario_activo"));
    const usuario = JSON.parse(localStorage.getItem(usuario_activo));
    
    usuario.cartas.splice(index, 1);
    localStorage.setItem(usuario_activo, JSON.stringify(usuario));

    ver_mis_cartas();
}

function cerrar_ver_mis_cartas() {
    document.getElementById("ver_mis_cartas_popup").style.display = "none";
}

function enviar_carta() {
    const usuario_activo = JSON.parse(localStorage.getItem("usuario_activo"));
    const usuario = JSON.parse(localStorage.getItem(usuario_activo));

    if (window.getComputedStyle(document.getElementById("mi_perfil")).display === "none") {
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
    localStorage.setItem(usuario_activo, JSON.stringify(usuario));
    alert("Carta enviada correctamente");
    document.getElementById("formulario_mi_carta").reset();

}

function cerrar_sesion() {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        document.getElementById("botones_registro_inicio").style.display = "flex";
        document.getElementById("mi_perfil").style.display = "none";
        document.getElementById("menu_desplegable").style.display = "none";
        document.getElementById("mis_datos").style.display = "none";

        document.getElementById("nombre_inicio_sesion").value = "";
        document.getElementById("contraseña_inicio_sesion").value = "";

        localStorage.removeItem("usuario_activo");
    }
}

