import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent {
@Input() topBannerBackgroundImg='';
@Input() pageTitle:string = '';
isHomePage: boolean = false;
constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
ngOnInit() {
  console.log("pageTitle", this.pageTitle)
  this.checkIfHomePage();
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      console.log('Current URL:', event.url);
      this.checkIfHomePage();
    }
  });
}

private checkIfHomePage() {
  this.isHomePage = this.router.url === '/home';
  console.log('isHomePage:', this.isHomePage);
}

}
