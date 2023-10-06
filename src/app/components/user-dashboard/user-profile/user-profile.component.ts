import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  email: any;
  dateOfBirth: any;
  updateUserProfileObj = {
    id: 0,
    first_name: '',
    middle_name: '',
    last_name: '',
    dob: '',
    past_medical_history: '',
    phone: '',
  };
  constructor(private userService: UserService) {
    const userData: any = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('userData', userData);
    this.updateUserProfileObj.id = userData.id;
    this.updateUserProfileObj.first_name = userData.first_name;
    this.updateUserProfileObj.last_name = userData.last_name;
    this.updateUserProfileObj.past_medical_history =
      userData.past_medical_history;
    this.email = userData.email;
  }

  // dateFormate() {
  //   let latest_date =this.datepipe.transform(this.dateOfBirth, 'dd/MM/yyyy');
  //   console.log("latest_date", latest_date)
  // }

  updateProfile() {
    console.log('function called', this.updateUserProfileObj);
    this.userService
      .updateUsersProfile(this.updateUserProfileObj)
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
