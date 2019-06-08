import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the GerenciarPontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerenciar-pontos',
  templateUrl: 'gerenciar-pontos.html',
})
export class GerenciarPontosPage {
  public franquia: any;
  public franquias: any[];
  public lojas: any[];
  public loja: any;
  public selectedLojas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.lojas = this.getLojas();
    this.franquias = this.getFranquia();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerenciarPontosPage');
  }

  getFranquia(): Array<any> {
    return this.api.getFranquiasGerPontos();
  }

  getLojas(): Array<{Franquia: number, id: number, loja: string}> {
    return this.api.getLojasGerPontos();
  }

  setLojasValues(Franquia) {
      this.selectedLojas = this.lojas.filter(item => item.Franquia == Franquia.id);
  }

  setFidelidadeList(Loja){
    console.log(Loja.loja);
  }
}
