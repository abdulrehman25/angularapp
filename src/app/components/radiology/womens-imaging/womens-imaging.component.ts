import { Component } from '@angular/core';

@Component({
  selector: 'app-womens-imaging',
  templateUrl: './womens-imaging.component.html',
  styleUrls: ['./womens-imaging.component.css']
})
export class WomensImagingComponent {
  doYouWantSecondOpinionTextForEachComponent="Women’s Imaging";

  pageTitle: string = "Second Opinions on Women's Imaging Reports | Radiology Check  ";
  description: string = "All women's imaging reports undergo meticulous review by our experienced specialists. We will analyse your scans to give you a second opinion and peace of mind.  ";
  keyword: string = "women's imaging, Pelvic MRI, Pelvis Ultrasound, gynaecological conditions  ";

}
