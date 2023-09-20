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
  styleUrls: ['./get-second-opinion.component.css']
})
export class GetSecondOpinionComponent {
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51Mjk9kEnkPTKRYXTTOWeEJ6EDvF9s8cfi4eFdwFoDx1Q3ZapvlGp69OaZQVpmdKPXsih2iW1HCp3xQBmUx4ZwWBZ00H1XV1s83';
  stripeResponseObj:any;
  scanType:any= [];
  bodyPart:any=[];
  scanfile:any;
  reportfile:any;
  showRegisterNowPage:boolean = true;
  addClass:string='';
  divStyle:string ='';
  stepIndex:any;
  scanFileSizeError:boolean=false;
  reportFileSizeError:boolean=false;
  formObj:GetSecondOpenion = {
    id:'',
    email:'',
    password:'',
    code:'',
    first_name:'',
    last_name:'',
    phone:'',
    type_of_scan:[],
    what_part_of_body:[],
    comment:'',
    selected_package:'1',
  }
  myForm: any;

  constructor(private router:Router,private ngxLoader: NgxUiLoaderService, private getSecondOpinionService:GerSecondOpinionService, private _toastr:ToastrService){}

  ngOnInit() {
    this.invokeStripe();

    // this.showRegisterNowPage = true;
  }

  closeGetSecondOpinion() {
    this.showRegisterNowPage = false;
    this.router.navigate(['/']);
  }

  showDiv(divClass:string,styleIndex:string){
    console.log("before condition");
    if(this.addClass !== 'registerNow_step8'){
    console.log("inside condition", divClass);
      this.addClass = divClass;
      this.divStyle = `z-index : ${styleIndex}`;
      this.stepIndex = styleIndex;
    }
   
    if(this.addClass == 'registerNow_step3'){
      this.sendVerificationCode();
    }
    else if(this.addClass == 'registerNow_step4'){
      this.validateCode();
    }
    if(this.addClass == 'registerNow_step8'){
      // this.submitData();
      if(this.formObj.selected_package ==='1'){
        this.makePayment(399);
        if(this.stripeResponseObj.id !== null){
          this.submitData();
          this.addClass = divClass;
          this.divStyle = `z-index : ${styleIndex}`;
          this.stepIndex = styleIndex;
    
        }
      }
      if(this.formObj.selected_package ==='2'){
        this.makePayment(249);
        if(this.stripeResponseObj.id !== null){
          this.submitData();
          this.addClass = divClass;
          this.divStyle = `z-index : ${styleIndex}`;
          this.stepIndex = styleIndex;
    
        }
      }
      if(this.formObj.selected_package ==='3'){
        this.makePayment(199);
        if(this.stripeResponseObj.id !== null){
          this.submitData();
          this.addClass = divClass;
          this.divStyle = `z-index : ${styleIndex}`;
          this.stepIndex = styleIndex;
    
        }
      }
    }

    
  }

  async sendVerificationCode(){
    this.ngxLoader.start();
    this.getSecondOpinionService.generateVerificationCode(this.formObj).subscribe((res: any) => {
      if (res.status == 200) {
        this.ngxLoader.stop();
        this._toastr.success('A verification code sent on your mail !', 'Verification Code');       
      }
      if (res.status == 'error'){
        this.ngxLoader.stop(); 
        this._toastr.error(res.data, 'Error');   
        this.addClass = 'registerNow_step2';
        this.divStyle = `z-index : 2`;    

      }
    });
  }

  async validateCode(){
    this.ngxLoader.start();
    this.getSecondOpinionService.validateVerificationCode(this.formObj).subscribe((res:any)=>{
      if (res.status == 200) {
        // console.log(res);
        this.ngxLoader.stop();
        this._toastr.success('Code Verified !', 'Success');

        this.getSecondOpinionService.userRegistration(this.formObj).subscribe((res:any)=>{
            if(res.status == 200){
              this.formObj.id = res.data.id;
              this._toastr.success('User Registration Successful !', 'Success');

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


  onChange(scan:string, event: any) {
    // console.log('scan',scan)
    if(event.target.checked){
      const index = this.scanType.indexOf(scan);
      if (index == -1) { 
        this.scanType.push(scan);
      }

    }else{
      const index = this.scanType.indexOf(scan);
      if (index > -1) { 
        this.scanType.splice(index, 1); 
      }
    }
    this.formObj.type_of_scan = this.scanType;
    // console.log('scabtypes',this.scanType);
  }

  setBodyPartArr(bodyname:string, event:any){
    if(event.target.checked){
      const index = this.bodyPart.indexOf(bodyname);
      if (index == -1) { 
        this.bodyPart.push(bodyname);
      }
    }else{
      const index = this.bodyPart.indexOf(bodyname);
      if (index > -1) { 
        this.bodyPart.splice(index, 1); 
      }
    }
    this.formObj.what_part_of_body = this.bodyPart;

  }
  
  checkSelectedValue(data:string){
    // console.log("check",data);
    let ref = this.scanType.indexOf(data); 
    if (ref > -1) { 
      return true;
    }
    else {
      return false;
    }
   }

  selectedBodyPart(data:string){
    // console.log("check",data);
    let ref = this.bodyPart.indexOf(data); 
    if (ref > -1) { 
      return true;
    }
    else {
      return false;
    }
   }

  selectScan(event: any): void {
    this.scanfile = event.target.files[0];
    let scanFileSizeInMB = (event.target.files[0].size)/1024;
    if(scanFileSizeInMB/1024 >5){
      this.scanFileSizeError = true;
    }
  }

  selectReport(event: any): void {
    this.reportfile = event.target.files[0];
    let reportFileSizeInMB = (event.target.files[0].size)/1024;
    if(reportFileSizeInMB/1024 >5){
      this.reportFileSizeError = true;
    }
  }

  submitData(){
    // console.log('submit_data')

    let formData = new FormData();
    if(this.scanfile != undefined){
      formData.append("scan", this.scanfile, this.scanfile.name);
    }
    if(this.reportfile != undefined){
      formData.append("report", this.reportfile, this.reportfile.name);
    }
    formData.append("id", this.formObj.id);
    formData.append("email", this.formObj.email);
    formData.append("first_name", this.formObj.first_name);
    formData.append("type_of_scan", this.formObj.type_of_scan);
    formData.append("what_part_of_body", this.formObj.what_part_of_body);
    formData.append("comment", this.formObj.comment);
    formData.append("selected_package", this.formObj.selected_package);

    this.ngxLoader.start();

    this.getSecondOpinionService.updateUserDetails(formData).subscribe((res:any)=>{
      if (res.status == 200) {
        this.ngxLoader.stop();
        this._toastr.success('Completed !', 'Success');
      }
      else{
        this._toastr.error('Something wend wrong ! Please try again..','Error');
      }
    });
  }


  addSecondOpinionData(){
       this.showRegisterNowPage = false;
       this.router.navigate(['/']);        
  }


  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        this.stripeResponseObj=stripeToken;
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'ItSolutionStuff.com',
      description: '3 widgets',
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
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
  
      window.document.body.appendChild(script);
    }
  } 
  
}
