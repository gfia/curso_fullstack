const miPromesa = new Promise((resolve, reject)=> //Se crea una nueva Promise que recibe 2 callbacks
{ 
    const timeResolve = Math.floor(Math.random() *10000)+1000;  //Funcion que genera un num aleatorio entre 1000 y 10000
    const timeReject = Math.floor(Math.random() *10000)+1000;
    setTimeout(() =>
    {
        resolve(`Todo ok en ${timeResolve} milisegundos`) //Si se resuelve devuelve esto
    }
    ,timeResolve);
    setTimeout(() =>
    {
        reject(`Todo NO ok en ${timeReject} milisegundos`) //Si no resuelve devuelve esto
    }
    ,timeReject);
});

miPromesa //miPromesa en caso de resolve y caso reject (Es lo mismo que hacer miPromesa.then(fun1,fun2) donde fun1 actua en resolve y fun2 en reject)
    .then( respuesta => console.log(respuesta)) //Caso resolve
    .catch(razon => console.log(razon)); //Caso reject
