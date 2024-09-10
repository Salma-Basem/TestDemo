import { Component, HostBinding } from "@angular/core";
import { LanguageService } from "src/app/Services/language.service";

@Component({
  selector: 'app-awards-card',
  templateUrl: './awards-card.component.html',
  styleUrls: ['./awards-card.component.css']
})
export class AwardsCardComponent {

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
