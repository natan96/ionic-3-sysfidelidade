import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { FranquiasPage } from '../pages/franquias/franquias';
import { ApiProvider } from '../providers/api/api';
import { GerenciarPontosPage } from '../pages/gerenciar-pontos/gerenciar-pontos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public api: ApiProvider,
    public splashScreen: SplashScreen) {

    let user = JSON.parse(localStorage.getItem('userFidel'));
    if(user!=null){
      if(user.tipo == 'C'){
        this.CarregaCliente();
      }
      else{
        this.CarregaLogista();
      }
    }
    else{
      this.rootPage = "LoginPage";
    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout(){
    localStorage.removeItem("userFidel");
    this.nav.setRoot(LoginPage, null);
  }

  CarregaCliente(){
    this.pages = [
      { title: 'Home', component: HomePage },
      // { title: 'Franquias', component: FranquiasPage },
      // { title: 'Lojas', component: ListPage }
    ];
  }

  CarregaLogista(){
    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'Gerenciar Pontos', component: GerenciarPontosPage}
    ];
  }
}
