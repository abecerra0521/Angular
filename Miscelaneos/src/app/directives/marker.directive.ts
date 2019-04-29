import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  constructor(private element: ElementRef ) {
  }

  // tslint:disable-next-line:no-input-rename
  @Input('appMarker') newColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.newColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }


}
