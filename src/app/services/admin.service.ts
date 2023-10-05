import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private httpClient: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  Api_Base = this.baseUrl;

  getUsersList() {
    return this.httpClient.get(`${this.Api_Base}/users_list`);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.Api_Base}/delete_user/${id}`);
  }

  getUserReports(userId: number) {
    return this.httpClient.get(`${this.Api_Base}/get_user_report/${userId}`);
  }

  getUsersFeedback() {
    return this.httpClient.get(`${this.Api_Base}/get_users_feedback`);
  }

  approveUserFeedback(userId: number) {
    return this.httpClient.post(`${this.Api_Base}/approve_users_feeback`, userId);
  }

  deleteUserFeedback(userId: number) {
    return this.httpClient.delete(`${this.Api_Base}/delete_users_feedback/${userId}`);
  }
  disApproveUserFeedback(userId: number) {
    return this.httpClient.post(`${this.Api_Base}/dis_approve_users_feeback`, userId);
  }

  addNewPackage(packageData: any) {
    return this.httpClient.post(`${this.Api_Base}/package`, packageData);
  }

  getAppointmentListOpenCases(pageNumber: number) {
    return this.httpClient.get(`${this.Api_Base}/appointment-list/0?page=${pageNumber}`);
  }

  getAppointmentListCloseCases(pageNumber: number) {
    return this.httpClient.get(`${this.Api_Base}/appointment-list/1?page=${pageNumber}`);
  }

  MakeAppointmentStatusOpenToClose(data:any) {
    return this.httpClient.post(`${this.Api_Base}/book-appointment`, data);
  }
}
