import { Directive, ElementRef, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input() appHighlight = 'blue';

 

  constructor(private el:ElementRef) { 
   
  }

  ngOnInit(): void{
    this.el.nativeElement.style.color = this.appHighlight;
  }

}
