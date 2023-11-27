import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  showProfile:boolean= false;
  toggleDashboardSidebar:boolean= false;
  showAdminHead: boolean = true;
  userName:string | null='';

  constructor(private router:Router){}


  ngOnInit(){
   this.userName = localStorage.getItem("userName");
  }

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
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

}
