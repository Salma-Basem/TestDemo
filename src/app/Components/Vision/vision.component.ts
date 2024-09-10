import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LanguageService } from 'src/app/Services/language.service';
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(40px)', opacity: 0 }),
        animate('1.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]

})
export class VisionComponent {

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
}
