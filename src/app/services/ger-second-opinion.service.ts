import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GerSecondOpinionService {

  Api_Base = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) { }

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
