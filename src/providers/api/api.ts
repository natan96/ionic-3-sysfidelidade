import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {}

  login(usuario){
    return new Promise ((resolve, reject) =>{
      this.http.get("https://5ce460e0e7bf4100144c6d1a.mockapi.io/fidelidade/Usuario?search=" + usuario.email ).toPromise()
      .then((res:any)=>{
        if(usuario.email == res[0].email && usuario.senha == res[0].senha){
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

  getExtratos(): Array<any>{
    return [
        {
          id: 1,
          data: "02/05/19 13:00",
          ganho: 2,
          usado: 0,
          tipo: "G",
          saldo: 2
        }
      ]
  }
}
