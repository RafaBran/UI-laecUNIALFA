import { Component, OnInit } from '@angular/core';
import { UsuariosService, UsuarioDTO } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  public usuarios: UsuarioDTO[] = [];
  public filtro: string = '';

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuariosService.listarTodos().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        console.log('Usuários recebidos:', usuarios);
      },
      error: (err) => {
        console.error('Erro ao listar usuários:', err);
      }
    });
  }

  downloadExcel(): void {
    // Função a ser implementada
  }

  downloadPdf(): void {
    // Função a ser implementada
  }

  CadastrarDialog(): void {
    // Função a ser implementada
  }

  editarDialog(id: any): void {
    // Função a ser implementada
  }

  excluir(event: any, id: any): void {
    // Função a ser implementada
  }
}
