import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { VeiculoService, IVeiculo } from '../../veiculo.service';

declare const $:any;

@Component({
  selector: 'veiculo-new-modal',
  templateUrl: './veiculo-new-modal.component.html',
  styleUrls: ['./veiculo-new-modal.component.css']
})
export class VeiculoNewModalComponent implements OnInit {

  veiculos: IVeiculo = {
    codigo: 0,
    marca: '',
    eixo: 0,
    placa: ''
  }

  @Output()
  onSubmit: EventEmitter<IVeiculo> = new EventEmitter<IVeiculo>();

  constructor(private element: ElementRef,
              public veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }

  newVeiculo() {
    const modal = this.getModal();
    $(modal).modal("show");
  }

  saveVeiculo() {
    const copy = Object.assign({}, this.veiculos);
    this.veiculoService.veiculos.push(copy);
    this.onSubmit.emit(copy);
    this.limpaCampo();
    this.hide();
  }

  hide(){
    const modal = this.getModal();
    $(modal).modal("hide");
  }

  getModal(){
    const el:HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }

  limpaCampo(){
    this.veiculos.marca = '';
    this.veiculos.eixo = 0;
    this.veiculos.placa = '';
  }
}
