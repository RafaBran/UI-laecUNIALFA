import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  public createAuthorizationHeader(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    });
  }

  public uploadCreateAuthorizationHeader(): HttpHeaders {
    const token = this.cookieService.get('token');
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });
  }

  public sendPost<O>(url: string, obj?: object): Observable<any> {
    const token = this.cookieService.get('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.post(url, JSON.stringify(obj), { headers: headersReq });
  }

  public sendPut(url: string, obj?: object): Observable<any> {
    const token = this.cookieService.get('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.put(url, JSON.stringify(obj), { headers: headersReq });
  }

  public sendDelete<O>(url: string, parametter?: any): Observable<any> {
    const token = this.cookieService.get('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.delete(url, { headers: headersReq, params: parametter });
  }

  public sendGet(url: string, parametter?: any): Observable<any> {
    const token = this.cookieService.get('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.get(url, { headers: headersReq, params: parametter });
  }

  public sendGetResponse(url: string, token: string = '', serchParametter?: URLSearchParams): Observable<object> {
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';
    return this.http.get(url + parametterQuery, { headers: headersReq, observe: 'response' });
  }

  getJson(arquivoJson: string): Promise<any> {
    return this.http.get<any>(arquivoJson)
      .toPromise()
      .then(res => <any>res);
  }

  public login(url: string, username: string, password: string): Observable<any> {
    const body = { username, senha: password };
    return this.http.post(url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  public refreshToken(url: string): Observable<any> {
    const refreshtoken = this.cookieService.get('refreshtoken');
    return this.http.get(url, {
      headers: new HttpHeaders(
        { 'Authorization': 'Bearer_' + refreshtoken, }
      ).set('Content-Type', 'application/json',)
    });
  }

  public getWithoutToken(url: string): Observable<any> {
    return this.http.get(url);
  }

  public postWithoutToken(url: string, dto: any): Observable<any> {
    return this.http.post(url, JSON.stringify(dto), { headers: { 'Content-Type': 'application/json' } });
  }

  public upload(url: string, files: any): Observable<any> {
    const headersReq = this.uploadCreateAuthorizationHeader();
    return this.http.put(url, files, { headers: headersReq });
  }
}
