import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bueno-noturno',
  templateUrl: './bueno-noturno.component.html',
  styleUrls: ['./bueno-noturno.component.scss']
})
export class BuenoNoturnoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/uso-laboratorio']);
  }

}
