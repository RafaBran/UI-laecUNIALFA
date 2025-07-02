import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly LOGIN_URL = 'http://localhost:8080/auth/login';

  constructor(
    private restApi: RestApiService,
    private cookieService: CookieService
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.restApi.login(this.LOGIN_URL, username, password).pipe(
      tap((response: any) => {
        // Aceita tanto string simples quanto JSON com access_token
        if (response) {
          const token = typeof response === 'string' ? response : response.access_token;
          if (token) {
            this.cookieService.set(this.TOKEN_KEY, token);
          }
        }
      })
    );
  }

  logout(): void {
    this.cookieService.delete(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.cookieService.get(this.TOKEN_KEY);
  }

  getToken(): string {
    return this.cookieService.get(this.TOKEN_KEY);
  }
}
