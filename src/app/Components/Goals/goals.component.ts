import { Component, HostBinding, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { LanguageService } from 'src/app/Services/language.service';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-30px)', opacity: 0 }),
        animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class GoalsComponent {
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