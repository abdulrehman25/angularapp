import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BookAppointment } from 'src/app/models/book-appointment';
import { Router } from '@angular/router';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  objectForBookingAppointment: BookAppointment={
    name:'',
    visit_type:"",
    appointment_reason:"",
    appointment_date:"",
    appointment_time:"",
    appointment_email:"",
    appointment_number:"",
  
  };

  today = new Date().toISOString().slice(0, 10);

  constructor(private router: Router , private bookAppointmentDataService:BookAppointmentService, private _toastr: ToastrService) {  }

  addBookAppointmentData(){
    this.bookAppointmentDataService.insertBookAppointmentData(this.objectForBookingAppointment).subscribe((res:any)=>{
      if(res.status === 'success'){
        this._toastr.success('Your Appointment is Successfully Booked!','Booked Appointment');
        this.router.navigate(['/thankYou']);
      }else if(res.status == 'error'){
        this._toastr.error('Some error occurred..','Error');
      }else if (res.status !== 'success') {
        this.router.navigate(['/error404']);
      }
    })
  }

  setAppointmentDate(e:any) {
    this.objectForBookingAppointment.appointment_date = e;
  }

  imgUrls = [
    { id: '1', url: '../../../assets/images/testi-user.png' },
    { id: '2', url: '../../../assets/images/testi-user.png' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    margin : 30,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };


    customOptions2: OwlOptions = {
      items: 2,
    loop: true,
    autoplay: false,
    center: true,
    autoHeight: true,
    dots: false,
    margin : 10,
    responsive:{
      0:{
           items:1,
       },
      600:{
           items:2,
       }
    }
  };
}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animation-active");
    } else {
      reveals[i].classList.remove("animation-active");
    }
  }
}
window.addEventListener("scroll", reveal);
