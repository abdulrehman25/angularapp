import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-reads',
  templateUrl: './primary-reads.component.html',
  styleUrls: ['./primary-reads.component.css']
})
export class PrimaryReadsComponent {
  PrimaryReadsPageTitle = "Upload your Radiology Reports"

  pageTitle: string = "Uploading your Radiology Reports | Radiology Check   ";
  description: string = "Put your images on our safe Swisscom server. It's easy and secure. Whether it's a body, brain, spine or head & neck image, the right expert will check it.  ";
  keyword: string = "submit your scan, upload, radiology reports ";
}
