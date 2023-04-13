import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-varify-otp',
  templateUrl: './varify-otp.component.html',
  styleUrls: ['./varify-otp.component.css']
})
export class VarifyOtpComponent {

  otpData={ otp:"" };

  constructor(private router : Router, private authservice : AuthService, private _toastr : ToastrService){

  }

  verifyOtp(){
    this.authservice.validateOtp(this.otpData.otp).subscribe((res:any)=>{

      if(res.status == 404){
        this._toastr.error(res.message,'Error');
      }

      if(res.status == 200){
        localStorage.setItem('resetOtp',this.otpData.otp);
        this._toastr.success('Password Code is valid !','Success');
        this.router.navigate(['/updatePassword']);

      }

    });

  }

}
