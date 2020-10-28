// variables en JS-------------------------------------------------------------------------------------------------

//variable var forma vieja de crear un variable en js
var variaBleJS; // se puede inicializar sin valor
console.log(variaBleJS);
variaBleJS = true; // variable que puede cambiar con el paso del tiempo, no es necesario pasar el tipo de dato
console.log(variaBleJS);
if (variaBleJS === true){
    variaBleJS = false; // var permite cambiar la variable con el paso del tiempo
}
console.log(variaBleJS);
variaBleJS = 20; // esta variable le puedo cambiar el valor en el momento que sea a cualquier tipo de dato
console.log(variaBleJS);
variaBleJS = "hola Fran"; // en este le paso un string sin algún problema
console.log(variaBleJS);

// variables con const pertenece a las últimas versiones de JS
const variableJSConst = true; // no permite no definir el valor de la variable cuando se define
// variableJSConst = false error; debido a que es una constante sus valores nunca deben de cambiar 


// variables con let pertenece a las últimas versiones de JS
let variableJSLet; // permite inicializar sin valor
console.log(variableJSLet)
variableJSLet = true; // se comporta como una variable que en cualquier momento puede cambiar
console.log(variableJSLet)
variableJSLet = false;
console.log(variableJSLet)
variableJSLet = "Hola let fran"; // permite cambiar los valores así sean diferentes tipos de datos
console.log(variableJSLet)


//scope------------------------------------------------------------------------------------------------------------------
/* en este caso se tiene un problema, el cual es que se sobre escribe la variable musicaVar
por lo cual no se respetan los bloques código cuando creo otra variable dentro del mismo bloque
simplemente se hace referencia a la primera creada y se sobre escribe el valor, por lo que en 
la impresión se puede observar que se imprime grunge y grunge por que se está sobre escribiendo el valor de la variable 
*/
var musicaVar = "rock"

if(musicaVar) {
    var musicaVar = "grunge"
    console.log("dentro del if var :" , musicaVar)
}

console.log("fuera del if var:", musicaVar)
// scope con let  y const
/*
esto se solucionó con let, que permite crear una nueva instancia de una variable con el mismo nombre
sin estan apuntando a la variable del bloque superior, por lo cual en la impresión se puede observar
que se imprime gruenge y luego rock.
*/
let musica = "rock"

if(musica) {
    let musica = "grunge"
    console.log("dentro del if let:" , musica)
}

console.log("fuera del if le:", musica)

//template string-------------------------------------------------------------------------------------------------------------------------
const NOMBRE= "Fran";
let trabajo = "Desarrollador de soluciones tecnologicas"

// 1 concatenar string entre variables
// 1.1 forma vieja de hacerlo
console.log("nombre : " + NOMBRE + ", Trabajo : " + trabajo)

// 1.2 forma nueva de hacerlo
console.log(`nombre ${NOMBRE}, Trabajo ${trabajo}` ) // con comillas invertidas


// concatenar con multiples lineas con la forma vieja de hacerlo

const contenedorApp = document.querySelector('#app') // se selecciona el contenedor de ip app
let htmlViejo = '<ul>' +  // se crea una variable con contenido HTML
                    '<li> Nombre formaVieja: ' + NOMBRE + '</li>' +
                    '<li> Nombre formaVieja: ' + trabajo + '</li>' +
                '</ul>';

//concatenar con multiples lineas con la forma nueva de hacerlo
let htmlNuevo = `<ul> 
                    <li> Nombre formaNueva : ${NOMBRE} </li>
                    <li> Trabajo formaNueva : ${trabajo} </li>
                </ul> `; // permite un mayor control yser más ordenados a la hora de escribir el código

contenedorApp.innerHTML = htmlNuevo; // se agregar al contenedor la lista creada en la variable html


// funciones--------------------------------------------------------------------------------
/*
Código reutilizable
*/
// 1.1 funtion declaretion: se declara la funcion y se llama por medio de su nombre
saludar("Juan") // lo puedo llamar antes de declararlo debido a que las funciones se crean primero en el documento
function saludar (nombreCompleto){  // puede ser con parametros o sin parametros
    console.log(`Bienvenido ${nombreCompleto}`)
}
let nombreCompleto = "Fran Alexander Bermudez Grajales"
saludar(nombreCompleto)
saludar(nombreCompleto)
nombreCompleto = "Nathaly Patiño"
saludar(nombreCompleto) // se puede llamar multiples veces en el lugar que sea accesible

