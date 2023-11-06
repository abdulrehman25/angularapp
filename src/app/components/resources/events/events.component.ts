import { Component, Renderer2 } from '@angular/core';
import { LanguageServiceService } from 'src/app/services/language-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  EventPageTitle = 'Events, Innovation and Radiology News  ';
  topBannerBackgroundImg = '/assets/images/home-new-banner.jpg';

  
  pageTitle: string = "Events, Innovation and Radiology News | Radiology Check   ";
  description: string = "Radiology is an ever-evolving field. It's our ambition to always stay up-to-date, adapt the latest innovations, and put them into practice.   ";
  keyword: string = "events, blog, radiology news, training   ";


  currentLanguage: any;
  GermanCss: boolean = false;
  ArabicCss: boolean = false;
  RussianCss: boolean = false;
  ChineseCss: boolean = false;
  EnglishCss: boolean = false;

  constructor(private selectLanguageService: LanguageServiceService) {
    this.selectLanguageService.langObsevable.subscribe((res) => {
      if (res === 'German') {
        this.GermanCss = true;
        this.ArabicCss = false;
        this.RussianCss = false;
        this.ChineseCss = false;
        this.EnglishCss = false;
      }
      if (res === 'Arabic') {
        this.ArabicCss = true;
        this.GermanCss = false;
        this.RussianCss = false;
        this.ChineseCss = false;
        this.EnglishCss = false;
      }
      if (res === 'Russian') {
        this.RussianCss = true;
        this.GermanCss = false;
        this.ArabicCss = false;
        this.ChineseCss = false;
        this.EnglishCss = false;
      }
      if (res === 'Chinese') {
        this.ChineseCss = true;
        this.GermanCss = false;
        this.ArabicCss = false;
        this.RussianCss = false;
        this.EnglishCss = false;
      }
      if (res === 'English') {
        this.EnglishCss = true;
        this.ChineseCss = false;
        this.GermanCss = false;
        this.ArabicCss = false;
        this.RussianCss = false;
      }
    });
  }
}
