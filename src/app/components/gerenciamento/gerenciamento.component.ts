import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.scss']
})
export class GerenciamentoComponent implements OnInit {

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
