import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isHomePage: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.checkIfHomePage();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log('Current URL:', event.url);
        this.checkIfHomePage();
      }
    });
  }

  private checkIfHomePage() {
    this.isHomePage = this.router.url === '/home';
    // console.log('isHomePage:', this.isHomePage);
  }
}
