import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  isHovered = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irParaContatoProfessor() {
    this.router.navigate(['/contato-professor']);
  }

  irParaContatoRafael() {
    this.router.navigate(['/contato-tecnico']);
  }

  irParaContatoAmanda() {
    this.router.navigate(['/contato-amanda']);
  }

  irParaContatoCatharine() {
    this.router.navigate(['/contato-katarine']);
  }

  irParaContatoHadassa() {
    this.router.navigate(['/contato-hadasa']);
  }

  irParaContatoJulia() {
    this.router.navigate(['/contato-julia']);
  }

  irParaContatoMatheus() {
    this.router.navigate(['/contato-matheus']);
  }
  irParaContatoMilena() {
    this.router.navigate(['/contato-milena']);
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
