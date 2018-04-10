import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable()
export class ClienteService {

  constructor(public http:HttpClient) { }

  insert(obj : Cliente){
    return this.http.post(
      `https://c9ae5198-4702-4b17-a7a7-b517b0ceb6db.mock.pstmn.io/clientes/erro`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
