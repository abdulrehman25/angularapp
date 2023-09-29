import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  loginToDashboard:boolean=false;
  isHomePage: boolean = false;

  aboutNavItem: boolean = false;
  isAboutPage: boolean = false;
  isTestimonialPage: boolean = false;
  isFaqPage: boolean = false;
  isContactPage: boolean = false;
  isOurTeamPage: boolean = false;

  ourServicesNavItem: boolean = false;
  isAbdominalRadiologyPage: boolean = false;
  isProstateRadiologyPage: boolean = false;
  isInterventionalRadiologyGuidancePage: boolean = false;
  isWomensImagingPage: boolean = false;
  isPediatricRadiologyPage: boolean = false;
  isRadiologyPage: boolean = false;
  isBrainTumorsPage: boolean = false;
  isBackPainPage: boolean = false;
  isSpinalTraumaPage: boolean = false;
  isSbrainAndSpinePage: boolean = false;
  isHeadTraumaPage: boolean = false;
  isNeuroradiologyPage: boolean = false;

  resourcesNavItem: boolean = false;
  isEventsPage: boolean = false;
  isSproBonoPage: boolean = false;
  isPricingPage: boolean = false;

  showHide: boolean = false;
  showRadiologyPages: boolean = false;
  showNueRadiologyPages: boolean = false;
  EnglishCSS: boolean = false;
  GermanCSS: boolean = false;
  RussianCSS: boolean = false;
  ArabicCSS: boolean = false;
  ChineseCSS: boolean = false;
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
  constructor(
    public translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    translate.addLangs(['en', 'de', 'ar', 'ru', 'zh']);
    translate.setDefaultLang('en');
    const loggedInUser = localStorage.getItem("userName");
    console.log("loggedInUser", loggedInUser);
    if(loggedInUser !== undefined && loggedInUser !== null && loggedInUser !==''){
      this.loginToDashboard = true;
      console.log("loggedInUser if", loggedInUser, this.loginToDashboard);
    }else{
      this.loginToDashboard = false;
      console.log("loggedInUser if", loggedInUser, this.loginToDashboard);

    }

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
      this.showHide = false;
      if (this.selectedLanguage === 'English') {
        this.EnglishCSS = true;
        this.GermanCSS = false;
        this.ArabicCSS = false;
        this.RussianCSS = false;
        this.ChineseCSS = false;
      }
      if (this.selectedLanguage === 'German') {
        this.GermanCSS = true;
        this.ArabicCSS = false;
        this.RussianCSS = false;
        this.ChineseCSS = false;
        this.EnglishCSS = false;
      }
      if (this.selectedLanguage === 'Arabic') {
        this.ArabicCSS = true;
        this.GermanCSS = false;
        this.RussianCSS = false;
        this.ChineseCSS = false;
        this.EnglishCSS = false;
      }
      if (this.selectedLanguage === 'Russian') {
        this.RussianCSS = true;
        this.ArabicCSS = false;
        this.GermanCSS = false;
        this.ChineseCSS = false;
        this.EnglishCSS = false;
      }
      if (this.selectedLanguage === 'Chinese') {
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
  clickedOutside() {
    this.showHide = false;
  }
  seeMoreRadiology() {
    this.showRadiologyPages = !this.showRadiologyPages;
  }
  seeMoreNeuroradiology() {
    this.showNueRadiologyPages = !this.showNueRadiologyPages;
  }

  ngOnInit() {
    this.checkPage();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkPage();
        if (
          this.isAboutPage ||
          this.isContactPage ||
          this.isTestimonialPage ||
          this.isFaqPage ||
          this.isOurTeamPage
        ) {
          this.isHomePage = false;
          this.aboutNavItem = true;
          this.ourServicesNavItem = false;
          this.resourcesNavItem = false;
        }

        if (
          this.isAbdominalRadiologyPage ||
          this.isProstateRadiologyPage ||
          this.isInterventionalRadiologyGuidancePage ||
          this.isWomensImagingPage ||
          this.isPediatricRadiologyPage ||
          this.isRadiologyPage ||
          this.isBrainTumorsPage ||
          this.isBackPainPage ||
          this.isSpinalTraumaPage ||
          this.isSbrainAndSpinePage ||
          this.isHeadTraumaPage ||
          this.isNeuroradiologyPage
        ) {
          this.ourServicesNavItem = true;
          this.isHomePage = false;
          this.aboutNavItem = false;
          this.resourcesNavItem = false;

        }
        if(this.isEventsPage || this.isSproBonoPage || this.isPricingPage){
          this.resourcesNavItem = true;
          this.ourServicesNavItem = false;
          this.isHomePage = false;
          this.aboutNavItem = false;
        }
        if(this.isHomePage){
          this.isHomePage = true;
          this.resourcesNavItem = false;
          this.ourServicesNavItem = false;
          this.aboutNavItem = false;
        }
      }
    });
  }

  private checkPage() {
    this.isHomePage = this.router.url === '/home';

    this.isAboutPage = this.router.url === '/about';
    this.isTestimonialPage = this.router.url === '/testimonial';
    this.isFaqPage = this.router.url === '/faq';
    this.isContactPage = this.router.url === '/contact';
    this.isOurTeamPage = this.router.url === '/ourTeam';

    this.isAbdominalRadiologyPage = this.router.url === '/abdominalRadiology';
    this.isProstateRadiologyPage = this.router.url === '/prostateRadiology';
    this.isInterventionalRadiologyGuidancePage =
      this.router.url === '/interventionalRadiologyGuidance';
    this.isWomensImagingPage = this.router.url === '/womensImaging';
    this.isPediatricRadiologyPage = this.router.url === '/pediatricRadiology';
    this.isRadiologyPage = this.router.url === '/radiology';

    this.isBrainTumorsPage = this.router.url === '/brainTumors';
    this.isBackPainPage = this.router.url === '/backPain';
    this.isSpinalTraumaPage = this.router.url === '/spinalTrauma';
    this.isSbrainAndSpinePage = this.router.url === '/brainAndSpine';
    this.isHeadTraumaPage = this.router.url === '/headTrauma';
    this.isNeuroradiologyPage = this.router.url === '/neuroradiology';

    this.isEventsPage = this.router.url === '/events';
    this.isSproBonoPage = this.router.url === '/proBono';
    this.isPricingPage = this.router.url === '/pricing';
  }
}
