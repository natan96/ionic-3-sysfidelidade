import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPontosPage } from './editar-pontos';

@NgModule({
  declarations: [
    EditarPontosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPontosPage),
  ],
})
export class EditarPontosPageModule {}
