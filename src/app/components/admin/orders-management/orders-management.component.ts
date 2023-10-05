//import { Component } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
interface ApiResponse {
  data: {
    current_page: number;
    data: any[];
  };
  status: string;
}
@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})

export class OrdersManagementComponent {
  slideBoxVisible = false;
  dataToMarkCaseClose:any;
  openCasesList:any;
  closedCasesList:any;
  // closedCasesList:ApiResponse={
  //   data: {
  //     current_page: 0,
  //     data: [], 
  //   },
  //   status: ""
  // };
  // @ViewChild('iconClick') iconClick: ElementRef;
  // @ViewChild('slideBox') slideBox: ElementRef;
  // @ViewChild('slideClose') slideClose: ElementRef;
  // ngAfterViewInit() {
  //   this.iconClick.nativeElement.addEventListener('click', () => {
  //     this.slideBox.nativeElement.style.display = 'block';
  //   });
  //   this.slideClose.nativeElement.addEventListener('click', () => {
  //     this.slideBox.nativeElement.style.display = 'none';
  //   });
  // }

  constructor(private adminService: AdminService){}
  
  showSlideBox() {
    console.log(" show slide function called")
    this.slideBoxVisible = true;
  }
  hideSlideBox() {
    this.slideBoxVisible = false;
  }
  getAppointmentListOpenCases(pageNumber:number){
    this.adminService.getAppointmentListOpenCases(pageNumber).subscribe(res=>{
      this.openCasesList = res;
      console.log("getAppointmentListOpenCases()", this.openCasesList);
    })
  }
  getAppointmentListCloseCases(pageNumber:number){
    this.adminService.getAppointmentListCloseCases(pageNumber).subscribe(res=>{
      this.closedCasesList = res;
      console.log("getAppointmentListOpenCases()", this.closedCasesList);
    })
  }

  MakeAppointmentStatusOpenToClose(){
    this.adminService.MakeAppointmentStatusOpenToClose(this.dataToMarkCaseClose).subscribe(res=>{
      console.log("getAppointmentListOpenCases()", res);
    })
  }
}

