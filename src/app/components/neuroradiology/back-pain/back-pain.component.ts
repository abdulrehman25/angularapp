import { Component } from '@angular/core';

@Component({
  selector: 'app-back-pain',
  templateUrl: './back-pain.component.html',
  styleUrls: ['./back-pain.component.css']
})
export class BackPainComponent {
  doYouWantSecondOpinionTextForEachComponent="Back Pain and Radiculopathy";
  pageTitle: string = "Second Opinions on Back Pain | Radiology Check   ";
  description: string = "84% of people will suffer with back pain in their life. When experiencing prolonged back pain, it is essential to seek a second opinion for a diagnosis.  ";
  keyword: string = "Nonspecific lower back pain, back pain, radiology, Radiculopathy";
}
