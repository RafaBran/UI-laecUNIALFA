import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: string = '';
  showPassword = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginError = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['/gerenciamento']); // ajuste para a rota protegida desejada
      },
      error: (err) => {
        this.loginError = 'Usuário ou senha inválidos.';
      }
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
