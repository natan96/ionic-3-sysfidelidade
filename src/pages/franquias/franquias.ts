import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-franquias',
  templateUrl: 'franquias.html',
})
export class FranquiasPage {
  public items: Array<{franquia: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.getFranquias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FranquiasPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  getFranquias(): Array<any>{
    return [
      {
        franquia: 'Sushi Japa',
        note: 'Lojas >',
        icon: 'ribbon'
      }
    ]
  }

}
