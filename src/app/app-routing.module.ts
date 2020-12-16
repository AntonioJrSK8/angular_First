import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreteListComponent } from './../app/components/frete/frete-list/frete-list.component';
import { VeiculoListComponent } from './../app/components/veiculo/veiculo-list/veiculo-list.component';


const routes: Routes = [
  {path: 'veiculos', component: VeiculoListComponent },
  {path: 'fretes', component: FreteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
