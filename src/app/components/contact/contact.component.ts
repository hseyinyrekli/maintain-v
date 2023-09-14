import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      messages: ['', [Validators.required]],
    });
  }
  get f() {
    return this.contactForm.controls;
  }

  send() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      this.notificationService.showError('Error', 'Could not be sent!');
      return;
    } else {
      this.notificationService.showSuccess('Success', 'Sent successfully.');
      this.contactForm.reset();
    }
  }
}
