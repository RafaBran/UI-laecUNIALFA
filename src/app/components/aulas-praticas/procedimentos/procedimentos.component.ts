import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.component.html',
  styleUrls: ['./procedimentos.component.scss']
})
export class ProcedimentosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/aulas-praticas']);
  }

}
