import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    console.log('Ruta hija, usuario nuevo');
    this.router.parent.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

}
