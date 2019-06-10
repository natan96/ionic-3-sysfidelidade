import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';

export interface Config {
	dados: string;
}

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
    public navParams: NavParams,
    public http : HttpClient,
    public api : ApiProvider) {

    this.loja = navParams.get('item');
    this.carregarExtratos(this.loja.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoPage');
  }

  carregarExtratos(id: number){
    this.extratos = this.api.getExtratos(id);
  }
}
