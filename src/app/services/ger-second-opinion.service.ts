import { Injectable ,Inject} from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GerSecondOpinionService {

  constructor(private httpClient:HttpClient, @Inject("BASE_URL") private baseUrl: string) { }
  Api_Base = this.baseUrl;

  generateVerificationCode(data:any){
    return this.httpClient.post(`${this.Api_Base}/get_user_verification_code`,data);
  }

  validateVerificationCode(data:any){
    return this.httpClient.post(`${this.Api_Base}/verify_user`,data);
  }

  userRegistration(data:any){
    return this.httpClient.post(`${this.Api_Base}/register`,data);
  }

  updateUserDetails(data:any){
    return this.httpClient.post(`${this.Api_Base}/update_user`,data);
  }

}
