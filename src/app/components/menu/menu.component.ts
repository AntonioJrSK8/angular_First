import { Component, OnInit } from '@angular/core';
import { Iitems, VeiculoService } from 'src/app/veiculo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Iitems[] =
      [ {menu: 'Veiculos', link: '/veiculos', icone: 'home'},
        {menu: 'Fretes', link: '/fretes', icone: 'home'},
        {menu: 'Relatórios', link: '#', icone: 'home'},
        {menu: 'Financeiro', link: '#', icone: 'home'},
        {menu: 'Custos Operacionais', link: '#', icone: 'home'},
      ];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }

}
