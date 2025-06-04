import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Importe o RestApiService conforme seu projeto
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class EnvioEmailService {
  public api: string;

  constructor(private http: RestApiService) {
    this.api = environment.apiEmail + '/email'; // ajuste conforme seu endpoint real
  }

  public postEmail(emailDTO: any): Observable<any> {
    const url = this.api + '/enviar';
    return this.http.sendPost(url, emailDTO);
  }

  public postEmailExterno(emailDTO: any): Observable<any> {
    const url = this.api + '/enviar-externo';
    return this.http.sendPost(url, emailDTO);
  }

  public postEmailAnexo(emailDTO: any): Observable<any> {
    const url = this.api + '/enviar-anexo';
    return this.http.sendPost(url, emailDTO);
  }
}
