import { Component, HostListener, Renderer2 } from '@angular/core';
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
  homePageBannerImg="../../../assets/images/new_homepage/PP.png";
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

  constructor(private router: Router , private bookAppointmentDataService:BookAppointmentService, private _toastr: ToastrService, private renderer: Renderer2) {  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.revealElements();
  }
  revealElements() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    const elementVisible2 = 300;
    reveals.forEach((element:Element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        this.renderer.addClass(element, "animation-active");
      } else {
        this.renderer.removeClass(element, "animation-active");
      }
      if (elementTop < windowHeight - elementVisible2) {
        this.renderer.addClass(element, "animation-active2");
      }
      else {
        this.renderer.removeClass(element, "animation-active2");
      }
    });
  }
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
    loop: true,
    autoplay: false,
    center: false,
    autoHeight: true,
    dots: false,
    margin : 10,
    responsive:{
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    }
  };
}
/*--function reveal() {
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
}--*/