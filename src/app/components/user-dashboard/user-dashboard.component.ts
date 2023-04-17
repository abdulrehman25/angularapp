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
  // userProfile="userProfile";

  constructor(private router:Router){ }
  openProfileBar(){
    this.showProfile= !this.showProfile;
  }
  clickedOutside(): void {
    this.showProfile=false;
  }

  openSideBar(){
    this.toggleDashboardSidebar= !this.toggleDashboardSidebar
  }

  redirectAndClose(url:string){
    // console.log(url)
    if(this.showProfile){
      this.router.navigate([`/userDashboard/${url}`])
      this.showProfile=false;
      // console.log("called")
    }
  }

  logOut(){
    localStorage.removeItem('isloggedin');
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}

