import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
 

  pageTitle: string = 'Radiology Check | A Second Opinion Makes a Difference';
  description: string = 'Radiology Check offers top of the line diagnostic radiological services available online! If you need quick services from a radiologist, look no further';
  keyword: string = 'Second Opinion, radiology reports, accurate diagnosis, radiology, Neuroradiology,  xray, CT, PET';
}
