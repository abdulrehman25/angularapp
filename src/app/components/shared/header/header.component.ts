import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  languageList = [
    { language: 'English', languageCode: 'en' },
    { language: 'German', languageCode: 'de' },
    { language: 'Arabic', languageCode: 'ar' },
    { language: 'Russian', languageCode: 'ru' },
    { language: 'Chinese', languageCode: 'zh' },
  ];
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de', 'ar', 'ru', 'zh']);
    translate.setDefaultLang('en');
  }
  switchLang(lang:string) {
    this.translate.use(lang);
  }
}
