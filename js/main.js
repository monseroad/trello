
function anadirTareas(){

    // esta es la caja donde dejaremos
    var contenedorExistente = document.getElementById("agregarLista");

    // Esta es la caja donde irá mi input y mi boton
    var cajaInicioTarea = document.createElement('div');

    cajaInicioTarea.setAttribute("class", "alinear")

    //Creamos input y boton
    var textcont =document.createElement('input');
    var boton =document.createElement('button');

    //Agregamos atributos a input y boton
    textcont.setAttribute("class", "form-control");
    boton.setAttribute("class", "btn");

    //Creamos nodo de texto para el boton
    var textoBoton = document.createTextNode("Guardar");

    //Metemos texto en el boton
    boton.appendChild(textoBoton);

    //Ahora hay que poner todo dentro del div que inventamos 
    cajaInicioTarea.appendChild(textcont);
    cajaInicioTarea.appendChild(boton);

    contenedorExistente.appendChild(cajaInicioTarea);

}

function lista(){

    var tituloLista = document.getElementById("agregarLista");
    var texto = document.getElementByTagName("input");
    var crearTexto = document.createTextNode("escribir");

    var anotar = document.createElement("p");
       anotar.appendChild("crearTexto");

    var botonTarjeta = document.createElement("button");
    var textoTarjeta = document.createTextNode("agregar tarjeta");   

       botonTarjeta.appendChild("textoTarjeta");
       botonTarjeta.setAttribute("class", "btn-primary");

    tituloLista.appendChild("anotar");
    tituloLista.appendChild("botonTarjeta");


}
