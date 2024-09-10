import { Component, HostBinding } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }
  goToWebsite()
  {
    window.open('www.ghayaeg.com','_blank')
  }
  goToMediaContact()
  {
    window.open('media@ghayaeg.com','_blank')

  }
  goToGeneralMail()
  {
    window.open('info@ghayaeg.com','_blank')

  }
}
