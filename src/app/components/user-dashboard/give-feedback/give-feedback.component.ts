import { Component } from '@angular/core';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent {

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
 }

}
