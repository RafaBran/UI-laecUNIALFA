import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a2025s1',
  templateUrl: './a2025s1.component.html',
  styleUrls: ['./a2025s1.component.scss'],
})
export class A2025s1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irParaa2025s1BuenoMatutino() {
    this.router.navigate(['/a2025s1-bueno-matutino']);
  }
  irParaa2025s1BuenoNoturno() {
    this.router.navigate(['/a2025s1-bueno-noturno']);
  }
  irParaa2025s1PerimetralNoturno() {
    this.router.navigate(['/a2025s1-perimetral-noturno']);
  }

  voltar() {
    this.router.navigate(['/ano-semestre']);
  }
}
