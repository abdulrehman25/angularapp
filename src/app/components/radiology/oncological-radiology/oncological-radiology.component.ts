import { Component } from '@angular/core';

@Component({
  selector: 'app-oncological-radiology',
  templateUrl: './oncological-radiology.component.html',
  styleUrls: ['./oncological-radiology.component.css']
})
export class OncologicalRadiologyComponent {
  doYouWantSecondOpinionTextForEachComponent="Oncological Radiology";

  pageTitle: string = "Second Opinions on Oncological Radiology | Radiology Check  ";
  description: string = "Your oncological radiology reports go through our specialists with years of expertise in the field. Giving you a second opinion and peace of mind.   ";
  keyword: string = "Oncological imaging, Oncological radiology";

}
