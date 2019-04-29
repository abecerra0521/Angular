let mifuncion = function( a: any ){
  return a;
}

let funcionF = (a:any) => a;

console.log(mifuncion("prueba"));
console.log(funcionF("prueba2"));


let funcion2 = (a: number, b: number ) => a+b;

funcion2(5,10);


class Hero {
    name: string;
    age: number;

    constructor(){
      this.name = "AntMan",
      this.age = 18
    }
}

let antman: Hero = new Hero();
