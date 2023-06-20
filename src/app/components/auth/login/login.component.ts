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
  fieldTextType = true;
  constructor(private router: Router, private authService: AuthService, private _toastr: ToastrService) { }
  ngOnInit() {
  }
  loginUserData() {
    this.authService.loginUser(this.loginObj).subscribe((res: any) => {
      console.log(res);
      if (res.message === 'success') {
        if (res.data.is_admin === "false") {
          localStorage.setItem('isUserLoggedin', 'true');
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('userName', res.data.first_name);
          this._toastr.success('Logged In Successfully !', 'Logged In');
          this.router.navigate(['/userDashboard']);
        } else if (res.data.is_admin === "true") {
          localStorage.removeItem('isUserLoggedin');
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('userName', res.data.first_name);
          localStorage.setItem('isAdmin', res.data.is_admin);
          this._toastr.success('Logged In Successfully !', 'Logged In');
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['']);
        }
      } else {
        this._toastr.error('Log In Fail !', 'Error');
      }
    });
  }

  toggleShowPassword() {
    this.fieldTextType = !this.fieldTextType;
  }

}
