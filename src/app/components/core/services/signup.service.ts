import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  signUp(body: any) {
    let authData = window.btoa('register' + ':' + 'DLU8A43nXP');
    let url = 'https://pm.heyteknoloji.com/crm/vidasmartuser/api/v1/User';
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'Application/Json',
        Authorization: `Basic ${authData}`,
      }),
    });
  }
  getUserForRegister(filter?: any) {
    let headers = this.createAuthorizationHeader(
      'register' + ':' + 'DLU8A43nXP'
    );
    let selectValue = `select=${'licenseCode,userName'}`;
    let offsetValue = `maxSize=200&offset=0`;
    let baseApiUserUrl = 'https://pm.heyteknoloji.com/crm/vidasmartuser/api/v1';
    let url = `${baseApiUserUrl}/User?&${selectValue}&${offsetValue}&${filter}`;
    return this.http.get<any>(url, { headers }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  createAuthorizationHeader(base64: string) {
    let headers: HttpHeaders;
    headers = new HttpHeaders().set(
      'Authorization',
      'Basic ' + btoa(`${base64}`)
    );
    return headers;
  }
}
