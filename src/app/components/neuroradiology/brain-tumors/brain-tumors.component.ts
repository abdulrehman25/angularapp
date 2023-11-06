import { Component } from '@angular/core';

@Component({
  selector: 'app-brain-tumors',
  templateUrl: './brain-tumors.component.html',
  styleUrls: ['./brain-tumors.component.css']
})
export class BrainTumorsComponent {
  doYouWantSecondOpinionTextForEachComponent="Neuroradiology and Brain Tumours  ";
  pageTitle: string = "Second Opinions on Brain Tumours | Radiology Check   ";
  description: string = "When it comes to your neuroradiology scans, considering a second opinion is crucial, especially if a brain tumor is suspected. Our experts are here to help.  ";
  keyword: string = "Brain Tumours, Neuroradiology, radiology  ";
}
