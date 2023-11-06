import { Component } from '@angular/core';

@Component({
  selector: 'app-neuroradiology',
  templateUrl: './neuroradiology.component.html',
  styleUrls: ['./neuroradiology.component.css']
})
export class NeuroradiologyComponent {

  doYouWantSecondOpinionTextForEachComponent="Neuroradiology";
  pageTitle: string = "Neuroradiology Services & Second Opinions | Radiology Check  ";
  description: string = "Our expert neuroradiologists are here to give you an online radiology second opinion for your X-rays, CT and MRI scans. Explore our radiology services in full!  ";
  keyword: string = "Neuroradiology, head trauma, brain and spine, back pain, brain tumour, strokes, Cranial Nerve Disorder, Alzheimer's, dementia, epilepsy, seizure, tinnitus, stroke, metabolic disorders, hydrocephalus and CSF disorders   ";

}
