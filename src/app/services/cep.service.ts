import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CepService {

  constructor(private http: HttpClient) { }

  localizarCep(codigoCep: string) {
   
    let url = 'https://viacep.com.br/ws/' + codigoCep + '/json/';
    let header: any = {
    headers: new HttpHeaders()
      .set('Content-type', 'application/json')
    }
    return this.http.get(url, header).toPromise();

    
  }
}
