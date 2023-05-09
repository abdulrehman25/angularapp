import { Injectable,Inject } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyReportService {

  constructor(private httpClient:HttpClient, @Inject("BASE_URL") private baseUrl: string) { }
  Api_Base = this.baseUrl;

  uploadMyReport(data:any){
    return this.httpClient.post(`${this.Api_Base}/user_reports`,data);
  }

  getUserReports(userId:number){
    return this.httpClient.get(`${this.Api_Base}/get_user_report/${userId}`);
  }
}
