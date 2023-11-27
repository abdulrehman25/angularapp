import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-patient-feedback',
  templateUrl: './patient-feedback.component.html',
  styleUrls: ['./patient-feedback.component.css']
})
export class PatientFeedbackComponent {
  userFeedbackList: any;
  p: number = 1;
  sortDir = 0;
  searchText: string = '';
  formObj: any = {
    id: ''
  }
  constructor(private adminServices: AdminService, private _toastr: ToastrService, private ngxLoader: NgxUiLoaderService, private router: Router) {
    this.getUsersFeedback();
    //this.sortArr('first_name');
  }

  getUsersFeedback() {
    this.ngxLoader.start();
    this.adminServices.getUsersFeedback().subscribe((res: any) => {
      if (res.status == '200') {
        console.log('welcome');
        this.userFeedbackList = res.data;
        this.ngxLoader.stop();
      }
    });
  }

  onSortClick() {
    this.sortArr('first_name');
  }

  sortArr(colName: any) {
    console.log(colName);
    this.userFeedbackList.sort((a: any, b: any) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }

  approveFeedback(id: number) {
    this.formObj.id = id;
    this.ngxLoader.start();
    this.adminServices.approveUserFeedback(this.formObj).subscribe((res: any) => {
      if (res.status === '200') {
        this.ngxLoader.stop();
        this._toastr.success(res.data, 'Success');
        this.getUsersFeedback();
        //this.router.navigate([`/admin/patientFeedback`])
      }
      else {
        this.ngxLoader.stop();
        this._toastr.success('Something went wrong', 'Error');
      }
    });

  }

  disApproveFeedback(id: number) {
    this.formObj.id = id;
    this.ngxLoader.start();
    this.adminServices.disApproveUserFeedback(this.formObj).subscribe((res: any) => {
      if (res.status === '200') {
        this.ngxLoader.stop();
        this._toastr.success(res.data, 'Success');
        this.getUsersFeedback();
        //this.router.navigate([`/admin/patientFeedback`])
      }
      else {
        this.ngxLoader.stop();
        this._toastr.success('Something went wrong', 'Error');
      }
    });
  }

  deleteFeedback(id: number) {
    this.ngxLoader.start();
    this.adminServices.deleteUserFeedback(id).subscribe((res: any) => {
      if (res.status === '200') {
        this.ngxLoader.stop();
        this._toastr.success(res.data, 'Success');
        this.getUsersFeedback();
      }
      else {
        this.ngxLoader.stop();
        this._toastr.success('Something went wrong', 'Error');
      }

    });
  }

}
