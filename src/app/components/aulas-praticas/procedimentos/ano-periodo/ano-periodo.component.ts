import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ano-periodo',
  templateUrl: './ano-periodo.component.html',
  styleUrls: ['./ano-periodo.component.scss']
})
export class AnoPeriodoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irPara20251() {
        this.router.navigate(['/agenda']);
}
}
