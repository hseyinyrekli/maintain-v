import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm!: any;
  submitted = false;
  isButtonDisabled = true;
  showMessage: boolean = false;
  constructor(
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/),
          ],
        ],
        title: ['', Validators.required],
        company: ['', Validators.required],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^\d{10}$/)],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator.bind(this),
      }
    );
    this.signupForm.valueChanges.subscribe(() => {
      this.isButtonDisabled = this.signupForm.invalid;
    });
  }

  validateForm() {
    if (this.signupForm.valid) {
      this.showMessage = true;
      this.signupForm.reset();
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    }
  }
  onSubmit() {
    this.submitted = true;
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  @ViewChild('closedEye') closedEye!: ElementRef;
  @ViewChild('openEye') openEye!: ElementRef;
  passwordInputType = 'password';
  isPasswordVisible = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordInputType = this.isPasswordVisible ? 'text' : 'password';

    if (this.isPasswordVisible) {
      this.closedEye.nativeElement.style.display = 'none';
      this.openEye.nativeElement.style.display = 'inline-block';
    } else {
      this.closedEye.nativeElement.style.display = 'inline-block';
      this.openEye.nativeElement.style.display = 'none';
    }
  }

  @ViewChild('closedEye2') closedEye2!: ElementRef;
  @ViewChild('openEye2') openEye2!: ElementRef;
  passwordInputType2 = 'password';
  isPasswordVisible2 = false;

  togglePasswordVisibility2() {
    this.isPasswordVisible2 = !this.isPasswordVisible2;
    this.passwordInputType2 = this.isPasswordVisible2 ? 'text' : 'password';

    if (this.isPasswordVisible2) {
      this.closedEye2.nativeElement.style.display = 'none';
      this.openEye2.nativeElement.style.display = 'inline-block';
    } else {
      this.closedEye2.nativeElement.style.display = 'inline-block';
      this.openEye2.nativeElement.style.display = 'none';
    }
  }
}
