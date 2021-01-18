/*function obtenerNombre()
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

setTimeout(()=>{
    console.log("Puto el setTimeOut");
},3000);*/
function sumar (_num1, _num2)
{
    const _sumar = _num1 + _num2;
    return _sumar;
}
function restar (_num1, _num2)
{
    const _restar = _num1 - _num2;
    return _restar;
}
function polyFunction(_num1, _num2, _callback)
{
    const _resultado = _callback(_num1, _num2); 
    return _resultado;
}
function calculo()
{
    const resultado = polyFunction(1,3,sumar);
    return resultado;
}

let miBoton = document.getElementById("botonHTML");

miBoton=addEventListener("click", ()=>{
    alert("calculo: " + calculo());
});