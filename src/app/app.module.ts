import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoListComponent } from "./components/veiculo/veiculo-list/veiculo-list.component";
import { AlertaSucessoComponent } from '../app/components/alerta-sucesso/alerta-sucesso.component';
import { VeiculoNewModalComponent } from './components/veiculo/veiculo-new-modal/veiculo-new-modal.component';
import { VeiculoEditModalComponent } from './components/veiculo/veiculo-edit-modal/veiculo-edit-modal.component';
import { VeiculoExcluirModalComponent } from './components/veiculo/veiculo-excluir-modal/veiculo-excluir-modal.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FreteListComponent } from './components/frete/frete-list/frete-list.component';
import { FreteNewModalComponent } from './components/frete/frete-new-modal/frete-new-modal.component';
import { FreteEditModalComponent } from './components/frete/frete-edit-modal/frete-edit-modal.component';
import { FreteExcluirModalComponent } from './components/frete/frete-excluir-modal/frete-excluir-modal.component';
import { QuantEixoDirective } from './quant-eixo.directive';
import { TesteLineComponent } from './components/teste-line/teste-line.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AlertaSucessoComponent,
    VeiculoNewModalComponent,
    VeiculoEditModalComponent,
    VeiculoExcluirModalComponent,
    VeiculoListComponent,
    MenuComponent,
    FreteNewModalComponent,
    FreteEditModalComponent,
    FreteExcluirModalComponent,
    FreteListComponent,
    QuantEixoDirective,
    TesteLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
