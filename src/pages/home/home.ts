import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista: Array<{ loja: string, pontos: number }>

  constructor(public navCtrl: NavController) {
    this.lista = this.getFidelidade();
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
      },
    ]
  }

}
