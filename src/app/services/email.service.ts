import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://api.mailersend.com/v1/email';
  private apiKey = 'mlsn.2899dd75cf3fd7a2e0c46f17426c37e09f9230dc8f5181e8c6b2ca0d0a546549';

  constructor(private http: HttpClient) {}

  enviarEmail(nome: string, email: string, mensagem: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      from: email, // O e-mail do usuário será usado como remetente
      to: ['rafael--bran@hotmail.com'], // Destinatário fixo
      subject: `Mensagem de ${nome}`,
      text: mensagem
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
