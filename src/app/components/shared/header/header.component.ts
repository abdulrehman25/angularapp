import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHide: boolean = false;
  showRadiologyPages: boolean = false;
  showNueRadiologyPages: boolean = false;
  EnglishCSS: boolean = false;
  GermanCSS : boolean = false;
  RussianCSS : boolean = false;
  ArabicCSS : boolean = false;
  ChineseCSS : boolean = false;
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
      if(this.selectedLanguage === "English"){
        this.EnglishCSS = true;
        this.GermanCSS = false;
        this.ArabicCSS = false;
        this.RussianCSS = false;
        this.ChineseCSS = false;
      }
      if(this.selectedLanguage === "German"){
        this.GermanCSS = true;
        this.ArabicCSS = false;
        this.RussianCSS = false;
        this.ChineseCSS = false;
        this.EnglishCSS = false;
      }
      if(this.selectedLanguage === "Arabic"){
        this.ArabicCSS = true;
        this.GermanCSS = false;
        this.RussianCSS = false;
        this.ChineseCSS = false;
        this.EnglishCSS = false;
      }
      if(this.selectedLanguage === "Russian"){
        this.RussianCSS = true;
        this.ArabicCSS = false;
        this.GermanCSS = false;
        this.ChineseCSS = false;
        this.EnglishCSS = false;
      }
      if(this.selectedLanguage === "Chinese"){
        this.ChineseCSS = true;
        this.ArabicCSS = false;
        this.GermanCSS = false;
        this.RussianCSS = false;
        this.EnglishCSS = false;
      }
      // console.log("this.selectedLanguage",this.selectedLanguage)
      // console.log("this.ChineseCSS",this.ChineseCSS)
      // console.log("this.ArabicCSS",this.ArabicCSS)
      // console.log("this.GermanCSS",this.GermanCSS)
      // console.log("this.RussianCSS",this.RussianCSS)
    }
  }
  clickedOutside(){
    this.showHide=false;
  }
  seeMoreRadiology(){
    this.showRadiologyPages=!this.showRadiologyPages;
  }
  seeMoreNeuroradiology(){
    this.showNueRadiologyPages=!this.showNueRadiologyPages;
  }
}
