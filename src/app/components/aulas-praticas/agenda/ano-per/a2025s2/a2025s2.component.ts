import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a2025s2',
  templateUrl: './a2025s2.component.html',
  styleUrls: ['./a2025s2.component.scss']
})
export class A2025s2Component implements OnInit {

  constructor(private router: Router) {}

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
