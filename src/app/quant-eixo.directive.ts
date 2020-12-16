import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[QuantEixo]'
})
export class QuantEixoDirective {


  //@Input()
  //QuantEixo: number = 0;

  constructor(private element: ElementRef) {
    /*
    setTimeout(() => {
      const nativeElement: HTMLElement = this.element.nativeElement;
      const eixo = this.QuantEixo;
      nativeElement.style.color = eixo > 4 ? 'red' : 'gree';
    }, 2000);
    */

  }

  @Input()
  set QuantEixo(valeu: any) {
    const nativeElement: HTMLElement = this.element.nativeElement;
    const eixo = valeu;
    nativeElement.style.color = eixo > 4 ? 'red' : 'gree';
  }

}
