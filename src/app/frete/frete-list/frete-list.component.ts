import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICarga, VeiculoService } from 'src/app/veiculo.service';
import { FreteNewModalComponent } from '../frete-new-modal/frete-new-modal.component';

@Component({
  selector: 'app-frete-list',
  templateUrl: './frete-list.component.html',
  styleUrls: ['./frete-list.component.css']
})
export class FreteListComponent implements OnInit {

  @ViewChild(FreteNewModalComponent)
  freteNew!: FreteNewModalComponent;

  sucesso = false;

  cargas: ICarga = {
    tipoCarga: '',
    distacia: 0,
    numeroEixo: 0
  };

  constructor(public freteService: VeiculoService,
              private element: ElementRef) {}

  ngOnInit(): void {
  }

  newFrete(){
    console.log('New Frete!');
    this.freteNew.newFrete();
  }
}
