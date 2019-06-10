import { Component } from '@angular/core';
import { NavController, UrlSerializer } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { ExtratoPage } from '../extrato/extrato';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  lista: Array<any>

  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.verificaLogin();
    if(this.user != null && this.user.tipo == 'C'){
      this.lista = this.getFidelidade();
    }
  }

  getFidelidade(): Array<any>{
    return this.api.getFidelidadeExtrato();
  }

  verificaLogin(){
    let login = JSON.parse(localStorage.getItem('userFidel'));
    if(login){
      this.user = login;
    }
    else{
      this.navCtrl.setRoot(LoginPage, null);
    }
  }

  itemTapped(event, item){
    this.navCtrl.push(ExtratoPage, {
      item: item
    });
  }
}
