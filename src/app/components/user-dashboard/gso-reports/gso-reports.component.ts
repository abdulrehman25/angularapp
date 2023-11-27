import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MyReportService } from 'src/app/services/my-report.service';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

@Component({
  selector: 'app-my-reports',
  templateUrl: './gso-reports.component.html',
  styleUrls: ['./gso-reports.component.css']
})
export class GsoReportsComponent {
  reportList: any;
  reportfile: any;
  reportFileSizeError: boolean = false;
  reportRequire: boolean = false;
  userData: any;
  objectForMyReport = { user_id: '', title: '', report: '' };
  titleArr: any;
  constructor(private ngxLoader: NgxUiLoaderService, private _toastr: ToastrService, private router: Router, private myReportService: MyReportService) {
    this.userData = localStorage.getItem('user');
    //this.getUserReports();
    this.getUserGsoReports();
  }


  getUserReports() {
    this.ngxLoader.start();
    this.myReportService.getUserReports(JSON.parse(this.userData).id).subscribe((res: any) => {
      if (res.status == '200') {
        let spaghettiProperties = Object.keys(res.data);
        let neededArray = [];
        let i = 0;
        for (let prop of spaghettiProperties) {
          neededArray.push(res.data[prop]);
          neededArray[i] = prop;
          i++;
        }

        this.titleArr = neededArray;
        this.reportList = res.data;
        this.ngxLoader.stop();
      } else {
        this.ngxLoader.stop();
        this.titleArr = [];
        this.reportList = [];
      }
    });
  }
  getUserGsoReports() {
    this.ngxLoader.start();
    this.myReportService.getUserGsoReports(JSON.parse(this.userData).id).subscribe((res: any) => {
      if (res.data.length) {
        let spaghettiProperties = Object.keys(res.data);
        let neededArray = [];
        let i = 0;
        for (let prop of spaghettiProperties) {
          neededArray.push(res.data[prop]);
          neededArray[i] = parseInt(prop);
          i++;
        }
        this.titleArr = neededArray;
        this.reportList = res.data;
        this.ngxLoader.stop();
      } else {
        this.ngxLoader.stop();
        this.titleArr = [];
        this.reportList = [];
      }
    });
  }

  selectReport(event: any): void {
    this.reportfile = event.target.files[0];
    let reportFileSizeInMB = (event.target.files[0].size) / 1024;
    if (reportFileSizeInMB / 1024 > 2) {
      this.reportFileSizeError = true;
    }
  }

  addMyReportData() {

    this.objectForMyReport.user_id = JSON.parse(this.userData).id;

    var formData = new FormData();
    if (this.reportfile != undefined) {
      formData.append("report", this.reportfile, this.reportfile.name);
    }
    formData.append("user_id", this.objectForMyReport.user_id);
    formData.append("title", this.objectForMyReport.title);
    console.log(formData);
    this.ngxLoader.start();

    this.myReportService.uploadMyReport(formData).subscribe((res: any) => {
      if (res.status == 'success') {
        this.ngxLoader.stop();
        this._toastr.success('Report Updated Successfully!', 'Success');
        this.router.navigate(['/userDashboard/myReports']);
      }
      else {
        this.reportRequire = true;
        this.ngxLoader.stop();
        this._toastr.error('Something wend wrong ! Please try again..', 'Error');
      }
    });

  }



  getBase64Image(img: any) {
    var canvas = document.createElement('canvas');
    canvas.classList.add('myStyle');
    canvas.width = 446;
    canvas.height = 631;
    var ctx: any = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return { img: dataURL, width: canvas.width, height: canvas.height };
  }


  downLoadImageInPdf(id: number, reportName: any) {
    console.log("==id:==", id);
    var base64 = document.getElementById('imageid');
    let doc = new jsPDF('p', 'px', 'a4');
    var width = doc.internal.pageSize;
    console.log(width);

    let imageData: any = this.getBase64Image(
      document.getElementById('image' + id)
    );

    doc.addImage(
      imageData.img,
      'JPG',
      10,
      10,
      imageData.width,
      imageData.height
    );
    //doc.addPage();

    doc.save(reportName + '.pdf');
  }



}
