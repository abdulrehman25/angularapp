import { Injectable,Inject } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient:HttpClient,@Inject("BASE_URL") private baseUrl: string) { }
  Api_Base = this.baseUrl;
  insertRegisterationData(data:any){
    return this.httpClient.post(`${this.Api_Base}/register`,data);
  }

  loginUser(data:any){
    return this.httpClient.post(`${this.Api_Base}/login`,data);
  }

  isUserLoggedin():boolean {
    return !!localStorage.getItem('isUserLoggedin')
  }

  isAdmin():boolean {
    return !!localStorage.getItem('isAdmin');
    // if(this.isUserLoggedin()){
    // }else{
    //   return false
    // }
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
