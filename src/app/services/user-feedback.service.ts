import { Injectable, Inject } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {

  constructor(private httpClient:HttpClient, @Inject("BASE_URL") private baseUrl: string) { }
  Api_Base = this.baseUrl;

  insertUserFeedbackData(data:any){
    return this.httpClient.post(`${this.Api_Base}/users_feeback`,data);
  }

}
