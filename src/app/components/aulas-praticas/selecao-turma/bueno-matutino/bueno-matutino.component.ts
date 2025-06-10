import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bueno-matutino',
  templateUrl: './bueno-matutino.component.html',
  styleUrls: ['./bueno-matutino.component.scss']
})
export class BuenoMatutinoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/uso-laboratorio']);
  }

}
