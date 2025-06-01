import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = '';
  password = '';

  onSubmit() {
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
    // Aqui você pode chamar um serviço de autenticação, por exemplo
  }
}
