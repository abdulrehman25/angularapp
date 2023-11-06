import { Component } from '@angular/core';

@Component({
  selector: 'app-pediatric-radiology',
  templateUrl: './pediatric-radiology.component.html',
  styleUrls: ['./pediatric-radiology.component.css']
})
export class PediatricRadiologyComponent {
  doYouWantSecondOpinionTextForEachComponent="Padiatric Radiology";

  pageTitle: string = "Second Opinions on Pediatric Radiology | Radiology Check   ";
  description: string = "Submit an pediatric radiology report for our specialists to go through. We will analyse your scans to give you a second opinion and peace of mind.   ";
  keyword: string = "pediatric radiology";


}
