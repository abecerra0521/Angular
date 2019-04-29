"use strict";
var mifuncion = function (a) {
    return a;
};
var funcionF = function (a) { return a; };
console.log(mifuncion("prueba"));
console.log(funcionF("prueba2"));
var funcion2 = function (a, b) { return a + b; };
funcion2(5, 10);
var Hero = /** @class */ (function () {
    function Hero() {
        this.name = "AntMan",
            this.age = 18;
    }
    return Hero;
}());
var antman = new Hero();
