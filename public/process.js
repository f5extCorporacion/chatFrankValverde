var socket = io();

//creacion usuario
//campos usuario
//campos chat
var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');

var icons = document.getElementById("icons");


//almacenamos usuario
var retornausuario = localStorage.getItem("UsuarioLocal");


//evento de boton
form.addEventListener('submit', function(e) {
   e.preventDefault();
   if (input.value !='' || icons.value=='') {
  
    //emvio de mensaje al servidor
     socket.emit('chat', {"usuario":retornausuario,"mensaje":input.value});
     input.value = '';
     
   }
 });

 function carga(){
  
  input.value = input.value+''+icons.value;

 };

 

//recibe los datos del servidor
 socket.on("msn", (datos)=>{
  messages.innerHTML+=` <p> <strong>${datos.usuario}</strong>:${datos.mensaje} </p>`;
  console.log(datos)
 })

