import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Md5} from "md5-typescript";

@Injectable()
export class ApiProvider {
  public fidelidades: any[]
  public lojas: any[]
  public extratos: any[]
  constructor(public http: HttpClient) {}

  login(usuario){
    return new Promise ((resolve, reject) =>{
      //this.http.get("https://5ce460e0e7bf4100144c6d1a.mockapi.io/fidelidade/Usuario?search=" + usuario.email ).toPromise()
      this.http.get("http://localhost:53557/api/Fidelidade/LogIn?Email=" + usuario.email ).toPromise()
      .then((res:any)=>{
        if(usuario.email == res[0].email && usuario.senha == res[0].senha){
          console.log(Md5.init(res[0].senha));
          resolve(res)
        }
        else{
          resolve(null)
        }
      }).catch(() => {
        reject()
      })
    })
  }

  getFranquiasGerPontos(usuario){
    return new Promise ((resolve, reject) =>{
      this.http.get("http://localhost:53557/api/Fidelidade/FranquiaGerPontos?loj_id=" + usuario.id).toPromise()
      .then((res:any)=>{
        resolve(res);
      }).catch(() => {
        reject()
      })
    })
  }

  getLojasGerPontos(): Array<{Franquia: number, id: number; loja: string}> {
    return [
      {
        Franquia: 1,
        id: 1,
        loja: "Buritis"
      },
      {
        Franquia: 1,
        id: 2,
        loja: "Alberto Cintra"
      },
      {
        Franquia: 1,
        id: 3,
        loja: "Del Rey"
      },
      {
        Franquia: 1,
        id: 4,
        loja: "Minas Shopping"
      },
      {
        Franquia: 1,
        id: 5,
        loja: "Pampulha"
      }
    ]
  }

  getLojasGerPontos2(usuario){
    return new Promise((resolve, reject) =>{
      this.http.get('http://localhost:53557/api/Fidelidade/LojaPorFranquia?loj_id='+usuario.id).toPromise()
      .then((res:any)=>{
        resolve(res);
      }).catch(()=>{
        reject();
      })
    })
  }

  getFidelidadeCliente(loja: number): Array<any> {
   this.fidelidades = [
      {
        id: 1,
        LojaID: 37,
        nome: "Cliente1",
        email: "cliente@gmail.com",
        cpf: "111.111.111-11",
        pontos: 0
      },
      {
        id: 1,
        LojaID: 62,
        nome: "Cliente2",
        email: "cliente2@gmail.com",
        cpf: "222.222.222-22",
        pontos: 0
      },
      {
        id: 1,
        LojaID: 83,
        nome: "Cliente3",
        email: "cliente3@gmail.com",
        cpf: "333.333.333-33",
        pontos: 0
      },
      {
        id: 1,
        LojaID: 166,
        nome: "Cliente4",
        email: "cliente4@gmail.com",
        cpf: "444.444.444-44",
        pontos: 0
      },
      {
        id: 1,
        LojaID: 166,
        nome: "Cliente5",
        email: "cliente5@gmail.com",
        cpf: "555.555.555-55",
        pontos: 0
      }
    ]
    return this.fidelidades.filter(item => item.LojaID == loja);
  }

  getFidelidadeCliente2(usuario, loja){
    return new Promise((resolve, reject) =>{
      this.http.get('http://localhost:53557/api/Fidelidade/FidelidadeCliente?lojista_id='+usuario.id+'&loja_id='+loja).toPromise()
      .then((res:any)=>{
        resolve(res);
      }).catch(()=>{
        reject();
      })
    })
  }
  
  getFidelidadeExtrato(): Array<any>{
    return [
      {
        id: 1,
        loja: "Buritis",
        pontos: 2
      },
      {
        id: 2,
        loja: "Alberto Cintra",
        pontos: 1
      },
      {
        id: 3,
        loja: "Del Rey",
        pontos: 0
      },
      {
        id: 4,
        loja: "Minas Shopping",
        pontos: 1
      },
      {
        id: 5,
        loja: "Pampulha",
        pontos: 1
      }
    ] 
  }

  getExtratos(id: number): Array<any>{
    this.extratos = [
        {
          lojaId: 1,
          id: 1,
          data: "02/05/19 13:00",
          ganho: 1,
          usado: 0,
          tipo: "G",
          saldo: 1
        },
        {
          lojaId: 1,
          id: 1,
          data: "03/05/19 15:00",
          ganho: 1,
          usado: 0,
          tipo: "G",
          saldo: 1
        },
        {
          lojaId: 2,
          id: 1,
          data: "21/05/19 16:25",
          ganho: 1,
          usado: 0,
          tipo: "G",
          saldo: 1
        },
        {
          lojaId: 4,
          id: 1,
          data: "09/05/19 22:30",
          ganho: 1,
          usado: 0,
          tipo: "G",
          saldo: 1
        },
        {
          lojaId: 5,
          id: 1,
          data: "02/05/19 15:36",
          ganho: 1,
          usado: 0,
          tipo: "G",
          saldo: 1
        }
      ];
    return this.extratos.filter(item => item.lojaId == id);
  }
}
