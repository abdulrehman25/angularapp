import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private router:Router){

  }
  blogDetails(){
    this.router.navigate(['/blogDetails'])
  }
}
