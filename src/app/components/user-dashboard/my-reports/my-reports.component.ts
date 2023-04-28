import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.css']
})
export class MyReportsComponent {
  reportfile:any;
  reportFileSizeError:boolean=false;

  objectForMyReport = {title:'',report:''};


  selectReport(event: any): void {
    this.reportfile = event.target.files[0];
    let reportFileSizeInMB = (event.target.files[0].size)/1024;
    if(reportFileSizeInMB/1024 >2){
      this.reportFileSizeError = true;
    }
  }

  addMyReportData(){
    console.log("dsds");
  }

}
