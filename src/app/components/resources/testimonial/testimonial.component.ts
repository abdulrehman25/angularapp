import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  TestimonialPageTitle = "Testimonials Of RadiologyCheck "
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
}
