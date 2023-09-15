import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-radiology-sidebar',
  templateUrl: './radiology-sidebar.component.html',
  styleUrls: ['./radiology-sidebar.component.css'],
})
export class RadiologySidebarComponent {
  @Input() textFromParent = '';
  isRadiologyPages: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.checkIfRadiologyPages();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log('Current URL:', event.url);
        this.checkIfRadiologyPages();
      }
    });
  }

  private checkIfRadiologyPages() {
    // this.isRadiologyPages = this.router.url === '/home';
    if (
      this.router.url === '/abdominalRadiology' ||
      this.router.url === '/prostateRadiology' ||
      this.router.url === '/interventionalRadiologyGuidance' ||
      this.router.url === '/womensImaging' ||
      this.router.url === '/musculoskeletalRadiology' ||
      this.router.url === '/pediatricSportsInjuries' ||
      this.router.url === '/pediatricRadiology' ||
      this.router.url === '/oncologicalRadiology'
    ) {
      this.isRadiologyPages = true;
      // console.log('radionlogy', this.isRadiologyPages);
    }
  }
}
