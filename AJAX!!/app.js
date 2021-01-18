//Crea un objeto para obtener la lista en el html
const listaUsuarios = document.getElementById("listaUsuarios"); 
//Crea callback del xml request
function reqListener(){
    //Crea variable que arma un objeto con la response del request
    const usuarios = JSON.parse(this.responseText);
    //Hace console.log para check
    console.log(usuarios);
    //Crea una variable que arma un array para listar los parametros recibidos
    const usuariosRender = usuarios
    //Mapea cada usuario y lo agrega a la lista ejecutando lo siguiente del arrow
    .map(usuario=> 
        //(considerar que el .nombre esta en el response ya que la URL devuelve un objeto con atributos nombre)
        `<li>${usuario.nombre}</li>`
    )
    //Como es un array, si lo inyectamos directamente aparecerían las comas divisorias, el .join("") las desaparece
    .join("");
    //Inyecta la lista de usuarios en el HTML
    listaUsuarios.innerHTML=usuariosRender;
}
//Crea request
const oReq = new XMLHttpRequest();
//Añade que el evento se ejecute en la carga de la pagina y recibe como callback la función creada anteriormente
oReq.addEventListener("load",reqListener);
//Genera una petición get a la URL indicada
oReq.open("GET","https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
//Envía la request a la URL
oReq.send();


