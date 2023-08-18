import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  faqs!: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getFaqs();
  }
  getFaqs() {
    this.http.get<any>('assets/json/faqs.json').subscribe((data) => {
      this.faqs = data;
    });
  }
}
