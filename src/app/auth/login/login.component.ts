import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'customer@gmail.com') {
      this.router.navigate(['/customer/restaurants']);
    } else {
      alert('Invalid login');
    }
  }
}
