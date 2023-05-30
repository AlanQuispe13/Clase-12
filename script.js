function saludo() {
    var nombre = prompt("Ingrese su nombre:");
  
    if (nombre) {
      alert("¡Bienvenido/a, " + nombre + "!");
    } else {
      alert("Por favor, ingrese su nombre.");
    }
  }
  
  saludo();