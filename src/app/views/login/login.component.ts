import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // ajuste o caminho se necessário

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  erro = false;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.erro = false;
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        alert('Login bem sucedido!');
        this.router.navigate(['/home']);
      },
      error: () => {
        this.erro = true;
      }
    });
  }
  
}
