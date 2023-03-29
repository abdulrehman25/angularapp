import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: Login = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService, private _toastr: ToastrService) {}

  loginUserData(){
    this.authService.loginUser(this.loginObj).subscribe((res:any)=>{
      if(res.message==='success'){
        localStorage.setItem('isloggedin','true');
        this._toastr.success('Logged In Successfully !','Login');
        this.router.navigate(['/userDashboard']);
      }else{
        this._toastr.error('Log In Fail !','Error');
      }
    });
  }

}
