import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  showBookAppointmentPage:boolean = true;
  addClass:string='';
  divStyle:string ='';

  constructor(private router: Router , private bookAppointmentDataService:BookAppointmentService, private _toastr: ToastrService) {  }

  ngOnInit() {
    this.showBookAppointmentPage = true;
  }

  addBookAppointmentData(){
    this.bookAppointmentDataService.insertBookAppointmentData(this.objectForBookingAppointment).subscribe((res:any)=>{
      if(res.status === 'success'){
        this._toastr.success('Your Appointment is Successfully Booked!','Booked Appointment');
        this.router.navigate(['/thankYou']);
      }else if (res.status !== 'success') {
        this.router.navigate(['/error404']);
      }
    })
  }

  setAppointmentDate(e:any) {
    this.objectForBookingAppointment.appointment_date = e;
  }

  closeBookAppointment() {
    this.showBookAppointmentPage = false;
    this.router.navigate(['/']);
  }

  showDiv(divClass:string,styleIndex:string){
    this.addClass = divClass;
    this.divStyle = 'z-index :'+styleIndex;
  }

}
