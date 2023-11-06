import { Component } from '@angular/core';

@Component({
  selector: 'app-epilepsy-or-seizures',
  templateUrl: './epilepsy-or-seizures.component.html',
  styleUrls: ['./epilepsy-or-seizures.component.css']
})
export class EpilepsyOrSeizuresComponent {
  doYouWantSecondOpinionTextForEachComponent="Epilepsy and Seizures   ";

  
  pageTitle: string = "Epilepsy and Seizure Second Opinions | Radiology Check   ";
  description: string = "Diagnosing the cause of seizures is a complex process. Obtaining a second opinion is a vital for an accurate diagnosis and appropriate treatment.  ";
  keyword: string = "epilepsy, seizure, neuroradiology  "; 

}
