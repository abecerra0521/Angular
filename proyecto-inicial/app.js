"use strict";
// Un archivo simple de TypeScript
function saludar(nombre, variable2, variable3) {
    if (variable2 === void 0) { variable2 = "prueba"; }
    var mensaje = "Hola, " + nombre + " : " + variable2 + " : " + variable3;
    console.log(mensaje);
}
var wolvering = {
    nombre: "Logan",
    edad: 15
};
saludar(wolvering.nombre, "activo la", "prueba");
var mensaje = "hola";
if (true) {
    var mensaje_1 = "adios";
    console.log(mensaje_1);
}
var nombre = "Juan";
//let texto = "Hola" + nombre;
var texto = "Hola, " + nombre;
console.log(texto);
