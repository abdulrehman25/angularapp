import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  requestOptions: any;
  Api_Base = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) {
    let auth_token = "9fJJ53VbEi6ZVLUe77L6QH0raJ7eWNoxUYYpeVKdP56YoYoirRivncTYBoRw";

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });

    this.requestOptions = { headers: headers };
  }

  insertBookAppointmentData(data:any){
    return this.httpClient.post(`${this.Api_Base}/book-appointment`,data);
  }

  
}
