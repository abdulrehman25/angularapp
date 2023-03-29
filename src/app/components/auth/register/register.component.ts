import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerObj: Register={
    name:'',
    email:"",
    radiology_type:"",
    contact_type:"",
    phone:"",
    password:""
  };

  constructor(private router: Router , private authService:AuthService, private _toastr: ToastrService){
    //console.log(this.registerObj);
  }

  insertRegisterData(){
    this.authService.insertRegisterationData(this.registerObj).subscribe((res:any)=>{
      if(res.status == 'error'){
        this._toastr.error(res.data,'Error');
      }else{
        this._toastr.success('Data is saved Successfully !','Register data');
        this.router.navigate(['/login']);
      }
      //this.router.navigate(['/']);
    })
   
  }

}
