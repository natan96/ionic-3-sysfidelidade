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
        loja: "Loja 1",
        pontos: 1
      },
      {
        loja: "Loja 2",
        pontos: 1
      },
      {
        loja: "Loja 3",
        pontos: 1
      },
      {
        loja: "Loja 4",
        pontos: 1
      },
      {
        loja: "Loja 5",
        pontos: 1
      },
    ]
  }

}
