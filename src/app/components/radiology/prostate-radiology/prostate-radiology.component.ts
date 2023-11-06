import { Component } from '@angular/core';

@Component({
  selector: 'app-prostate-radiology',
  templateUrl: './prostate-radiology.component.html',
  styleUrls: ['./prostate-radiology.component.css']
})
export class ProstateRadiologyComponent {
  doYouWantSecondOpinionTextForEachComponent="Prostate Radiology";

  
  pageTitle: string = "Second Opinions on Prostate Radiology | Radiology Check   ";
  description: string = "Submit an prostate radiology report for our specialists to go through. We will analyse your scans to give you a second opinion and peace of mind.   ";
  keyword: string = "prostate radiology, prostate MRI, Prostate-specific antigen, PSA,   ";


}
