import { Component } from '@angular/core';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  showProfile:boolean= false;
  toggleDashboardSidebar:boolean= false;

  openProfileBar(){
    this.showProfile= !this.showProfile;
  }

  openSideBar(){
    this.toggleDashboardSidebar= !this.toggleDashboardSidebar
  }
}

