function obtenerNombre()
{
    return "Gian";
}
function obtenerApellido()
{
    return "Facio";
}
function obtenerNombreCompleto()
{
    const nombre = obtenerNombre();
    const apellido = obtenerApellido();
    return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();
console.log ("Nombre Completo: ", nombreCompleto);
