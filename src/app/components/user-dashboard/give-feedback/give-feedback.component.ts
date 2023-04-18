import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserFeedback } from 'src/app/models/user-feedback';
import { UserFeedbackService } from 'src/app/services/user-feedback.service';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent {

formObj : UserFeedback = {
  user_id:'',
  first_name:'',
  last_name:'',
  email :'',
  rating:0,
  feedback:'',
  image: '',
};
userData : any;
file : any;
constructor(private router: Router , private userFeedbackService:UserFeedbackService, private _toastr: ToastrService) {  }

starList: boolean[] = [true,true,true,true,true];
rating:number=0;  
setStar(data:any){
      this.rating=data+1;                               
      for(let i=0;i<=4;i++){  
        if(i<=data){  
          this.starList[i]=false;  
        }  
        else{  
          this.starList[i]=true;  
        }  
     }  
 };

 selectedFiles?: FileList;
 currentFile?: File;
 preview = '';

 selectFile(event: any): void {
   this.preview = '';
   this.selectedFiles = event.target.files;
   this.file = event.target.files[0];
   if (this.selectedFiles) {
     const file: File | null = this.selectedFiles.item(0);
    
     if (file) {
       this.preview = '';
       this.currentFile = file;
       const reader = new FileReader();

       reader.onload = (e: any) => {
        console.log(e);
         this.preview = e.target.result;
       };

       reader.readAsDataURL(this.currentFile);
     }
   }
 }

 removeImage(){
  this.preview='';
 }

 insertFeedbackData(){
    this.formObj.rating = this.rating;
    this.userData = localStorage.getItem('user');
    this.formObj.user_id = JSON.parse(this.userData).id;
    this.formObj.image = (this.file);
    //console.log(this.formObj);

    var formData = new FormData();
    formData.append("image", this.file, this.file.name);
    formData.append("email", this.formObj.email);
    formData.append("first_name", this.formObj.first_name);
    formData.append("last_name", this.formObj.last_name);
    formData.append("user_id", this.formObj.user_id);
    formData.append("feedback", this.formObj.feedback);
    formData.append("rating", `${this.formObj.rating}`);

    this.userFeedbackService.insertUserFeedbackData(formData).subscribe((res:any)=>{
      if(res.status === 'error'){
        this._toastr.error(res.data,'Error');
      }
      if(res.status === 'success'){
        this._toastr.success('Feedback added Successfully !','User Feedback');
        this.router.navigate(['/userDashboard/userHome']);
      }
    });
  
 }

}
