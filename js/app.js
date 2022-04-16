/**
 * Ejercicios con Canvas y JavaScript: dibujo de figuras geométricas
 * 
 * https://parzibyte.me/blog
 */
 const ALTURA_CANVAS = 100,
 ANCHURA_CANVAS = 200;

// Obtener el elemento del DOM
const canvas1 = document.querySelector("#canvas-1");
//canvas1.width = ANCHURA_CANVAS;
//canvas1.height = ALTURA_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto1 = canvas1.getContext("2d");
// Estilo de dibujo
// Grosor de línea
contexto1.lineWidth = 5;
// Color de línea
contexto1.strokeStyle = "#212121";
// Color de relleno
contexto1.fillStyle = "#fff";
// Comenzamos la ruta de dibujo, o path
contexto1.beginPath();
// La esquina de arriba ( o como se llame, soy programador, no matemático)
contexto1.moveTo(100, 5);
// Dibujar hacia la derecha y arriba o centro
contexto1.lineTo(145, 40);
// Ahora hacia la derecha y abajo
contexto1.lineTo(145, 80);

// Ahora hacia el centro abajo
contexto1.lineTo(100, 115);

// Ahora hacia la izquierda y abajo
contexto1.lineTo(55, 80);
// Izquierda arriba
contexto1.lineTo(55, 38);
// Y dejamos que la última línea la dibuje JS
contexto1.closePath();
// Hacemos que se dibuje
contexto1.stroke();
// Lo rellenamos
contexto1.fill();

// Obtener el elemento del DOM
const canvas2 = document.querySelector("#canvas-2");
//canvas2.width = ANCHURA_CANVAS;
//canvas2.height = ALTURA_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto2 = canvas2.getContext("2d");
// Estilo de dibujo
// Grosor de línea
contexto2.lineWidth = 2;
// Color de línea
contexto2.strokeStyle = "#212121";
// Color de relleno
contexto2.fillStyle = "#fff";
// Comenzamos la ruta de dibujo, o path
contexto2.beginPath();
// La esquina de arriba ( o como se llame, soy programador, no matemático)
contexto2.moveTo(100, 15);
// Dibujar hacia la derecha y arriba o centro
contexto2.lineTo(135, 38);
// Ahora hacia la derecha y abajo
contexto2.lineTo(130, 75);
// Ahora hacia la izquierda y abajo
contexto2.lineTo(75, 80);
// Izquierda arriba
contexto2.lineTo(55, 38);
// Y dejamos que la última línea la dibuje JS
contexto2.closePath();
// Hacemos que se dibuje
contexto2.stroke();
// Lo rellenamos
contexto2.fill();