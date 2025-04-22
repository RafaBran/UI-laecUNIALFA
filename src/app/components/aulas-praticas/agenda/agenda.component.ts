import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  irParaBuenoMatutino() {
    this.router.navigate(['/bueno-matutino']);
  }
  irParaBuenoNoturno() {
    this.router.navigate(['/bueno-noturno']);
  }
  irParaPerimetralNoturno() {
    this.router.navigate(['/perimetral-noturno']);
  }

  voltar() {
    this.router.navigate(['/aulas-praticas']);
  }

}
