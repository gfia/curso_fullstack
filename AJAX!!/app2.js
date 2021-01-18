//Crea un objeto para obtener la lista en el html
const listaUsuarios = document.getElementById("listaUsuarios"); 
//Crea un objeto para identificar el boton
const mandarUsuarios = document.getElementById("mandarUsuarios"); 
//Crea callback del xml request
function reqListener()
{
    //Crea variable que arma un objeto con la response del request
    const usuarios = JSON.parse(this.responseText);
    //Hace console.log para check
    console.log(usuarios);
    //Crea una variable que arma un array para listar los parametros recibidos
    const usuariosRender = usuarios
    //Mapea cada usuario y lo agrega a la lista ejecutando lo siguiente del arrow
    .map(usuario => `<li>${usuario.nombre}</li>`)//(considerar que el .nombre esta en el response ya que la URL devuelve un objeto con atributos nombre)
    //Como es un array, si lo inyectamos directamente aparecerían las comas divisorias, el .join("") las desaparece
    .join("");
    //Hace console.log para checkear la inyeccion
    console.log(usuariosRender);
    //Inyecta la lista de usuarios en el HTML
    listaUsuarios.innerHTML=usuariosRender;
}
//Crea request
const oReq = new XMLHttpRequest();
//Añade que el evento se ejecute en la carga de la pagina y recibe como callback la función creada anteriormente
oReq.addEventListener("load",reqListener);//TENER EN CUENTA QUE ESTE LISTENER QUEDA EN TODA LAS PETICIONES QUE SE GENEREN CON LA VARIABLE oReq
//Genera una petición get a la URL indicada (Eliminando las siguientes lineas hasta el send solo se cargaran los usuarios cuando se presione el boton)
oReq.open("GET","https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
//Envía la request a la URL
oReq.send();

//Crea función para enviar datos
function enviarDatos() {
    //Genera una petición post
    oReq.open(
        //Le pasa el metodo (POST)
        "POST",
        //Designa a que página
        "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
        //Le pasa true al tercer param porque es asincrono pero el default es true
        true
    );
    //Le agrega un header que todavia no entiendo
    oReq.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    //Y envía el siguiente texto
    oReq.send("nombre=noFun2");
    //Asigna un time out de 3 segundos
    setTimeout(refrescar, 3000);
  }

//Crea una función para refresh llamado en el time out superior
function refrescar() 
{
    //Genera una petición GET    
    oReq.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
    oReq.send();
}
//Cuando hace click activa la funcion enviarDatos
mandarUsuarios.onclick = enviarDatos;