import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import swal from 'sweetalert';
import { HomePage } from '../home/home';
import { CriarContaPage } from '../criar-conta/criar-conta'
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = { email: '', senha: '', tipo: '', nome: ''}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider,
    public menu: MenuController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    // if(this.user.email == "" || this.user.senha == ""){
    //   swal({ title: "Atenção", text: "Campos obrigatorios não preenchidos", icon: "warning" });
    // }else{
    //   this.user.nome = "MASTER";
    //   this.user.nivel = "C";
    //   localStorage.setItem("userFidel", JSON.stringify(this.user));
    //   this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
        
    // }
    if(this.user.email == '' || this.user.senha == ''){
      swal({ title: "Atenção", text: "Campos obrigatorios não preenchidos", icon: "warning" });
    }else{
      this.api.login(this.user).then((res:any) =>{
        if(res){
          localStorage.setItem("userFidel", JSON.stringify(res[0]));
          this.navCtrl.setRoot(HomePage, null, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' })
        }
        else{
          swal({ title: "Atenção", text: "Verifique seu login e senha", icon: "error" });
        }
      }).catch(() =>{
        swal({ title: "Atenção", text: "Verifique seu login e senha", icon: "error" });
      })
    }
  }

  ionViewDidEnter(){
    this.menu.enable(false);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
  }

  itemTapped(event){
    this.navCtrl.push(CriarContaPage, null, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

}
