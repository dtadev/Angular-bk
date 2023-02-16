import { Directive, ElementRef, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {


  @Input() appHighLight = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
 }
}
