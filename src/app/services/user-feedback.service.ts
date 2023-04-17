import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {

  Api_Base = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) { }

  insertUserFeedbackData(data:any){
    return this.httpClient.post(`${this.Api_Base}/users_feeback`,data);
  }

}
