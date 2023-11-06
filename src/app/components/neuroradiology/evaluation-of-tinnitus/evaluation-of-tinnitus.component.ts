import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation-of-tinnitus',
  templateUrl: './evaluation-of-tinnitus.component.html',
  styleUrls: ['./evaluation-of-tinnitus.component.css']
})
export class EvaluationOfTinnitusComponent {
  doYouWantSecondOpinionTextForEachComponent="Tinnitus and Hearing Loss  ";
  pageTitle: string = "Tinnitus Diagnosis and Second Opinions | Radiology Check   ";
  description: string = "Seeking a second opinion on your tinnitus diagnosis can prevent unwanted surgeries by confirming the accuracy of your diagnosis and treatment plan.   ";
  keyword: string = "tinnitus, hearing loss, neuroradiology";

}
