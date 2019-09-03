import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CordovaFiniteObservable } from '@ionic-native/core';

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
  public fidelidades: any[];
  public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.user = JSON.parse(localStorage.getItem('userFidel'));
    //this.lojas = this.getLojas();
    this.getLojas2();
    //this.franquias = this.getFranquia2();
    this.getFranquia();
    this.fidelidades = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerenciarPontosPage');
  }

  getFranquia(){
    this.api.getFranquiasGerPontos(this.user).then((res:any) =>{
      if(res){
        this.franquias = res;
        //return res;
      }
    }).catch(() =>{
      swal({ title: "Atenção", text: "Erro ao carregar Franquias, contate o desenvolvedor", icon: "error" });
    });
    //return null;
  }

  getLojas(): Array<{Franquia: number, id: number, loja: string}> {
    return this.api.getLojasGerPontos();
  }

  getLojas2(){
    this.api.getLojasGerPontos2(this.user).then((res:any) =>{
      if(res){
        this.lojas = res;
      }
    }).catch(()=>{
      swal({ title: "Atenção", text: "Erro ao carregar Lojas, contate o desenvolvedor", icon: "error" });
    })
  }

  setLojasValues(Franquia) {
      this.selectedLojas = this.lojas.filter(item => item.franquia == Franquia.id);
  }

  setFidelidadeList(Loja){
    this.fidelidades = this.api.getFidelidadeCliente(Loja.id);
  }

  setFidelidadeList2(loja){
    this.api.getFidelidadeCliente2(this.user, loja.id).then((res:any) =>{
      if(res){
        this.fidelidades = res;
      }
    }).catch(()=>{
      swal({ title: "Atenção", text: "Erro ao carregar Lojas, contate o desenvolvedor", icon: "error" });
    })
  }
}
