import { Injectable,Inject } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  requestOptions: any;

  constructor(private httpClient:HttpClient,@Inject("BASE_URL") private baseUrl: string) {
    let auth_token = "9fJJ53VbEi6ZVLUe77L6QH0raJ7eWNoxUYYpeVKdP56YoYoirRivncTYBoRw";

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    this.requestOptions = { headers: headers };
  }
  Api_Base = this.baseUrl;

  insertBookAppointmentData(data:any){
    return this.httpClient.post(`${this.Api_Base}/book-appointment`,data);
  }

  
}
