import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('Ruta padre');
    this.activatedRoute.params.subscribe(params => console.log(params['id']));
  }

  ngOnInit() {
  }

}
