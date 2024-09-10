import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.css']
})
export class SliderPageComponent {
  bookId: string = '';
  book: { name: string, image: string, description: string } = { name: '', image: '', description: '' };
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id']; // Ensure this matches the route parameter name
      this.loadBookDetails(this.bookId);
    });

    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.loadBookDetails(this.bookId); // Reload book details on language change
    });
  }

  loadBookDetails(bookId: string): void {
    const bookDetails = [
      { id: '1', nameKey: 'SLIDER_TITLE.TITLE1', imageKey: "./assets/Images/bg.jpg", descriptionKey: 'SLIDER_DESCRIPTION.DESCRIPTION1' },
      { id: '2', nameKey: 'SLIDER_TITLE.TITLE2', imageKey: "./assets/Images/bg.jpg", descriptionKey: 'SLIDER_DESCRIPTION.DESCRIPTION2' },
      { id: '3', nameKey: 'SLIDER_TITLE.TITLE3', imageKey: "./assets/Images/bg.jpg", descriptionKey: 'SLIDER_DESCRIPTION.DESCRIPTION3' },
      { id: '4', nameKey: 'SLIDER_TITLE.TITLE4', imageKey: "./assets/Images/bg.jpg", descriptionKey: 'SLIDER_DESCRIPTION.DESCRIPTION4' },
    ];

    const book = bookDetails.find(bk => bk.id === bookId);
    
    if (book) {
      this.translateService.get([book.nameKey, book.imageKey, book.descriptionKey]).subscribe(translations => {
        this.book = {
          name: translations[book.nameKey],
          image: translations[book.imageKey], // Adjust if needed
          description: translations[book.descriptionKey]
        };
      });
    }
  }
}