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
  contactPageTitle="Contact Us  ";
  
  pageTitle: string = "Contact Us | Radiology Check   ";
  description: string = "Looking to speak with someone directly? Here you will find our email, phone number and every other way to contact the Radiology Check team.   ";
  keyword: string = "contact";


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
