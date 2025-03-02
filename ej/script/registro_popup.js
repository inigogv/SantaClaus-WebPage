function registro() {
    document.getElementById("registro_popup").style.display = "flex";
}

function formulario_hijos() {
    const num_hijos = document.getElementById('num_hijos').value;
    const datos_hijos= document.getElementById('formulario_hijos');
    datos_hijos.innerHTML = '';

    for (let i = 1; i <= num_hijos; i++) {
        const campo = `
            <div class="hijo">
                <p class="titulo_hijo">Hijo/hija ${i}</p>
                <div class="cajas_agrupadas">
                    <div class="caja_label_popup">
                        <label class= "etiqueta_cajas_popup" for="nombre_hijo_${i}">Nombre</label>
                        <input class = "caja_escribir" type="text" id="nombre_hijo_${i}" minlength="3" required placeholder="Nombre">
                    </div>
                    <div class="caja_label_popup">
                        <label class= "etiqueta_cajas_popup" for="edad_hijo_${i}">Edad</label>
                        <input class = "caja_escribir" type="number" id="edad_hijo_${i}" min="0" required placeholder="Edad">
                    </div>
                </div>
                <div class="caja_label_popup">
                    <label class= "etiqueta_cajas_popup" for="juguetes_hijo_${i}">Juguetes favoritos</label>
                    <input class = "caja_escribir" type="text" id="juguetes_hijo_${i}" placeholder="Juguetes favoritos">
                </div>
            </div>
        `;
        datos_hijos.innerHTML += campo;
    }
}

const restricciones_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*()_\-+=]).{12,}$/;

function validar_contraseña() {
    const contraseña_usuario = document.getElementById("contraseña_usuario");
    const repetir_contraseña = document.getElementById("repetir_contraseña_usuario");
    const mnsj_error = document.getElementById("mensaje_de_error");
    const mnsj_error_coincidencia = document.getElementById("mensaje_de_error_coincidencia");

    contraseña_usuario.addEventListener("blur", function() {
        validar_contenido(contraseña_usuario, mnsj_error);
    });

    repetir_contraseña.addEventListener("blur", function() {
        comprobar_coincidencia(contraseña_usuario, repetir_contraseña, mnsj_error_coincidencia);
    
    });

    contraseña_usuario.addEventListener("input", function() {
        mnsj_error.style.display = "none";
        mnsj_error_coincidencia.style.display = "none";
    });

    repetir_contraseña.addEventListener("input", function() {
        mnsj_error_coincidencia.style.display = "none";
    });
    
}

function validar_contenido(contraseña_usuario, mnsj_error) {
    if (!restricciones_contraseña.test(contraseña_usuario.value)) {
        mnsj_error.style.display = "block";
    } else {
        mnsj_error.style.display = "none";
    }
}

function comprobar_coincidencia(contraseña_usuario, repetir_contraseña, mnsj_error_coincidencia) {
    if (contraseña_usuario.value !== repetir_contraseña.value) {
        mnsj_error_coincidencia.style.display = "block";
    } else {
        mnsj_error_coincidencia.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", validar_contraseña);

function cancelar_registro() {
    if (confirm("¿Estás seguro de que deseas cancelar el registro?")) {
        document.getElementById("registro_popup").style.display = "none";
    }
}

function limpiar_registro() {
    if (confirm("¿Estás seguro de que deseas limpiar todos los campos?")) {
        document.getElementById("formulario_registro").reset();
        document.getElementById("formulario_hijos").innerHTML= "";
    }
}

function validar_registro() {
    const nombre_usuario = document.getElementById("nombre_usuario");
    const email_usuario = document.getElementById("email_usuario");
    const contraseña_usuario = document.getElementById("contraseña_usuario");
    const repetir_contraseña = document.getElementById("repetir_contraseña_usuario");
    const ciudad_usuario = document.getElementById("ciudad_usuario");
    const pais_usuario = document.getElementById("pais_usuario");
    const num_hijos = document.getElementById("num_hijos");

    const mnsj_error = document.getElementById("mensaje_de_error");
    const mnsj_error_coincidencia = document.getElementById("mensaje_de_error_coincidencia");
    
    let se_puede_aceptar = true;

    if (nombre_usuario.value.length < 3) {
        se_puede_aceptar = false;
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
    }

    if (!email_usuario.checkValidity()) {
        se_puede_aceptar = false;
        alert("Por favor, introduzca un email válido.");
    }

    validar_contenido(contraseña_usuario, mnsj_error);
    if (mnsj_error.style.display === "block") {
        se_puede_aceptar = false;
        alert("Introduzca una contraseña válida.");
    }

    comprobar_coincidencia(contraseña_usuario, repetir_contraseña, mnsj_error_coincidencia);
    if (mnsj_error_coincidencia.style.display === "block") {
        se_puede_aceptar = false;
    }

    if (ciudad_usuario.value.length < 3) {
        se_puede_aceptar = false;
        alert("La ciudad debe tener al menos 3 caracteres.");
    }

    if (pais_usuario.value.length < 3) {
        se_puede_aceptar = false;
        alert("El país debe tener al menos 3 caracteres.");
    }

    if (num_hijos.value < 0 || num_hijos.value === "") {
        se_puede_aceptar = false;
        alert("El número de hijos debe der como mínimo 0.");
    }

    if (num_hijos.value > 0) {
        for (let i = 1; i <= num_hijos.value; i++) {
            const nombre_hijo = document.getElementById(`nombre_hijo_${i}`).value;
            const edad_hijo = document.getElementById(`edad_hijo_${i}`).value;
            const juguetes_hijo = document.getElementById(`juguetes_hijo_${i}`).value;

            if (!nombre_hijo || !edad_hijo || juguetes_hijo.trim() === "") {
                se_puede_aceptar = false;
                alert(`Por favor, complete todos los campos del hijo/hija ${i}.`);
                break;
            }
        }
    }

    if (se_puede_aceptar) {
        guardar_usuario_localstorage();
    }
}

function guardar_usuario_localstorage() {
    const nombre_usuario = document.getElementById('nombre_usuario').value;
    const contraseña_usuario = document.getElementById('contraseña_usuario').value;
    const email_usuario = document.getElementById('email_usuario').value;
    const ciudad_usuario = document.getElementById('ciudad_usuario').value;
    const pais_usuario = document.getElementById('pais_usuario').value;
    const genero = document.getElementById('genero').value;
    const num_hijos = document.getElementById('num_hijos').value;

    const usuario = {
        nombre: nombre_usuario,
        contraseña: contraseña_usuario,
        email: email_usuario,
        ciudad: ciudad_usuario,
        pais: pais_usuario,
        genero: genero,
        num_hijos: num_hijos,
        hijos: [],
        cartas: [],
    };

    for (let i = 1; i <= num_hijos; i++) {
        const nombre_hijo = document.getElementById(`nombre_hijo_${i}`).value;
        const edad_hijo = document.getElementById(`edad_hijo_${i}`).value;
        const juguetes_hijo = document.getElementById(`juguetes_hijo_${i}`).value;

        usuario.hijos.push({
            nombre: nombre_hijo,
            edad: edad_hijo,
            juguetes: juguetes_hijo
        });
    }

    localStorage.setItem(nombre_usuario, JSON.stringify(usuario));
    alert("Usuario registrado con éxito.");
    document.getElementById("formulario_registro").reset();
    document.getElementById("formulario_hijos").innerHTML = "";
    document.getElementById("registro_popup").style.display = "none";
}
