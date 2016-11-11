function enviarWsp(){


//recupero valor del input
var mensaje = document.getElementById('mensajes').value;
document.getElementById('mensajes').value ="";

// elemento padre
var divChat = document.getElementById('chat');

//crear mensaje con texto y hr
var nodoMensaje =  document.createTextNode(mensaje);
var nodoHora = document.createTextNode('2:30');


var divFranja = document.createElement('div');
var divMiMensaje = document.createElement('div');
var parrafoMensaje = document.createElement('p');
var divHora = document.createElement('div');

// agrehar clases y atributos
divFranja.classList.add('w-message','w-message-out');
divMiMensaje.classList.add('w-message-text');
divHora.classList.add('time');

// emparentar elementos

divHora.appendChild(nodoHora);
parrafoMensaje.appendChild(nodoMensaje);
divMiMensaje.appendChild(parrafoMensaje);
divMiMensaje.appendChild(divHora);
divFranja.appendChild(divMiMensaje);
divChat.appendChild(divFranja);

var avatarUno = document.getElementById('contacto-uno');
avatarUno.addEventListener("click", mostrarAvatar);


function mostrarAvatar(){

cabecera = document.getElementByClassName('w-chat-profile')[0];

//creao elementos cabecera

var foto = document.createElement()





/*var usuario = document.getElementByTagName('li');

for(var i = 0; i<usuario.length; i++){

	usuario[i]= */



}









}









