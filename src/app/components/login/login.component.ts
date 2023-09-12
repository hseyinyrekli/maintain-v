import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isShow: boolean = false;
  constructor(private router: Router) {}
  showScreen() {
    this.isShow = true;
  }

  backScreen() {
    this.isShow = false;
  }
  navigateToPage1() {
    this.router.navigate(['/login/sign-up']);
  }
}
