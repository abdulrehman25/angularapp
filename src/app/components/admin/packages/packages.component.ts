import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  packageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) {
    this.packageForm = this.formBuilder.group({
      name: ['', Validators.required,],
      price: ['', Validators.required],
      message: ['', Validators.required],
      feature: ['', Validators.required],
    });
  }
  onSubmit() {
      const formData = this.packageForm.value;
      console.log("this.packageForm.value;", this.packageForm.value)
      this.adminService.addNewPackage(formData).subscribe(res=>{
      })
  }
}
