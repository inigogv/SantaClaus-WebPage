function registro() {
    document.getElementById("registro_popup").style.display = "flex";
}

function cancelar_registro() {
    if (confirm('¿Estás seguro de que deseas cancelar el registro?')) {
        document.getElementById('registro_popup').style.display = 'none';
    }
}

function limpiar_registro() {
    if (confirm('¿Estás seguro de que deseas limpiar todos los campos?')) {
        document.getElementById('formulario_popup').reset();
    }
}