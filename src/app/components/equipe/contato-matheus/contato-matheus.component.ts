import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contato-matheus',
  templateUrl: './contato-matheus.component.html',
  styleUrls: ['./contato-matheus.component.scss']
})
export class ContatoMatheusComponent implements OnInit {

  nome: string = '';
    email: string = '';
    mensagem: string = '';
    constructor(private router:Router) { }

    ngOnInit(): void {
    }

    enviar() {
      if (!this.nome.trim() || !this.email.includes('@') || !this.mensagem.trim()) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }

      // Aqui você pode chamar um serviço real para envio do e-mail
      console.log('Nome:', this.nome);
      console.log('Email:', this.email);
      console.log('Mensagem:', this.mensagem);
      alert(`Mensagem enviada com sucesso!\n\nNome: ${this.nome}\nE-mail: ${this.email}`);
    }

    voltar() {
      // Aqui você pode navegar para outra página ou fechar o diálogo
      this.router.navigate(['/equipe']);
    }

}
