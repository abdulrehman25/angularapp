import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  updatePasswordObj={ 
    code:"",
    password:"",
    password_confirmation:""
 };
 code = JSON.parse(localStorage.getItem('resetOtp') || '');


  constructor(private router : Router, private authservice : AuthService, private _toastr : ToastrService){

  }

  updatePassword(){
    this.updatePasswordObj.code = this.code;
    this.authservice.updatePassword(this.updatePasswordObj).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 404){
        this._toastr.error(res.message,'Error');
      }

      if(res.status == 200){
        this._toastr.success('Password has been updated Successfully !','Success');
        localStorage.removeItem('resetOtp');
        this.router.navigate(['/login']);
      }

    });

  }
}
