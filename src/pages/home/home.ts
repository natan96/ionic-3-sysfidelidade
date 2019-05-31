import { Component } from '@angular/core';
import { NavController, UrlSerializer } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { ExtratoPage } from '../extrato/extrato';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  lista: Array<{ loja: string, pontos: number }>

  constructor(public navCtrl: NavController) {
    this.verificaLogin();
    if(this.user != null && this.user.tipo == 'C'){
      this.lista = this.getFidelidade();
    }
  }

  getFidelidade(): Array<{ loja: string, pontos: number }>{
    return [
      {
        loja: "Buritis",
        pontos: 0
      },
      {
        loja: "Alberto Cintra",
        pontos: 0
      },
      {
        loja: "Del Rey",
        pontos: 0
      },
      {
        loja: "Minas Shopping",
        pontos: 0
      },
      {
        loja: "Pampulha",
        pontos: 0
      }
    ]
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
