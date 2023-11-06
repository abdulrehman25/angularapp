import { Component } from '@angular/core';

@Component({
  selector: 'app-interventional-radiology-guidance',
  templateUrl: './interventional-radiology-guidance.component.html',
  styleUrls: ['./interventional-radiology-guidance.component.css']
})
export class InterventionalRadiologyGuidanceComponent {
  doYouWantSecondOpinionTextForEachComponent="Interventional Radiology ";
  
  pageTitle: string = "Interventional Radiology | Second Opinions | Radiology Check ";
  description: string = "Interventional Radiology is used in everything from surgery to oncology. We will analyse your scans to give you a second opinion and peace of mind.   ";
  keyword: string = "Interventional Radiology, interventional radiology procedure";

}
