import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form: FormGroup;
  person: any = {
    names: {
      name: 'Andres',
      lastName: 'Becerra',
    },
    email: 'abecerra@gmail.com',
    sports: ['Futbol']
  };

  constructor() {
    this.form = new FormGroup({
      names : new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(5)]),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      sports: new FormArray([
        new FormControl('', Validators.required)
      ])
    });
    this.form.setValue(this.person);
   }

  ngOnInit() {}

  save() {
    console.log(this.form);
    console.log(this.form.value);
    this.form.reset({
      names: {
        name: '',
        lastName: ''
      },
      email: ''
    });
  }

  addelement() {
    console.log('agregar elemento');
    (<FormArray>this.form.controls['sports']).push(
      new FormControl('lucha', Validators.required)
    );
  }

}
