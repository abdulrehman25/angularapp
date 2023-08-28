import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PaymentService } from 'src/app/services/payment.service';
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
    private http: HttpClient,
    private router:Router,
    private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentService:PaymentService,
    private _toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      customer_name:  [null, [Validators.required]],
      amount: [50]
    });
  }


  pay(): void {
    var formData = new FormData();
    const name = this.stripeTest.get('customer_name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          formData.append("stripeToken",result.token.id);
          formData.append("amount",this.stripeTest.get('amount').value);
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
