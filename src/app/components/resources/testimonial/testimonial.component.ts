import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  TestimonialPageTitle = "Testimonials"

  
  pageTitle: string = "Testimonials | The People We've Helped | Radiology Check";
  description: string = "Hear from our patients take their health into their own hands. Our second opinions help diagnose and support patients to get the right treatment plan.   ";
  keyword: string = 'testimonials, reviews, customer stories';

}
