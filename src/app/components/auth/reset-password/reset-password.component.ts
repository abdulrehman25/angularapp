import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  emailData={ email:"" };

  constructor(private router : Router, private authservice : AuthService, private _toastr : ToastrService){
    //console.log("Email Data : ",this.emailData.email);
  }

  resetPassword(){
    this.authservice.resetPassword(this.emailData.email).subscribe((res:any)=>{
      console.log(res);
      if(res.email){
        this._toastr.error(res.email[0],'Error');
      }

      if(res.message){
        this._toastr.success(res.message,'Success');
        this.router.navigate(['/varifyotp']);
      }

    });
    console.log("Email Data : ",this.emailData.email);
  }
}
