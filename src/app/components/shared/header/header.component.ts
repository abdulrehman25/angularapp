import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHide: boolean = false;
  showPages: boolean = false;
  selectedLanguage = 'English';
  selectedLanguageCode = 'gb';
  selectedCountryCode = 'gb';
  languageList = [
    { language: 'English', languageCode: 'en', countryCode: 'gb' },
    { language: 'German', languageCode: 'de', countryCode: 'de' },
    { language: 'Arabic', languageCode: 'ar', countryCode: '' },
    { language: 'Russian', languageCode: 'ru', countryCode: 'ru' },
    { language: 'Chinese', languageCode: 'zh', countryCode: 'cn' },
  ];
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de', 'ar', 'ru', 'zh']);
    translate.setDefaultLang('en');
  }

  // switchLang(lang:string) {
  //   this.translate.use(lang);
  // }

  showHideDropdown() {
    this.showHide = !this.showHide;
  }

  switchLang(clickedLanguage: any) {
    if (clickedLanguage) {
      this.selectedLanguage = clickedLanguage.language;
      this.selectedLanguageCode = clickedLanguage.languageCode;
      this.selectedCountryCode = clickedLanguage.countryCode;
      this.translate.use(clickedLanguage.languageCode);
      this.showHide=false;
    }
  }
  clickedOutside(){
    this.showHide=false;
  }
  seeMore(){
    this.showPages=!this.showPages;
  }
}
