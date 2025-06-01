import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ano-per',
  templateUrl: './ano-per.component.html',
  styleUrls: ['./ano-per.component.scss']
})
export class AnoPerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irPara20251() {
    this.router.navigate(['/a2025s1']);
  }
  irPara20252() {
    this.router.navigate(['/a2025s1']);
  }

  voltar() {
    this.router.navigate(['/aulas-praticas']);
  }

}
