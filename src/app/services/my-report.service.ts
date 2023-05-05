import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyReportService {
  Api_Base = 'http://127.0.0.1:8000/api';
  constructor(private httpClient:HttpClient) { }

  uploadMyReport(data:any){
    return this.httpClient.post(`${this.Api_Base}/user_reports`,data);
  }

  getUserReports(userId:number){
    return this.httpClient.get(`${this.Api_Base}/get_user_report/${userId}`);
  }
}
