import { Component, OnInit, ElementRef } from '@angular/core';
import { ICarga, VeiculoService } from 'src/app/veiculo.service';

declare const $: any;

@Component({
  selector: 'app-frete-new-modal',
  templateUrl: './frete-new-modal.component.html',
  styleUrls: ['./frete-new-modal.component.css']
})
export class FreteNewModalComponent implements OnInit {

  carga: ICarga = {
    tipoCarga: '',
    distacia: 0,
    numeroEixo:0
  };

  constructor(private element: ElementRef,
             private freteService: VeiculoService) { }

  ngOnInit(): void {
  }

  newFrete() {
    this.show();
  }

  save(){
    const copy = Object.assign({}, this.carga);
    this.freteService.carga.push(copy);
    this.hide();
  }

  show(){
    const modal = this.getModal();
    $(modal).modal("show");
  }

  hide(){
    const modal = this.getModal();
    $(modal).modal("hide");
  }

  getModal(){
    const el:HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }
}
