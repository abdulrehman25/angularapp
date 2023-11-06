import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GetSecondOpenion } from 'src/app/models/get-second-openion';
import { GerSecondOpinionService } from 'src/app/services/ger-second-opinion.service';

@Component({
  selector: 'app-get-second-opinion',
  templateUrl: './get-second-opinion.component.html',
  styleUrls: ['./get-second-opinion.component.css'],
})
export class GetSecondOpinionComponent {
  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51Mjk9kEnkPTKRYXTTOWeEJ6EDvF9s8cfi4eFdwFoDx1Q3ZapvlGp69OaZQVpmdKPXsih2iW1HCp3xQBmUx4ZwWBZ00H1XV1s83';
  stripeResponseObj: any;
  scanType: any = [];
  bodyPart: any = [];
  scanfile: any;
  reportfile: any;
  showRegisterNowPage: boolean = true;
  addClass: string = '';
  divStyle: string = '';
  stepIndex: any;
  scanFileSizeError: boolean = false;
  reportFileSizeError: boolean = false;
  disableBackButton: boolean = true;
  isUserVarified: boolean = false;
  formObj: GetSecondOpenion = {
    id: '',
    email: '',
    password: '',
    code: '',
    first_name: '',
    last_name: '',
    phone: '',
    type_of_scan: [],
    what_part_of_body: [],
    comment: '',
    selected_package: '1',
  };
  myForm: any;
  paymentObject = {
    amount: 0,
    name: '',
    customer_id: '',
    email: '',
    stripeToken: '',
    package_name: '',
    package_id: this.formObj.selected_package,
  };

  pageTitle: string = 'Sign up to Get a Second Opinion | Radiology Check';
  description: string =
    "Don't leave your health to chance. Take control and ensure your peace of mind by getting a second opinion for your radiology scans or diagnosis today.";
  keyword: string = 'Create an account, sign up';

  constructor(
    private router: Router,
    private ngxLoader: NgxUiLoaderService,
    private getSecondOpinionService: GerSecondOpinionService,
    private _toastr: ToastrService
  ) {
    const isUserLoggedin = localStorage.getItem('isUserLoggedin');
    const isAdmin = localStorage.getItem('isAdmin');
    const loggedInUserDetails = JSON.parse(
      localStorage.getItem('user') || '{}'
    );
    console.log(
      'isUserLoggedin',
      loggedInUserDetails,
      typeof loggedInUserDetails
    );
    if (!!isUserLoggedin) {
      this.addClass = 'registerNow_step4';
      this.divStyle = `z-index : 4`;
      this.formObj.id = loggedInUserDetails.id;
      this.formObj.email = loggedInUserDetails.email;
      this.disableBackButton = false;
    }
    // if(!!isAdmin){

    // }
  }

  ngOnInit() {
    this.invokeStripe();

    // this.showRegisterNowPage = true;
  }

  closeGetSecondOpinion() {
    this.showRegisterNowPage = false;
    this.router.navigate(['/']);
  }

  showDiv(divClass: string, styleIndex: string) {
    console.log('divClass', divClass);
    if (divClass !== 'registerNow_step8') {
      this.addClass = divClass;
      this.divStyle = `z-index : ${styleIndex}`;
      this.stepIndex = styleIndex;
    }
    if (divClass == 'registerNow_step8') {
      if (this.formObj.selected_package === '1') {
        this.paymentObject.amount = 399;
        this.paymentObject.package_name = 'Express, 399 EUR';
        this.makePayment(399);
      }
      if (this.formObj.selected_package === '2') {
        this.paymentObject.amount = 249;
        this.paymentObject.package_name = 'Premium, 249 EUR';
        this.makePayment(249);
      }
      if (this.formObj.selected_package === '3') {
        this.paymentObject.amount = 199;
        this.paymentObject.package_name = 'Basic, 199 EUR';
        this.makePayment(199);
      }
    }

    if (this.addClass == 'registerNow_step3') {
      this.sendVerificationCode();
    }
    if (this.addClass == 'registerNow_step4') {
      if (this.disableBackButton) {
        this.validateCode();
      }
    }
    // if(this.isUserVarified){
    //   this.disableBackButton = false;
    // }
  }

