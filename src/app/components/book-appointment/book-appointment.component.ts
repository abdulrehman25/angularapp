import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { BookAppointment } from 'src/app/models/book-appointment';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})

export class BookAppointmentComponent {
 objectForBookingAppointment: BookAppointment={
  name:'',
  visit_type:"",
  appointment_reason:"",
  appointment_date:"",
  appointment_time:"",
  appointment_email:"",
  appointment_number:"",

  };
  userName: string = "jbond";
  constructor(private router: Router , private bookAppointmentDataService:BookAppointmentService, private _toastr: ToastrService) {
    console.log(this.objectForBookingAppointment);
  }

  ngOnInit() {
    $('.book-appointment-page').show();
    $('body').addClass('appointment-page');
  }

  addBookAppointmentData(appointmentData:NgForm){
    this.bookAppointmentDataService.insertBookAppointmentData(this.objectForBookingAppointment).subscribe((res)=>{
      console.log('result',res);

      this._toastr.success('Data is saved Successfully !','Book Appointment data');
      this.router.navigate(['/']);
    })
  }

  setAppointmentDate(e:any) {
    this.objectForBookingAppointment.appointment_date = e;
  }

  closeBookAppointment() {
    //$('.close-book-appointment-page').click(function () {
      $('.book-appointment-page').hide();
      $('body').removeClass('appointment-page');
    //});
    this.router.navigate(['/']);
  }

  showStepTwo() {
    $('.step2').show().css('z-index', '2');
  }

  showStepThree() {
    $('.step3').show().css('z-index', '3');
  }

  showStepFour() {
    $('.step4').show().css('z-index', '4');
  }

  showStepFive() {
    $('.step5').show().css('z-index', '5');
  }

  showStepSix() {
    $('.step6').show().css('z-index', '6');
  }

  showStepSeven() {
    $('.step7').show().css('z-index', '7');
  }

  showStepEight() {
    $('.step8').show().css('z-index', '8');
  }

  backToStepTwo() {
    $('.step7').hide();
  }

  backToStepThree() {
    $('.step6').hide();
  }
  backToStepFour() {
    $('.step5').hide();
  }
  backToStepFive() {
    $('.step4').hide();
  }
  backToStepSix() {
    $('.step3').hide();
  }
  backToStepSeven() {
    $('.step2').hide(); 
  }
}
