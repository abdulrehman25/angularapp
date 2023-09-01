import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PaymentService } from 'src/app/services/payment.service';
import { PackageService } from 'src/app/services/package.service';
import { StripeService, StripeCardNumberComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent,
} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  @ViewChild(StripeCardNumberComponent) card: StripeCardNumberComponent;

  packageId : number = 0;
  packageName : string = '';
  amount: number = 0;
  customerObject : any = '';

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  stripeTest: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router:Router,
    private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private packageService:PackageService,
    private paymentService:PaymentService,
    private _toastr:ToastrService
  ) {}

  ngOnInit(): void {


    this.stripeTest = this.fb.group({
      customer_name:  [null, [Validators.required]],
      customer_email:  [null, [Validators.required]],
      amount:  [''],

    });
    this.activatedRoute.params.subscribe(params => {
      console.log('params',params['id'])
      this.packageService.get(params['id']).subscribe((res: any) => {
        if (res.status) {
          this.packageName = res.data.name;
          this.packageId = res.data.id;
          this.amount = res.data.price;
          this.stripeTest.get("amount").setValue(res.data.price);

        }
    });
  });
  console.log('amts', this.amount)

  
  }


  pay(): void {
    var formData = new FormData();
    const name = this.stripeTest.get('customer_name').value;
    this.customerObject= JSON.stringify({'name': this.stripeTest.get('customer_name').value, 'email': this.stripeTest.get('customer_email').value});
    console.log('customerobj',this.customerObject)
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          console.log('token',result.token.id);
          formData.append("stripeToken",result.token.id);
          formData.append("amount",this.stripeTest.get('amount').value);
          formData.append("product",JSON.stringify({'name' : this.packageName, 'id' : this.packageId}));
          formData.append("customer",this.customerObject);
          this.paymentService.makePayment(formData).subscribe((res: any) => {
            if (res.status) {
              this.ngxLoader.stop();
              this.router.navigate(['/payment-confirmation']);        
            }
            else{
              this._toastr.error('Something wend wrong ! Please try again..','Error');
            }
          });

        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
