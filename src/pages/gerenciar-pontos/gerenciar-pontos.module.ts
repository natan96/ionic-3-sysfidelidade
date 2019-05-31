import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerenciarPontosPage } from './gerenciar-pontos';

@NgModule({
  declarations: [
    GerenciarPontosPage,
  ],
  imports: [
    IonicPageModule.forChild(GerenciarPontosPage),
  ],
})
export class GerenciarPontosPageModule {}
