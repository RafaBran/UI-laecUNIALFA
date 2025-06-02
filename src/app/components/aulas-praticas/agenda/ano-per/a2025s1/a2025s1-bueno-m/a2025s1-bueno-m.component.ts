import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a2025s1-bueno-m',
  templateUrl: './a2025s1-bueno-m.component.html',
  styleUrls: ['./a2025s1-bueno-m.component.scss']
})
export class A2025s1BuenoMComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/a2025s1']);
  }

}
