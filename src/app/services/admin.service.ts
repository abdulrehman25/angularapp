import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Api_Base = 'http://127.0.0.1:8000/api';

  constructor(private httpClient:HttpClient) { }

  getUsersList(){
    return this.httpClient.get(`${this.Api_Base}/users_list`);
  }

  deleteUser(id:number){
    return this.httpClient.delete(`${this.Api_Base}/delete_user/${id}`);
  }

}
