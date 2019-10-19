import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditarPontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-pontos',
  templateUrl: 'editar-pontos.html',
})
export class EditarPontosPage {
  fidelidade: any;
  add :boolean;
  rem :boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fidelidade = navParams.get('fidelidade');
    this.add = true;
    this.rem = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPontosPage');
  }

  updateAdd() {
    this.rem = !this.add;
  }

  updateRem() {
    this.add = !this.rem;
  }

  
}
