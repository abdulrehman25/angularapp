import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  showProfile:boolean= false;
  toggleDashboardSidebar:boolean= false;

  constructor(private router:Router){ }
  openProfileBar(){
    this.showProfile= !this.showProfile;
  }

  openSideBar(){
    this.toggleDashboardSidebar= !this.toggleDashboardSidebar
  }

  logOut(){
    localStorage.removeItem('isloggedin');
    this.router.navigate(['']);
  }
}

