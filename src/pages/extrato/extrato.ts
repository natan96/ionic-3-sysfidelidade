import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExtratoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extrato',
  templateUrl: 'extrato.html',
})
export class ExtratoPage {
  public loja:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loja = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoPage');
  }

}
