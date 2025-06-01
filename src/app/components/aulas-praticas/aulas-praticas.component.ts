import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aulas-praticas',
  templateUrl: './aulas-praticas.component.html',
  styleUrls: ['./aulas-praticas.component.scss']
})
export class AulasPraticasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irParaProcedimentos() {
    this.router.navigate(['/procedimentos']);
  }

  irParaAnoPeriodo() {
    this.router.navigate(['/ano-per']);
  }

}
