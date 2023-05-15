import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/services/admin.service';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';


@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent {
  userId: number = 0;
  titleArr: any;
  reportList: any;

  constructor(private route: ActivatedRoute, private ngxLoader: NgxUiLoaderService, private adminServices: AdminService) {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUserReport(this.userId);
  }

  loadUserReport(id: number) {
    this.ngxLoader.start();
    this.adminServices.getUserReports(id).subscribe((res: any) => {
      if (res.status == '200') {
        console.log("200 block");

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
        console.log("else block");
        this.ngxLoader.stop();
        this.titleArr = [];
        this.reportList = [];
      }
    });
  }

  getBase64Image(img: any) {
    var canvas = document.createElement('canvas');
    canvas.classList.add('myStyle');
    console.log(img.width, 'x', img.height);
    canvas.width = 446;
    canvas.height = 631;
    var ctx: any = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.crossOrigin = 'Anonymous';
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
