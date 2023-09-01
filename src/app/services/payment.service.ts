import { Injectable ,Inject} from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient, @Inject("BASE_URL") private baseUrl: string) { }
  Api_Base = this.baseUrl;


  makePaymentIntent(data:any){

    console.log('data',data)
    return this.httpClient.post(`${this.Api_Base}/make_payment_intent`,data);
  }


  makePayment(data:any){

    console.log('data',data)
    return this.httpClient.post(`${this.Api_Base}/make_payment`,data);
  }


}
