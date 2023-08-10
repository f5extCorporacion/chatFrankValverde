const path = require('path');
const express = require('express')
const dotenv = require( 'dotenv');
const app = express()
var bodyParser = require('body-parser')

const http = require('http');
dotenv.config();
const port =  process.env.PORT;
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs')
//permite configurar facilmente variables de entorno dotenv
/* process.env nombre variable */
//app.use("/", ruts);

var users;
//vista y creacion usuario
app.route("/")
.get( (req,res,next)=>{ res.render('inicio')})
.post((req,res,next)=>{
   let {usuario} = req.body;
   users =usuario;//seguarda usuario en array
  console.log("se guardo usuario");
   res.redirect("/chat");
})

//vista y union chat y usuario
app.route("/chat")
.get( (req,res,next)=>{res.render('formulario',)})
.post((req,res,next)=>{console.log('hol')})


io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('chat', (msg) => {//recibe datos
    io.sockets.emit("msn",msg); //envia datos a cliente
    console.log(msg)
    console.log('message: ' + {"usuario":msg.usuario,"mensaje":msg.mensaje});
  });
});

  server.listen(process.env.PORT, () => {
    console.log(`corriendo ${process.env.PORT}`);
  });