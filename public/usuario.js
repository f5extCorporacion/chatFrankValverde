//var socket = io();

var formularioe = document.getElementById("formulario");
var usuario = document.getElementById('usuario');


formularioe.addEventListener("submit",  function(e) {
    e.preventDefault();
     confirm("Deseas entrar?")
     localStorage.setItem("UsuarioLocal", usuario.value);//send data local storage
     let retornausuario = localStorage.getItem("UsuarioLocal");
     console.log(usuario.value)
     window.location.href = "/chat";
    
});

