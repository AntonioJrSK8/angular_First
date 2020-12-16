import { Injectable } from '@angular/core';

export interface IVeiculo {
  codigo: number,
  marca: string,
  placa: string,
  eixo: number
}

export interface Iitems {
  menu: string,
  link: string,
  icone: string
}

export interface ICarga {
  tipoCarga: string,
  distacia:number,
  numeroEixo: number
}

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculos: IVeiculo[] = [];
  carga: ICarga[] = [];

  constructor() { }

  getVeiculos() {
    return this.veiculos;
  }

  getValor(carga: ICarga): number {
    return carga.distacia * carga.numeroEixo;
  }
}
