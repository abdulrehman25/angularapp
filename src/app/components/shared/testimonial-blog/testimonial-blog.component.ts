import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial-blog',
  templateUrl: './testimonial-blog.component.html',
  styleUrls: ['./testimonial-blog.component.css']
})
export class TestimonialBlogComponent {
  
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
        items: 1.5,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 5,
      },
    },
  };

}
