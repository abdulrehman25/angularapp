import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MyReportService } from 'src/app/services/my-report.service';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.css']
})
export class MyReportsComponent {
  reportList:any;
  reportfile:any;
  reportFileSizeError:boolean=false;
  reportRequire:boolean=false;
  userData:any;
  objectForMyReport = {user_id:'',title:'',report:''};
  titleArr:any;
  constructor(private ngxLoader:NgxUiLoaderService,private _toastr:ToastrService, private router:Router, private myReportService: MyReportService){
    this.userData = localStorage.getItem('user');
    this.getUserReports();
  }

  getUserReports(){
    this.ngxLoader.start();
    this.myReportService.getUserReports(JSON.parse(this.userData).id).subscribe((res:any)=>{
      if(res.status == '200'){
        console.log(res.data);
        let spaghettiProperties = Object.keys(res.data);
        let neededArray = [];
        let i = 0;
        for (let prop of spaghettiProperties ) { 
            neededArray.push(res.data[prop]);
            neededArray[i] = prop;
            i++;
        }
        console.log("============",neededArray)
        // let firstKey = Object.keys(res.data)[0]; // "plainKey"
        // let firstValue = Object.values(res.data)[0]; // "plain value"
        // console.log(firstKey);
        // console.log(res.data[neededArray[0]]);
        this.titleArr = neededArray;
        this.reportList = res.data;
        this.ngxLoader.stop();
      }
    });
  }

  selectReport(event: any): void {
    this.reportfile = event.target.files[0];
    let reportFileSizeInMB = (event.target.files[0].size)/1024;
    if(reportFileSizeInMB/1024 >2){
      this.reportFileSizeError = true;
    }
  }

  addMyReportData(){
    
    this.objectForMyReport.user_id = JSON.parse(this.userData).id;

    var formData = new FormData();
    if(this.reportfile != undefined){
      formData.append("report", this.reportfile, this.reportfile.name);
    }
    formData.append("user_id", this.objectForMyReport.user_id);
    formData.append("title", this.objectForMyReport.title);
    console.log(formData);
    this.ngxLoader.start();

    this.myReportService.uploadMyReport(formData).subscribe((res:any)=>{
      if (res.status == 'success') {
        this.ngxLoader.stop();
        this._toastr.success('Report Updated Successfully !', 'Success');
        this.router.navigate(['/userDashboard/userHome']);   
      }
      else{
        this.reportRequire = true;
        this.ngxLoader.stop();
        this._toastr.error('Something wend wrong ! Please try again..','Error');
      }
    });

  }

}
