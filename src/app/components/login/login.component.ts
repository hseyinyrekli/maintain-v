import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isShow: boolean = false;

  showScreen() {
    this.isShow = true;
  }

  backScreen() {
    this.isShow = false;
  }
}
