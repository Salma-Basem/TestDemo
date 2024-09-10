import { Component, HostBinding } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css']
})
export class MembersCardComponent {
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

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
  images = [
    { src: './assets/Images/MoradMaher.jpeg',name: 'GHAYA_BOARD_DIRECTORS.CEO.NAME' },
    { src: './assets/Images/dr.Amal.JPG', name: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.NAME'},
    { src: './assets/Images/Haytham1.JPG',  name: 'GHAYA_BOARD_DIRECTORS.MEMBER4.NAME'},
    { src: './assets/Images/Emad.jpg',  name: 'GHAYA_BOARD_DIRECTORS.MEMBER1.NAME'},
    { src: './assets/Images/Mostafa.jpg', name: 'GHAYA_BOARD_DIRECTORS.MEMBER2.NAME' },
    { src: './assets/Images/Nancy.JPG',  name: 'GHAYA_BOARD_DIRECTORS.MEMBER3.NAME' },
  ];
}