// 1.2 funtion expression: permite guardar una funciones una variable de tipo const
// saludar2("elinaa")con este tipo de función no se puede llamar antes de inicializarlo debido a que las variables se inicializan en un tiempo distinto
const saludar2 = function(nombreCompleto){
    console.log(`Bienvenido ${nombreCompleto}, esta es nuestra segunda manera de saludarte`)
}
let nombreCompleto2 = "Marco Antonio Solis"
saludar2(nombreCompleto2);
nombreCompleto2 = "Fran Alexander Bermudez Grajales 2"
saludar2(nombreCompleto2);// Igual permite ser llamado en más de una ocasión

//1.3 parametros por default en las funciones sirve para los dos tipos de funciones "expression  y declaration" 
 // si no le paso los parametros quedan los parametros por defecto NOMBRE Fran Alexander y actividad comprar una consola
function actividad(nombre = "Fran Alexander", actividad ="Comprar una consola"){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}
actividad("carlos", "Aprendiendo JS");
actividad("Ana", "Crea una máquina");
actividad(); // aquí no le paso los parametros y se puede observar que se imprimen los paramatros por defento de la función
actividad("pedro"); // aquí se puede observar que solo se le pasa el primer parametro por lo cual solo reescribe el primer parametro por default

//1.4 arrow funtions permite simplificar el código de una función
let viajando = (destino = "Madrid-España") => { // en vez de escribir function se pone una flecha 
    return `La persona está viajando a la ciudad de: ${destino}`
}
let viaje = viajando(); // se llama la función y se asigna a la variable viaje
console.log(viaje)
viaje = viajando("Paris-Francia")
console.log(viaje)

//objetos --------------------------------------------------------------------------------------------------------------------------------------------------

// 1.1 object literal forma vieja de acerlo debido a que no existia soporte para las clases en JS
// se crea un objeto de forma literal(ESTATICO), se inicializa en una Variable const
const persona = {// si se desea crear otra persona pues sría otra constante de forma literal
    nombre:'Fran', // se crea como un diccionario clave valor
    profesion: 'Ingeniero de sistemas',
    edad:100
};
const persona2 =  {
    nombre:'Alexander', // se crea como un diccionario clave valor
    profesion: 'Ingeniero de alimentos',
    edad:250
};
console.log(persona); // se puede acceder a todos los datos de la persona por medio de la instancia de esta
console.log(`nombre : ${persona.nombre}, edad: ${persona.edad}`); // se puede acceder a los atributos de la persona por medio de su  instacia y su clace
console.log(persona2);
console.log(`nombre : ${persona2.nombre}, edad: ${persona2.edad}`);

// 1.2 object constructor por función

function Tarea(nombre, urgencia){ // se crea el nombre en mayuscula por que esta función se comporta como una clase
    this.nombre = nombre; // por medio de this se asigna el valor por medio del this que hace referencia el atributo pero de esta clase this.atributo se refiera que pertenece a la clase
    this.urgencia = urgencia;
}
// 1.3 protoTypes permite definir que tipos de parametros va a recibir la clase o función

Tarea.prototype.mostartInfoTarea = function() {
    return `el nombre de la tarea es : ${this.nombre}, y la prioridad  es : ${this.urgencia}`
}
// creo una nueva tareas
const tarea1 = new Tarea('Aprender React y JS', 'Muy urgente' ) // se crea un nuevo objecto como si furea una clase por medio de una funcion
const tarea2 = new Tarea('Aprender Angular', 'Muy urgente' ) // se puede crear más de una tarea con la misma porcion de código o sea reutilizable.
console.log(tarea1)
console.log(tarea2)
const tarea3 = new Tarea('Aprender AWS', 'Muy urgente');
console.log(tarea3.mostartInfoTarea()) // por medio del prototype se le asigna ese metodo al objeto tarea por lo cual puede ser llamado por medio de la instancia del objeto tarea

// destructuring de objetos--------------------------------------------------------------------------------------------------------------------------------
// destructuring permire extraer los valores de un objeto
const JS = {
    version:{
        nueva:'ES6',
        anterior:'ES5'
    },
    framework: ['React', 'VueJS', 'AngularJS']
}

/* en las versiones VIEJAS para acceder a los valores era demasiado código
y se volvía complicado con respecto los objetos sean más grandes o tengan mayor contenido
*/
let version1 = JS.version.nueva;
console.log(version1)

