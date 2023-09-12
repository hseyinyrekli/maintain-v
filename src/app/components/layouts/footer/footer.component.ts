import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private router: Router) {}
  redirectToPageAndScroll(targetId: string) {
    this.router.navigate(['/industries']);

    setTimeout(() => {
      const hedefElement = document.querySelector(`#${targetId}`);
      if (hedefElement) {
        hedefElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000);
  }
}
