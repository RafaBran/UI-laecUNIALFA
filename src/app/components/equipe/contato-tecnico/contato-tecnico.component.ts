import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-contato-tecnico',
  templateUrl: './contato-tecnico.component.html',
  styleUrls: ['./contato-tecnico.component.scss']
})
export class ContatoTecnicoComponent implements OnInit {

  nome: string = '';
    email: string = '';
    mensagem: string = '';
    constructor(private router:Router, private emailService: EmailService) { }

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

enviarMensagem() {
  this.emailService.enviarEmail(this.nome, this.email, this.mensagem)
    .subscribe({
      next: (response) => {
        console.log('E-mail enviado com sucesso!', response);
        alert("Sua mensagem foi enviada com sucesso!");
      },
      error: (error) => {
        console.error('Erro ao enviar e-mail:', error);
        alert(`Ocorreu um erro: ${error.message || 'Tente novamente mais tarde.'}`);
      }
    });
}

    voltar() {
      // Aqui você pode navegar para outra página ou fechar o diálogo
      this.router.navigate(['/equipe']);
    }
}
