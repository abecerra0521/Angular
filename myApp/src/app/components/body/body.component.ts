import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    frase: any = {
        mensaje : "Un gran poder requiere una gran responsabilidad",
        autor: 'Ben parker'
    };

    mostrar = true;

    lista: string[] = ['Spiderman', 'Venon', 'Thor'];

    constructor() {}

    ngOnInit(): void { }
}
