import { Component } from '@angular/core';

@Component({
  selector: 'app-musculoskeletal-radiology',
  templateUrl: './musculoskeletal-radiology.component.html',
  styleUrls: ['./musculoskeletal-radiology.component.css']
})
export class MusculoskeletalRadiologyComponent {
  doYouWantSecondOpinionTextForEachComponent="Musculoskeletal Radiology";

  pageTitle: string = "Musculoskeletal Radiology Reports | Radiology Check   ";
  description: string = "Submit an musculoskeletal radiology report for our specialists to go through. We will analyse your scans to give you a second opinion and peace of mind.   ";
  keyword: string = "musculoskeletal radiology, musculoskeletal imaging,  "; 

}
