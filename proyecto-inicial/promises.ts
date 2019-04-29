
let promise1 = new Promise( function (resolve, reject) {
    setTimeout( ()=> {
      console.log("Terminada");
      resolve();
      reject();
    },1500);
} )

console.log("Paso1");

promise1.then(function () {
    console.log("Termino bien");
},function(){
  console.error("Termino mal");
})

console.log("Paso2");