/**con destructuring se permite simplemente
 * llamar los los nombres de lo que se desea obtener y se obtiene del objeto
 */
 let{version,framework} = JS; // por medio de los nombres en la rama del objeto en que se encuentre
 console.log(version, framework);
 let {nueva} = JS.version; // por ejemplo aquí se para en en objeto JS pero especificamente en el objeto que tiene por dentro que es version y se obtiene nueva
 console.log(nueva);

 // object literal enhancement------------------------------------------------------------------------------------------
// permite crear un objeto con diferentes variables(se unen las variables para crear un objeto)
 const banda = 'Linkin Park';
 const genero = 'Rock';
 const canciones = ['In the end', 'numb']

 const linkinPark = {banda,genero,canciones}; // se crea el objeto con las diferentes variables que desee
 console.log(linkinPark) 


 // agregar funciones a un objeto---------------------------------------------------------------------------------------------------
 const persona1 = {
     nombre: 'Fran',
     edad: 23,
     trabajo: 'Ninguno',
     mostrarInfoPersona() { // se accede a los valores de los objetos por medio del this  
         console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad} años`)
     }
 }
 persona1.mostrarInfoPersona();

 // arregles y .map----------------------------------------------------------------------------------------

 const carrito = ['producto1','producto2', 'producto3']
 console.log(carrito);
 const appContenedorCarrito = document.querySelector('#appCarrito');
 let htmlCarrito = '';
 // recorrer arreglo para obtener producto por producto
carrito.forEach(producto =>{
    htmlCarrito += `<li>${producto}</li>`
})
appContenedorCarrito.innerHTML = htmlCarrito;

// existe un metodo llamado map que permite mapear los arreglos y retorna un nuevo arreglo con los cambios realizados en la función map
let ArregloNuevocarrito = carrito.map(producto =>{
    return `el producto es: ${producto}`
});
console.log(ArregloNuevocarrito);

// object.keys-------------------------------------------------------------------------------------------------------
// permite obtener las llaves de los valores de los objetos
const persona3 = {
    nombre: 'Fran Alexander',
    profesion: 'Ingeniero de sistemas',
    edad: 23
}
console.log(Object.keys(persona3)) // se imprimen las llaves de los objetos (arreglo)

//spread operator "..."------------------------------------------------------------------------------------------------------
// permite combinar diferentes arreglos
let lenguajes = ['JavaScript', 'PHP','Java','Python'];
let framework1 = ['ReactJs','Laravel','spring','Django'];

// combinación de arreglos forma vieja
let combinacionArreglos = lenguajes.concat(framework1);
console.log(combinacionArreglos);

// combinación de arreglos de forma nueva, lo bueno es que genera una copia
let combinacionArreglosNuevo = [...lenguajes,...framework1];
console.log(combinacionArreglosNuevo)

function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros); // se crea la copia del arreglo y se pasa al metodo(lo bueno es que pasa todos los parametros a la vez)

//metodos para arreglos----------------------------------------------------------------------------------------------------------------------
const personas = [
    {nombre:'Fran', edad:23, aprendiendo:'JavaScript'},
    {nombre:'Nathaly', edad:22, aprendiendo:'PHP'},
    {nombre:'Alexander', edad:21, aprendiendo:'Python'},
    {nombre:'Alexander', edad:20, aprendiendo:'Java'},
]
console.log(personas);

// .filter permite obtener un nuevo arreglo dependiendo de un condicional que desee
const mayores = personas.filter(persona => { // se filtra y se obtiene en un nuevo arreglo las personas mayores a 21 años
    return persona.edad > 21;
})
console.log(mayores);

//.find permite obtener un solo objeto dentro del arreglo que cumpla la condición establecida
const Alexander = personas.find(persona => { // obtiene el objeto que cumpla la condición establecida (un solo objeto)
    return persona.nombre === 'Alexander'; // si existe más de un objeto que cumpla esa condición se trae el primero que encuentra que la cumpla
});
console.log(Alexander);

// .reduce permite crear totales(sumas, restas, divisiones) a partir de los datos del arreglo
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0)
console.log(total / personas.length);

// promises----------------------------------------------------------------------------------------------------------------
// permite manejar los errores de llamado a una api, resolve se ejecuta cuando el llamado ha sido exitoso y reject se ejecuta cuando a resultado en un error
// 1.1 promises simulado con un setTimeOut
const aplicarDescuento = new Promise((resolve, reject) =>{
    setTimeout(() => {// simulamos el tiempo de llamado a una api en 3 segundos
        let descuento = true; // en este caso el descuento ha sido aplicado por lo tando se ejecuta el resolve
        if(descuento){
            resolve('Descuento aplicado');
        }else{ // cuando el resolve no ha sido aplicado se ejecuta el reject
            reject('No se pudo aplicar el descuento');
        }
    },3000);
    
});

aplicarDescuento.then(resultado => { // el then se ejecuta luego de la consulta y por medio de el se obtiene el resultado
    console.log(resultado); // en este caso el resolve o reject según sea el caso
}).catch(error => {// si existe algún erorr en el aplicarDescuento de cualquier tipo salta un error en el catch
    console.log(error);// se imprime el error en pantalla
})
// 1.2 ajax con promise, realizando solicitud a una api y manejando por medio del promise

// se va a realizar una solicitdud a la api de random user, en el cual pide la cantidad de usuarios
const descargarUsuarios = cantidad => new Promise((resolve, reject) =>{
    // en primera instancia se para la cantidad a la api       
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`   
    
    //llamado a ajax permite realizar todo el proceso de petición a una api
    // 1 se crea el llamado
    const xhr = new XMLHttpRequest(); 
    // 2 abrir la conexión
    // se abre la conexion por medio del método get
    // se le envia la api, en este caso la variable api
    // y por último la variable que me permite definir si el llamado va a ser asincrono
    xhr.open('GET', api, true); 
    // 3 on load
    xhr.onload = () => { // permite definir la carga de los datos, si este obtiene un erorr o fue cargado de manera correcta
        if(xhr.status === 200){ // si la respuesta de la api es correcta 
            resolve(JSON.parse(xhr.responseText).results);//se ejecuta el resolve con la respuesta de api y se ontienen los datos por medio de JSON el cual esl padre es results
        }else { // si la api no responde adecuada mente o se obtuvo un error
            reject(Error(xhr.statusText));// se respondo con un error y el estado de la petición
        }
    }
    //opcional (on error)
    xhr.onerror = (error) => reject(error); // si dado el caso ocurre algún error en la carga se pasa al reject
    // 4 send
    xhr.send();
});
descargarUsuarios(20) // se llama al metodo de la petición y le envío la cantidad de usuarios que deseo obtener
    .then( // luego de ejecutar el metodo se ejecuta el .then con la respuesta, ya sea un error o no
        miembros => imprimirHTML(miembros), // si no hay un error se tran los miembros satisfactoriamente
        error => console.error( // si hubo un erorr se procese a pasar el error por consola
            new Error(`hubo un eror ${error}`)
        )
    )
