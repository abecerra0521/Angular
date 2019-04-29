// Un archivo simple de TypeScript
function saludar(nombre: string, variable2: string = "prueba", variable3?:string){
  let mensaje = `Hola, ${nombre} : ${variable2} : ${variable3}`;
  console.log(mensaje);
}

let wolvering = {
  nombre: "Logan",
  edad:15
}

saludar(wolvering.nombre,"activo la","prueba");

let mensaje ="hola";
if (true) {
    let mensaje = "adios";
    console.log(mensaje);
}

let nombre: string = "Juan"
//let texto = "Hola" + nombre;

let texto = `Hola, ${nombre}`;
console.log(texto)
