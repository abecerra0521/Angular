import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  person: Iperson;
  paises: ICountry[];
  generos: Object;

  constructor() {
    this.person = {
      name: null,
      lastName: null,
      email: null,
      pais: '',
      sexo: null
    };
    this.CargarGeneros();
    this.loadCountries();
   }

  ngOnInit() {
  }

  loadCountries() {
    this.paises = [{
      code: 'MX',
      name: 'Mexico'
    },
    {
      code: 'CRI',
      name: 'Costa Rica'
    },
    {
      code: 'PAN',
      name: 'Panama'
    }];
  }

  CargarGeneros() {
    this.generos = [
      {
        name: 'Masculino'
      },
      {
        name: 'Femenino'
      },
    ];
  }

  save(form: NgForm ) {
    console.log(form);
    console.log(form.value);
  }

}

export interface Iperson {
 name: string;
 lastName: string;
 email: string;
 pais: string;
 sexo: string;
}

export interface ICountry {
  name: string;
  code: string;
 }
