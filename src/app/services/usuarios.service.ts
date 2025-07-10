import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsuarioDTO {
  usuario_id?: number;
  nomeUsuario?: string;
  tipoUsuario?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly API_URL = 'http://localhost:8080/usuarios/';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(`${this.API_URL}listar-todos`);
  }

  listarPorId(id: number): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.API_URL}listar/${id}`);
  }

  cadastrar(usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this.API_URL}cadastrar`, usuario);
  }

  alterar(id: number, usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.put<UsuarioDTO>(`${this.API_URL}alterar/${id}`, usuario);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}deletar/${id}`);
  }
}
