import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CordovaFiniteObservable } from '@ionic-native/core';
import { debounce } from 'ionic-angular/umd/util/util';
import {EditarPontosPage} from '../editar-pontos/editar-pontos';

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
    this.getLojas();
    //this.franquias = this.getFranquia2();
    this.getFranquia();
    
    this.fidelidades = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerenciarPontosPage');
  }

  getFranquia2(): Array<any>{
    return this.api.getFranquias();
  }

  getFranquia(){
    this.api.getFranquiasGerPontos(this.user).then((res:any) =>{
      if(res){
        this.franquias = res;
        //return res;
      }
      else{
        this.franquias = null;
        this.setLojasValues(null);
      }
    }).catch(() =>{
      swal({ title: "Atenção", text: "Erro ao carregar Franquias, contate o desenvolvedor", icon: "error" });
    });
    //return null;
  }

  getLojas2(): Array<{Franquia: number, id: number, loja: string}> {
    return this.api.getLojasGerPontos();
  }

  getLojas(){
    this.api.getLojasGerPontos2(this.user).then((res:any) =>{
      if(res){
        this.lojas = res;
      }
    }).catch(()=>{
      swal({ title: "Atenção", text: "Erro ao carregar Lojas, contate o desenvolvedor", icon: "error" });
    })
  }

  setLojasValues(Franquia) {
    if(Franquia === null)
      this.selectedLojas = this.lojas;
    else
      this.selectedLojas = this.lojas.filter(item => item.Franquia == Franquia.id);
  }

  setFidelidadeList2(Loja){
    this.fidelidades = this.api.getFidelidadeCliente(Loja.id);
  }

  setFidelidadeList(loja){
    this.api.getFidelidadeCliente2(this.user, loja.id).then((res:any) =>{
      if(res){
        this.fidelidades = res;
      }
      else{
        this.fidelidades = [];
      }
    }).catch(()=>{
      swal({ title: "Atenção", text: "Erro ao carregar Lojas, contate o desenvolvedor", icon: "error" });
    })
  }

  editarPontos(fidelidade){
    this.navCtrl.push(EditarPontosPage, {fidelidade}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }
}
