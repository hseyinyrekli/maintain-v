import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { SignupService } from 'src/app/components/core/services/signup.service';
import { NotificationService } from '../core/services/notification.service';
import { passwordValidator } from './password-validator 2';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm!: any;
  showError = false;
  isButtonDisabled = true;
  showMessage: boolean = false;
  blockedPanel: boolean = false;
  iti: any;
  inputElement: any;
  phoneValiteMessage = '';
  userTotal = 0;
  private key = 'vida-smart';
  SearchCountryField = SearchCountryField;
  selectedCountryISO = CountryISO.UnitedStates;
  PhoneNumberFormat = PhoneNumberFormat;
  constructor(
    private notificationService: NotificationService,
    private location: Location,
    private formBuilder: FormBuilder,
    private signupService: SignupService
  ) {}

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.inputElement = document.querySelector('#phone');
    if (this.inputElement) {
      this.iti = intlTelInput(this.inputElement, {
        initialCountry: 'us',
        separateDialCode: true,
        placeholderNumberType: 'MOBILE',
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      });
    }

    this.signupForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/),
      ]),
      userName: [''],
      licenseCode: [''],
      title: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/),
      ]),
      company: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/),
      ]),
      phoneNumber: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required, passwordValidator]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        this.matchValidator('password'),
      ]),

      type: ['regular'],
    });

    this.signupForm.valueChanges.subscribe(() => {
      this.isButtonDisabled = this.signupForm.invalid;
    });
  }
  matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }
  getError() {
    return this.signupForm.get('password')?.getError('passwordStrength');
  }
  get f() {
    return this.signupForm.controls;
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('passwordConfirm');

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  //EYES

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
  //SUBMIT

  async signUp() {
    this.blockedPanel = true;

    if (this.f['emailAddress'].value) {
      this.f['userName'].setValue(this.f['emailAddress'].value);
    }
    await this.getRandomLicanceCode();
    if (this.signupForm.valid && this.f['licenseCode'].value) {
      this.signupService.signUp(this.signupForm.value).subscribe(
        (data: any) => {
          this.notificationService.showSuccess(
            'Success',
            'Signed up successfully.'
          );
          this.signupForm.reset();

          window.open(
            `http://app.maintainv.com/#/auto-login/login?password=${this.f['password'].value}&username=${this.f['userName'].value}`,
            '_blank'
          );
          this.blockedPanel = false;
        },
        (error) => {
          let filter = `where[0][type]=equals&where[0][attribute]=emailAddress&where[0][value]=${this.f['emailAddress'].value}`;
          this.signupService.getUserForRegister(filter).subscribe((data) => {
            console.log(data);
            if (data.total > 0) {
              this.notificationService.showError(
                'Error',
                'There is an account for this email.'
              );
              this.blockedPanel = false;
            } else {
              this.notificationService.showError('Error', 'Failed to sign up.');
              this.blockedPanel = false;
            }
          });
          this.signupForm.reset();
        }
      );
    }
  }
  async getRandomLicanceCode() {
    const encoded = this.randomStr(10);
    await this.getUserList(encoded);
    if (this.userTotal > 0) {
      this.getRandomLicanceCode();
      return;
    } else {
      this.f['licenseCode'].setValue(encoded);
      return;
    }
  }
  getUserList(code?: any) {
    let filter = `where[0][type]=equals&where[0][attribute]=licenseCode&where[0][value]=${code}`;
    this.signupService.getUserForRegister(filter).subscribe((data) => {
      this.userTotal = data.total;
    });
  }
  randomStr = (len: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < len) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };
}
