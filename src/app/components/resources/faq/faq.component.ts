import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  emailForSendingDoc='info@radiologycheck.com';
  FAQPageTitle = "Frequently Asked Questions";

  pageTitle: string = "Frequently Asked Questions | Radiology Check";
  description: string = "Here we answer the most common questions for patients, professions and legal advisors, giving you the peace of mind when getting a second opinion.  ";
  keyword: string = "legal, medical professionals, patients, treatment, insurance";

}
