import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-extrato',
  templateUrl: 'extrato.html',
})
export class ExtratoPage {
  public loja:any;
  public extratos: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.loja = navParams.get('item');
    this.extratos = this.getExtratos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoPage');
  }

  getExtratos(): Array<any>{
    return [
      {
        id: 1,
        data: "02/05/2019 13:00",
        ganho: 2,
        usado: 0,
        tipo: "G",
        saldo: 2
      }
    ];
  }
}
