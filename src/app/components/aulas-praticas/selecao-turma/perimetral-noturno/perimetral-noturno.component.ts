import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perimetral-noturno',
  templateUrl: './perimetral-noturno.component.html',
  styleUrls: ['./perimetral-noturno.component.scss']
})
export class PerimetralNoturnoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/uso-laboratorio']);
  }

}