  async sendVerificationCode() {
    this.ngxLoader.start();
    this.getSecondOpinionService
      .generateVerificationCode(this.formObj)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.ngxLoader.stop();
          this._toastr.success(
            'A verification code sent on your mail !',
            'Verification Code'
          );
        }
        if (res.status == 'error') {
          this.ngxLoader.stop();
          this._toastr.error(res.data, 'Error');
          this.addClass = 'registerNow_step2';
          this.divStyle = `z-index : 2`;
        }
      });
  }

  async validateCode() {
    this.ngxLoader.start();
    this.getSecondOpinionService
      .validateVerificationCode(this.formObj)
      .subscribe((res: any) => {
        if (res.status == 200) {
          // console.log(res);
          this.ngxLoader.stop();
          this._toastr.success('Code Verified !', 'Success');

          this.getSecondOpinionService
            .userRegistration(this.formObj)
            .subscribe((res: any) => {
              if (res.status == 200) {
                this.formObj.id = res.data.id;
                this.disableBackButton = false;
                this._toastr.success(
                  'User Registration Successful !',
                  'Success'
                );
              }
            });
        }
        if (res.status == 404) {
          this.addClass = 'registerNow_step3';
          this.divStyle = `z-index : 3`;
          // console.log(res);
          this.ngxLoader.stop();
          this._toastr.error(res.message.code, 'Error');
        }
      });
  }

  onChange(scan: string, event: any) {
    // console.log('scan',scan)
    if (event.target.checked) {
      const index = this.scanType.indexOf(scan);
      if (index == -1) {
        this.scanType.push(scan);
      }
    } else {
      const index = this.scanType.indexOf(scan);
      if (index > -1) {
        this.scanType.splice(index, 1);
      }
    }
    this.formObj.type_of_scan = this.scanType;
    // console.log('scabtypes',this.scanType);
  }

  setBodyPartArr(bodyname: string, event: any) {
    if (event.target.checked) {
      const index = this.bodyPart.indexOf(bodyname);
      if (index == -1) {
        this.bodyPart.push(bodyname);
      }
    } else {
      const index = this.bodyPart.indexOf(bodyname);
      if (index > -1) {
        this.bodyPart.splice(index, 1);
      }
    }
    this.formObj.what_part_of_body = this.bodyPart;
  }

  checkSelectedValue(data: string) {
    // console.log("check",data);
    let ref = this.scanType.indexOf(data);
    if (ref > -1) {
      return true;
    } else {
      return false;
    }
  }

  selectedBodyPart(data: string) {
    // console.log("check",data);
    let ref = this.bodyPart.indexOf(data);
    if (ref > -1) {
      return true;
    } else {
      return false;
    }
  }

  selectScan(event: any): void {
    this.scanfile = event.target.files[0];
    let scanFileSizeInMB = event.target.files[0].size / 1024;
    if (scanFileSizeInMB / 1024 > 5) {
      this.scanFileSizeError = true;
    } else {
      this.scanFileSizeError = false;
    }
  }

  selectReport(event: any): void {
    this.reportfile = event.target.files[0];
    let reportFileSizeInMB = event.target.files[0].size / 1024;
    if (reportFileSizeInMB / 1024 > 5) {
      this.reportFileSizeError = true;
    } else {
      this.reportFileSizeError = false;
    }
  }

  submitData() {
    console.log('submit function called');
    let formData = new FormData();
    if (this.scanfile != undefined) {
      formData.append('scan', this.scanfile, this.scanfile.name);
    }
    if (this.reportfile != undefined) {
      formData.append('report', this.reportfile, this.reportfile.name);
    }
    formData.append('id', this.formObj.id);
    formData.append('email', this.formObj.email);
    formData.append('first_name', this.formObj.first_name);
    formData.append('type_of_scan', this.formObj.type_of_scan);
    formData.append('what_part_of_body', this.formObj.what_part_of_body);
    formData.append('comment', this.formObj.comment);
    formData.append('selected_package', this.formObj.selected_package);

    this.ngxLoader.start();

    this.getSecondOpinionService
      .updateUserDetails(formData)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.paymentObject.name = res.data.first_name;
          this.paymentObject.email = res.data.email;
          this.paymentObject.customer_id =
            res.data.first_name + '_' + res.data.id;
          this.sendDataToBackendForPayment();
          this.ngxLoader.stop();
          this._toastr.success('Completed !', 'Success');
          this.addClass = 'registerNow_step8';
          this.divStyle = `z-index : 8`;
          this.stepIndex = '8';
        } else {
          this._toastr.error(
            'Something wend wrong ! Please try again..',
            'Error'
          );
          this.addClass = 'registerNow_step7';
          this.divStyle = `z-index : 7`;
          this.stepIndex = '7';
        }
      });
  }

  addSecondOpinionData() {
    this.showRegisterNowPage = false;
    this.router.navigate(['/']);
  }

  sendDataToBackendForPayment() {
    this.getSecondOpinionService
      .payment(this.paymentObject)
      .subscribe((response: any) => {
        console.log('response', response);
      });
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: (stripeToken: any) => {
        this.stripeResponseObj = stripeToken;
        if (
          stripeToken.id !== 'undefined' &&
          stripeToken.id !== '' &&
          stripeToken.id !== null
        ) {
          this.paymentObject.stripeToken = stripeToken.id;
          console.log('stripeToken', stripeToken);
          // alert('Stripe token generated!');
          this.submitData();
        }
      },
    });
    paymentHandler.open({
      name: 'radiologycheck.com',
      description: '',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            // alert('Payment has been successfull!');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
