import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs!: any;
  search: string = '';

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() {
    this.http.get<any>('assets/json/blogs.json').subscribe((data) => {
      this.blogs = data;
    });
  }
  goToDetailPage(name: any) {
    this.router.navigate([`blogs/${name}`]);
    console.log(name, 'name');
  }
}
