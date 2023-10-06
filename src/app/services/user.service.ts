import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  Api_Base = this.baseUrl;

  updateUsersProfile(data:any) {
    return this.httpClient.post(`${this.Api_Base}/update_user`, data);
  }
}
