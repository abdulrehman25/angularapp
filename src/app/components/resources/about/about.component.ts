import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  AboutPageTitle="Learn more about RadiologyCheck"
  pageTitle: string = 'About Us | Radiology Check';
  description: string = 'Our doctors are dedicated to providing a professional, compassionate and detailed assessment. We pledge to make second opinions affordable & available for all.';
  keyword: string = 'Radiology check, about';

}
