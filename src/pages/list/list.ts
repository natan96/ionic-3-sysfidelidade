import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { ExtratoPage } from '../extrato/extrato';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{loja: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = this.getLojas();
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Loja ' + i,
    //     note: 'This is item #' + i,
    //     icon: 'ribbon'
    //   });
    //  }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ExtratoPage, {
      item: item
    });
  }

  getLojas(): Array<any>{
    return [
      {
        loja: 'Buritis',
        note: 'Extrato >',
        icon: 'ribbon'
      },
      {
        loja: 'Alberto Cintra',
        note: 'Extrato >',
        icon: 'ribbon'
      },
      {
        loja: 'Del Rey',
        note: 'Extrato >',
        icon: 'ribbon'
      },
      {
        loja: 'Minas Shopping',
        note: 'Extrato >',
        icon: 'ribbon'
      },
      {
        loja: 'Pampulha',
        note: 'Extrato >',
        icon: 'ribbon'
      }
    ]
  }
}
