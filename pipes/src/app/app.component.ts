import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Andres';
  nombreCompleto = 'AnDreS BeCErra';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  numero = 0.56;

  moneda = 122.80;

  hero = {
    name: 'Logan',
    clave: 'Wolverine'
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3000);
  });

  fecha = new Date();

  video = 'https://www.youtube.com/embed/6ob1GhbcA38';

  activar = true;
}
