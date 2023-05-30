
// ACTIVIDAD CLASE 10

// Ejercicio 1 

var nombre = "Alan";
var apellido = "Quispe";

console.log(nombre + " " + apellido);


// Ejercicio 2

var numero1 = 3;
var numero2 = 17;

var suma = numero1 + numero2;

console.log("El resultado de la suma es: " + suma);

var suma2 = suma + 7;

console.log("El resultado de la nueva variable es: " + suma2);


// ACTIVIDAD CLASE 11

// Ejercicio 1

var topping;
var precio;
var precioFinal;
var helado = 50;

alert("Selecciona su pedido:\n1. Oreo\n2. KitKat\n3. Kinder");

var opcion = parseInt(prompt("Ingresa el número correspondiente al pedido deseado"));

switch (opcion) {
  case 1:
    topping = "Oreo";
    precio = 10;
    break;
  case 2:
    topping = "KitKat";
    precio = 15;
    break;
  case 3:
    topping = "Kinder";
    precio = 25;
    break;
  default:
    alert("Disculpe, no tenemos ese helado");
    break;
}

if (topping) {
  precioFinal = helado + precio;
  alert("El helado " + topping + " cuesta $" + precioFinal);
}


// Ejercicio 2

var opcion = parseInt(prompt("Seleccione un menú:\n\n1. Carne\n2. Pescado\n3. Verdura"));
var menu;
var bebida;

switch (opcion) {
  case 1:
    menu = "carne";
    bebida = "vino tinto";
    break;
  case 2:
    menu = "pescado";
    bebida = "vino blanco";
    break;
  case 3:
    menu = "verdura";
    bebida = "agua";
    break;
  default:
    alert("Disculpe, no contamos con esa opcion en nuestro menu");
    break;
}

if (menu) {
  alert("Ha seleccionado el menuu de " + menu + ". Le recomendamos tomar " + bebida + " con su pedido.");
}


// Ejercicio 3

var datos = ["dato1", "dato2", "dato3"];

var limite = 9;

for (var i = 0; i < limite; i++) {
 
  if (i < datos.length) {
    var datoActual = datos[i];
    
    console.log("Dato actual:", datoActual);
  }
  
  var nuevoDato = "dato" + (i + 2);
  datos.push(nuevoDato);
}

console.log("Array de datos:", datos);

// Ejercicio 3

var numero = 2;

while (numero < 11) {
  console.log(numero + " es mas chico que 11");
  numero++;
}