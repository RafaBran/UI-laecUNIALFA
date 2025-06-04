import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecao-turma',
  templateUrl: './selecao-turma.component.html',
  styleUrls: ['./selecao-turma.component.scss']
})
export class SelecaoTurmaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irPara20251() {
    this.router.navigate(['/a2025s1']);
  }
  irPara20252() {
    this.router.navigate(['/a2025s2']);
  }
}
