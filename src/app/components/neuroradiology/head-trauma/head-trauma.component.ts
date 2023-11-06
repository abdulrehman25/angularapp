import { Component } from '@angular/core';

@Component({
  selector: 'app-head-trauma',
  templateUrl: './head-trauma.component.html',
  styleUrls: ['./head-trauma.component.css']
})
export class HeadTraumaComponent {
  doYouWantSecondOpinionTextForEachComponent="Head Traumas and Traumatic Brain Injuries (TBI)";
  pageTitle: string = "Second Opinions on Head Traumas | Radiology Check  ";
  description: string = "Submit a head trauma radiology report for our specialists to go through. We will analyse your scans to give you a second opinion and peace of mind.   ";
  keyword: string = "head trauma, radiology, neuroradiology,   ";
}
