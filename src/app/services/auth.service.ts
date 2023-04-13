import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Api_Base = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) { }

  insertRegisterationData(data:any){
    return this.httpClient.post(`${this.Api_Base}/register`,data);
  }

  loginUser(data:any){
    return this.httpClient.post(`${this.Api_Base}/login`,data);
  }

  resetPassword(data:any){
    return this.httpClient.post(`${this.Api_Base}/password/email?email=${data}`,data);
  }

  validateOtp(data:any){
    return this.httpClient.post(`${this.Api_Base}/password/code/check?code=${data}`,data);
  }

  updatePassword(data:any){
    return this.httpClient.post(`${this.Api_Base}/password/reset`,data);
  }
}
