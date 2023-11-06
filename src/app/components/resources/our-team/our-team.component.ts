import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  OurTeamPageTitle = "Out Team At RadiologyCheck"

  
  pageTitle: string = 'Meet Our Team of Medical Professionals | Radiology Check';
  description: string = 'To provide personalized second opinions we have assembled a team of dedicated medical professionals. Click to learn more about the Radiology Check team!  ';
  keyword: string = 'Dr Ali Rahman, radiology team, Dr Sonke Bartling, specialist radiologists';


}
