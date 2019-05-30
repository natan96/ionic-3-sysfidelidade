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

  public config : Config;
  public columns : any;
  public rows : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http : HttpClient,
    public api : ApiProvider) {

    this.columns = [
      { prop: 'data' },
      { prop: 'ganho' },
      { prop: 'usado' },
      { prop: 'tipo' },
      { prop: 'saldo' }
    ];
    this.loja = navParams.get('item');
    this.carregarExtratos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoPage');
  }

  carregarExtratos(){
    //this.extratos = JSON.parse(this.api.getExtratos());
    [
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
