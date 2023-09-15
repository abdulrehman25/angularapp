import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isHomePage: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // console.log("isHomePage", this.isHomePage);
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // this.isHomePage = this.activatedRoute.snapshot.routeConfig?.path === 'home';
    //     this.isHomePage = event.url === '/home';
    //     console.log("isHomePage", this.isHomePage);
    //   }
    //   // console.log("isHomePage", this.isHomePage);

    // });

    
  }

  // ngOnInit() {
  //   console.log("isHomePage", this.isHomePage);
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       // Check if the current route's URL matches the home page URL
  //       this.isHomePage = this.activatedRoute.snapshot.routeConfig?.path === 'home';
  //       console.log("isHomePage", this.isHomePage);
  //     }
  //   });
  // }

  ngOnInit() {
    // Check the current route when the component is initialized
    this.checkIfHomePage();

    // Subscribe to route changes to update isHomePage
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Current URL:', event.url);
        // Check if the current route's URL matches the home page URL
        this.checkIfHomePage();
      }
    });
  }

  private checkIfHomePage() {
    
    this.isHomePage = this.router.url === '/home';
    console.log('isHomePage:', this.isHomePage);
  }
}
