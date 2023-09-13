import { Component } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotForm.invalid) {
      this.notificationService.showError('Error', 'Could not be sent !');
      return;
    } else {
      this.notificationService.showSuccess('Success', 'Sent successfully.');
    }
  }
}
