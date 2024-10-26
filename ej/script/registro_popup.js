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

const restricciones_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*()_\-+=]).{12,}$/;

function validar_contraseña() {
    const contraseña = document.getElementById("contraseña_usuario");
    const mnsj_error = document.getElementById("mensaje_de_error");

    contraseña.addEventListener("input", function() {
        validar_contenido(contraseña, mnsj_error);
    });
}

function validar_contenido(contraseña, mnsj_error) {
    if (!restricciones_contraseña.test(contraseña.value)) {
        mnsj_error.style.display = "block";
    } else {
        mnsj_error.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", validar_contraseña);