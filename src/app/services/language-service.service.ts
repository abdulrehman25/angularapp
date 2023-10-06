import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
  public langObsevable: BehaviorSubject<string> = new 
       BehaviorSubject<string>('English');

   public onLanguageChanged(lang:string){
     this.langObsevable.next(lang);
   }
  // private selectedLanguage: string = 'English';
  // private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.selectedLanguage);

  // constructor() { 
  //   console.log("this.selectedLanguage", this.selectedLanguage)

  // }

  // getSelectedLanguage() {
  //   console.log("this.selectedLanguage", this.selectedLanguage)
  //   return this.selectedLanguage;
  // }

  // setSelectedLanguage(lang: string) {
  //   console.log("lang", lang)
  //   this.selectedLanguage = lang;
  //   this.selectedLanguageSubject.next(lang);
  //   console.log("this.selectedLanguage", this.selectedLanguage)

  // }

  // getSelectedLanguageObservable(): Observable<string> {
  //   return this.selectedLanguageSubject.asObservable();
  // }
}
