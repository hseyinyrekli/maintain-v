import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  activeMenu = 'home';
  currentPage!: string;
  isScrolled = false;
  isRotating = false;
  isRotating2 = false;
  isRotating3 = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let currentPage = this.router.url.replace('/', '');
    if (currentPage == '/') {
      this.currentPage = '';
    } else {
      this.currentPage = currentPage;
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
        if (event.url == '/') {
          this.currentPage = '';
        }
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  setClass() {
    if (this.currentPage == '') {
      if (this.isScrolled) {
        return 'isScrolled';
      }
      return '';
    } else {
      if (this.isScrolled) {
        return 'isScrolled';
      }
      return 'bg-color';
    }
  }
  closeMenu() {
    const element = document.getElementById(
      'navbarSupportedContent'
    ) as HTMLElement;

    if (element) {
      element.classList.remove('show');
    }
  }

  startRotation3() {
    this.isRotating3 = true;
  }

  stopRotation3() {
    this.isRotating3 = false;
  }
}
