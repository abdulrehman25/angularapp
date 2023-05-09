import { Injectable,Inject } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
<<<<<<< Updated upstream
=======
  Api_Base = 'https://radiologycheck.com.185-178-193-44.225.hosttech.eu/radiologyCheck/api';
>>>>>>> Stashed changes

  constructor(private httpClient:HttpClient,@Inject("BASE_URL") private baseUrl: string) { }
  
  Api_Base = this.baseUrl;

  getUsersList(){
    return this.httpClient.get(`${this.Api_Base}/users_list`);
  }

  deleteUser(id:number){
    return this.httpClient.delete(`${this.Api_Base}/delete_user/${id}`);
  }

}
