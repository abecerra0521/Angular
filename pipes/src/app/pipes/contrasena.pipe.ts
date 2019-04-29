import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {
    debugger;
    if (activar) {
      let newValue = '';
      for (let i = 0; i < value.length; i++) {
        newValue = newValue + '*';
      }
      return newValue;
    } else {
      return value;
    }
  }

}
