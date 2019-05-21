import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import swal from 'sweetalert';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = { email: '', senha: ''}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.user.email == '' || this.user.senha == ''){
      swal({ title: "Atenção", text: "Campos obrigatorios não preenchidos", icon: "warning" });
    }else{

      localStorage.setItem("userFidel", JSON.stringify(this.user));
      this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' })
        
    }
  }

  ionViewDidEnter(){
    this.menu.enable(false);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
  }
}
