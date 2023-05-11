import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent {
  p: number = 1;
  sortDir = 0;
  searchText: string = '';
  userList: any;

  constructor(private adminServices: AdminService, private _toastr: ToastrService, private ngxLoader: NgxUiLoaderService, private router: Router) {
    this.getUserListData();
    //this.sortArr('first_name');
  }

  getUserListData() {
    this.ngxLoader.start();
    this.adminServices.getUsersList().subscribe((res: any) => {
      if (res.status == '200') {
        this.userList = res.data;
        this.ngxLoader.stop();
      }
    });
  }

  onSortClick() {
    this.sortArr('first_name');
  }

  sortArr(colName: any) {
    console.log(colName);
    this.userList.sort((a: any, b: any) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }


}
