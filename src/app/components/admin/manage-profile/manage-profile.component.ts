import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  p: number = 1;
  sortDir = 0;
  searchText: string='';
  userList:any;
  constructor(private adminServices:AdminService,private _toastr:ToastrService,private ngxLoader: NgxUiLoaderService){
    this.getUserListData();
    //this.sortArr('first_name');
  }

  ngOnInit() { }
  

  getUserListData(){
    this.ngxLoader.start();
    this.adminServices.getUsersList().subscribe((res:any)=>{
        if(res.status == '200'){
          this.userList = res.data;
          this.ngxLoader.stop();
        }
    });
  }

  deleteUser(id:number){
    this.ngxLoader.start();
    this.adminServices.deleteUser(id).subscribe((res:any)=>{
      if(res.status == '200'){
        this.ngxLoader.stop();
        this._toastr.success('User deleted Successfully !!', 'User Delete');   

      }else{
        this._toastr.error(res.data, 'Error');   
      }
      this.getUserListData();
    });
  }


  onSortClick() {
    this.sortArr('first_name');
  }

  sortArr(colName:any){
    console.log(colName);
    this.userList.sort((a:any,b:any)=>{
      a= a[colName].toLowerCase();
      b= b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }


}
