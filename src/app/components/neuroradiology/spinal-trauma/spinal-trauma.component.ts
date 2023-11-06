import { Component } from '@angular/core';

@Component({
  selector: 'app-spinal-trauma',
  templateUrl: './spinal-trauma.component.html',
  styleUrls: ['./spinal-trauma.component.css']
})
export class SpinalTraumaComponent {
  doYouWantSecondOpinionTextForEachComponent="Spinal Trauma and Injuries";


  pageTitle: string = "Second Opinions on Spinal Trauma | Radiology Check  ";
  description: string = "Submit a spinal radiology report for our specialists to go through. We will analyse your scans to give you a second opinion and peace of mind.   ";
  keyword: string = "spinal trauma, radiology  ";
}
