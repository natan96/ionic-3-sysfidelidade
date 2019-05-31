import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { CriarContaPage } from '../pages/criar-conta/criar-conta';
import { CriarContaPageModule } from '../pages/criar-conta/criar-conta.module';
import { FranquiasPage } from '../pages/franquias/franquias';
import { FranquiasPageModule } from '../pages/franquias/franquias.module';
import { ExtratoPageModule } from '../pages/extrato/extrato.module';
import { ExtratoPage } from '../pages/extrato/extrato';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { GerenciarPontosPage } from '../pages/gerenciar-pontos/gerenciar-pontos';
import { GerenciarPontosPageModule } from '../pages/gerenciar-pontos/gerenciar-pontos.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FranquiasPageModule,
    LoginPageModule,
    CriarContaPageModule,
    ExtratoPageModule,
    HttpClientModule,
    GerenciarPontosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FranquiasPage,
    ListPage,
    LoginPage,
    CriarContaPage,
    ExtratoPage,
    GerenciarPontosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
