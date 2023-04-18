import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-second-opinion',
  templateUrl: './get-second-opinion.component.html',
  styleUrls: ['./get-second-opinion.component.css']
})
export class GetSecondOpinionComponent {

  showRegisterNowPage:boolean = true;
  addClass:string='';
  divStyle:string ='';

  constructor(private router:Router){}

  ngOnInit() {
    // this.showRegisterNowPage = true;
  }

  closeGetSecondOpinion() {
    this.showRegisterNowPage = false;
    this.router.navigate(['/']);
  }

  showDiv(divClass:string,styleIndex:string){
    console.log("before setting", divClass, styleIndex)
    this.addClass = divClass;
    this.divStyle = `z-index : ${styleIndex}`;
    console.log("after setting", this.addClass, this.divStyle)

  }

}
