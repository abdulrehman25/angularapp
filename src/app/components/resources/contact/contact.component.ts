import { Component } from '@angular/core';
import { ContactUs } from 'src/app/models/contact-us';
import { NgForm } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactPageTitle="RadiologyCheck Contact Information";
  [x: string]: any;
  contactObj: ContactUs = {
    name: '',
    email: "",
    phone: "",
    message: ""
  };

  constructor(private contactUsService: ContactUsService, private _toastr: ToastrService, private router: Router, private ngxLoader: NgxUiLoaderService) { }
  storeData() {
    this.ngxLoader.start();
    this.contactUsService.addContactUsFormsData(this.contactObj).subscribe((res: any) => {
      if (res.status == 'error') {
        this._toastr.error(res.data, 'Error');
      } else {
        this._toastr.success('Data is saved Successfully !', 'Contact-Us Form data');
        this.ngxLoader.stop();
        this.router.navigate(['/home']);
      }
      //this.router.navigate(['/']);
    })
  }

}
