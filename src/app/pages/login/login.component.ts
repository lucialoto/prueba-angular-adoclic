import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    if (this.loginObj.EmailId === 'user@demo.com' && this.loginObj.Password === '123456'){
      localStorage.setItem('user', this.loginObj.EmailId)
      this.router.navigateByUrl('/products')
    }
    else {
      alert('Error en usuario o contraseña')
    }
  }
}

export class Login {
    EmailId: string;
    Password: string;
    constructor() {
      this.EmailId = '';
      this.Password = '';
    }
}
