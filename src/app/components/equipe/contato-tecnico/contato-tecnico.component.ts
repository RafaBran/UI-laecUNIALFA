import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-tecnico',
  templateUrl: './contato-tecnico.component.html',
  styleUrls: ['./contato-tecnico.component.scss']
})
export class ContatoTecnicoComponent implements OnInit {

  nome: string = '';
    email: string = '';
    mensagem: string = '';
    constructor(private router:Router) { }

    ngOnInit(): void {
    }

    enviar(){

    }
    voltar() {
      // Aqui você pode navegar para outra página ou fechar o diálogo
      this.router.navigate(['/equipe']);
    }
}
