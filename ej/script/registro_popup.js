function registro() {
    document.getElementById("registro_popup").style.display = "flex";
}

function cancelar_registro() {
    if (confirm("¿Estás seguro de que deseas cancelar el registro?")) {
        document.getElementById("registro_popup").style.display = "none";
    }
}

function limpiar_registro() {
    if (confirm("¿Estás seguro de que deseas limpiar todos los campos?")) {
        document.getElementById("formulario_popup").reset();
    }
}

function formulario_hijos() {
    const num_hijos = document.getElementById('num_hijos').value;
    const  datos_hijos= document.getElementById('formulario_hijos');
    datos_hijos.innerHTML = '';

    for (let i = 1; i <= num_hijos; i++) {
        const campo = `
            <div class="hijo">
                <p class="titulo_hijo">Hijo/hija ${i}</p>
                <div class="nom_edad_hijo">
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
    const contraseña = document.getElementById("contraseña_usuario");
    const repetirContraseña = document.getElementById("repetir_contraseña_usuario");
    const mnsj_error = document.getElementById("mensaje_de_error");
    const mnsj_error_coincidencia = document.getElementById("mensaje_de_error_coincidencia");

    contraseña.addEventListener("blur", function() {
        validar_contenido(contraseña, mnsj_error);
    });

    repetirContraseña.addEventListener("blur", function() {
        comprobar_coincidencia(contraseña, repetirContraseña, mnsj_error_coincidencia);
    
    });

    contraseña.addEventListener("input", function() {
        mnsj_error.style.display = "none";
        mnsj_error_coincidencia.style.display = "none";
    });

    repetirContraseña.addEventListener("input", function() {
        mnsj_error_coincidencia.style.display = "none";
    });
    
}

function validar_contenido(contraseña, mnsj_error) {
    if (!restricciones_contraseña.test(contraseña.value)) {
        mnsj_error.style.display = "block";
    } else {
        mnsj_error.style.display = "none";
    }
}

function comprobar_coincidencia(contraseña, repetirContraseña, mnsj_error_coincidencia) {
    if (contraseña.value !== repetirContraseña.value) {
        mnsj_error_coincidencia.style.display = "block";
    } else {
        mnsj_error_coincidencia.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", validar_contraseña);