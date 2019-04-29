import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  constructor( private router: Router) {
   }

  ngOnInit() {
  }

}