// pasamos a imprimir en el html
function imprimirHTML(usuarios){
    let usuariosHtml = '';
    usuarios.forEach(usuario => {
        usuariosHtml += `<li>Nombre: ${usuario.name.first} ${usuario.name.last}  
                            País ${usuario.nat}
                            Image : 
                                    <img src="${usuario.picture.medium}">
                        </li>`
    })
    const contenedorAppUsuarios = document.querySelector('#appUsuarios')
    contenedorAppUsuarios.innerHTML = usuariosHtml;
    
}

// programación orientada a objetos  POO con clases
// 1.1 creación de la tareas
class MyTarea {
    constructor(nombre, prioridad){ // constructor de la calse, en este se inyectan las dependencias que quiero que tenga la clase
        this.nombre = nombre;
        this.prioridad = prioridad;
        
    }
    mostrartInfoMyTarea(){ // método de clase que permite imprimir en consola el nombre de la tarea y su prioridad
        return `Nombre tarea: ${this.nombre} prioridad: ${this.prioridad}`
    }
}

// creación de instancia de la tarea
let miTarea1 = new MyTarea('aprender Java', 'Alta');
let miTarea2 = new MyTarea('Aprender Angular', 'Muy alta');
miTarea1.mostrartInfoMyTarea();// llamado al metodo de clase

// 1.2 herencia de clases 
// permite heredar atributos de otras clases para que sean reutilizados por ejemplo atributos, metodos, entre otros
class comprasPendientes extends MyTarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    // si quisiera sobre escribir el metodo lo puedo hacer(sobre escribir el metodo mostrartInfoMyTarea por que deseo que este en esta clase tenga una funcionalidad distinta o adicional )
    mostrartInfoMyTarea(){
        let tarea = super.mostrartInfoMyTarea();
        return `${tarea} y la cantidad es de ${this.cantidad}`
    }
}

let compra1 = new comprasPendientes('jabon', 'urgente', 3);
console.log(compra1.mostrartInfoMyTarea()); // reutilizo el metodo de la clase padre MyTarea 
