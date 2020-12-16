import { Component, OnInit, ElementRef } from '@angular/core';
import { IVeiculo, VeiculoService } from 'src/app/veiculo.service';

declare const $: any;

@Component({
  selector: 'veiculo-edit-modal',
  templateUrl: './veiculo-edit-modal.component.html',
  styleUrls: ['./veiculo-edit-modal.component.css']
})
export class VeiculoEditModalComponent implements OnInit {

  veiculos: IVeiculo = {
    codigo: 0,
    marca: '',
    eixo: 0,
    placa: ''
  }

  constructor(private veiculoService: VeiculoService,
              private element: ElementRef) {

  }

  ngOnInit(): void {
  }

  public editVeiculo(veiculo: IVeiculo) {
    //console.log(veiculo);
    this.veiculos = veiculo;
    this.show();
  }

  hide(){
    const modal = this.getModal();
    $(modal).modal("hide");
  }

  show(){
    const modal = this.getModal();
    $(modal).modal("show");
  }

  getModal(){
    const el:HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }

  saveVeiculo(){

  }
}
