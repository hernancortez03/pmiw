//Hernan Cortez 120291/5
//El Emisario de Ray Bradbury
//Link: https://youtu.be/x6kq6WCc5Do
let juego;
function preload() {
  juego = new Juego();
  juego.cargarRecursos(); // carga de imagenes y sonidos
}

function setup() {
  createCanvas(640, 480);
  juego.iniciar();
}

function draw() {
  background(173, 86, 19);
  juego.dibujar();
  juego.actualizar();
}

// manejo de teclas
function keyPressed() {
  juego.teclas(key, keyCode);
}
