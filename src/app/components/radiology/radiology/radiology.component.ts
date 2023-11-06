import { Component } from '@angular/core';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css']
})
export class RadiologyComponent {

  pageHeading:string = 'Radiology Services   ';
  pageTitle: string = "Radiology Services and Second Opinions | Radiology Check  ";
  description: string = "Our expert radiologists are here to give you an online radiology second opinion for your X-rays, CT and MRI scans. Explore our radiology services in full!  ";
  keyword: string = "radiology services ,abdominal radiology, prostate radiology, interventional radiology, pediatric radiology, musculoskeletal radiology, pediatric sports injury, oncological radiology, brain tumors, back pain, spinal trauma  ";
}
