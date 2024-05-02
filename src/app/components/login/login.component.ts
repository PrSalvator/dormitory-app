import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";

  private authService = inject(AuthService);
  private router = inject(Router);

  login(){
    this.authService.login({username: this.username, password: this.password}).subscribe(() => {
      alert("Авторизация прошла успешно");
      this.router.navigate(["/"]);
    }, () => {
      alert("Ошибка авторизации")
    });
  }
}
