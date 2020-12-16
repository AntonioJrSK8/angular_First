import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VeiculoNewModalComponent } from '../veiculo-new-modal/veiculo-new-modal.component';
import { VeiculoService, IVeiculo } from '../../../veiculo.service';
import { VeiculoEditModalComponent } from '../veiculo-edit-modal/veiculo-edit-modal.component';
import { VeiculoExcluirModalComponent } from '../veiculo-excluir-modal/veiculo-excluir-modal.component';

@Component({
  selector: 'veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})


export class VeiculoListComponent implements OnInit {

  @ViewChild(VeiculoNewModalComponent)
  veiculoNew!: VeiculoNewModalComponent;

  @ViewChild(VeiculoEditModalComponent)
  veiculoEdit!: VeiculoEditModalComponent;

  @ViewChild(VeiculoExcluirModalComponent)
  veiculoExcluir!: VeiculoExcluirModalComponent

  sucesso = false;
  veiculo!: IVeiculo;

  constructor(public veiculoService: VeiculoService,
    private element: ElementRef) {
  }

  ngOnInit(): void {
  }

  getVeiculos() {
    console.log(this.veiculoService.getVeiculos());
  }

  public newVeiculo() {
    this.veiculoNew.newVeiculo();
  }

  editVeiculo(veiculo: IVeiculo) {
    this.veiculoEdit.editVeiculo(veiculo);
  }

  excluirVeiculo(veiculo: IVeiculo) {
    console.log(veiculo);
  }
  saveVeiculo(veiculo: IVeiculo) {
    this.veiculo = veiculo;
    this.sucesso = !this.sucesso;

    setTimeout(() => {
      this.sucesso = !this.sucesso;
    }, 1000);
  }
}
