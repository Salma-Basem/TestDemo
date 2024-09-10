import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();
  currentLanguage = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.setLanguage('en');
  }

  getLanguage() {
    return this.language$;
  }

  setLanguage(language: string) {
    this.translateService.use(language);
    this.languageSubject.next(language);
    this.currentLanguage = language;
    this.updateDirection(language); // Update direction internally
  }

  private updateDirection(language: string) {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
  }
}
