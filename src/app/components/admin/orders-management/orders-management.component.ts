//import { Component } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})
export class OrdersManagementComponent {
  slideBoxVisible = false;
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
  
  showSlideBox() {
    console.log(" show slide function called")
    this.slideBoxVisible = true;
  }
  hideSlideBox() {
    this.slideBoxVisible = false;
  }
}

