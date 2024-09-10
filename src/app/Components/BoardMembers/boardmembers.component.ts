import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-boardmembers',
  templateUrl: './boardmembers.component.html',
  styleUrls: ['./boardmembers.component.css']
})
export class BoardmembersComponent {
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  members = [
    { 
      name: 'GHAYA_BOARD_DIRECTORS.CEO.NAME', 
      point1: 'GHAYA_BOARD_DIRECTORS.CEO.MAIN_POINTS.POINT1', 
      point2: 'GHAYA_BOARD_DIRECTORS.CEO.MAIN_POINTS.POINT2', 
      point3: 'GHAYA_BOARD_DIRECTORS.CEO.MAIN_POINTS.POINT3', 
      point4: 'GHAYA_BOARD_DIRECTORS.CEO.MAIN_POINTS.POINT4', 
      point5: 'GHAYA_BOARD_DIRECTORS.CEO.MAIN_POINTS.POINT5', 
      point6: 'GHAYA_BOARD_DIRECTORS.CEO.MAIN_POINTS.POINT6', 
      imageSrc: './assets/Images/MoradMaher.jpeg', 
      showMore: false 
    },
    {
      name: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.NAME', 
      point1: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.MAIN_POINTS.POINT1', 
      point2: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.MAIN_POINTS.POINT2', 
      point3: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.MAIN_POINTS.POINT3', 
      point4: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.MAIN_POINTS.POINT4', 
      point5: 'GHAYA_BOARD_DIRECTORS.VICE_CEO.MAIN_POINTS.POINT5', 
      imageSrc: './assets/Images/dr.Amal.JPG', 
      showMore: false 
    },
 
   
  
    {
      name: 'GHAYA_BOARD_DIRECTORS.MEMBER4.NAME', 
      point2: 'GHAYA_BOARD_DIRECTORS.MEMBER4.MAIN_POINTS.POINT2', 
      point3: 'GHAYA_BOARD_DIRECTORS.MEMBER4.MAIN_POINTS.POINT3', 
      point1: 'GHAYA_BOARD_DIRECTORS.MEMBER4.MAIN_POINTS.POINT1', 
      point4: 'GHAYA_BOARD_DIRECTORS.MEMBER4.MAIN_POINTS.POINT4', 
      point5: 'GHAYA_BOARD_DIRECTORS.MEMBER4.MAIN_POINTS.POINT5', 
      imageSrc: './assets/Images/Haytham1.JPG', 
      showMore: false 
    },
    {
      name: 'GHAYA_BOARD_DIRECTORS.MEMBER1.NAME', 
      point2: 'GHAYA_BOARD_DIRECTORS.MEMBER1.MAIN_POINTS.POINT2', 
      point3: 'GHAYA_BOARD_DIRECTORS.MEMBER1.MAIN_POINTS.POINT3', 
      point1: 'GHAYA_BOARD_DIRECTORS.MEMBER1.MAIN_POINTS.POINT1', 
      point4: 'GHAYA_BOARD_DIRECTORS.MEMBER1.MAIN_POINTS.POINT4', 
      point5: 'GHAYA_BOARD_DIRECTORS.MEMBER1.MAIN_POINTS.POINT5', 
      imageSrc: './assets/Images/Emad.jpg', 
      showMore: false 
    },
    {
      name: 'GHAYA_BOARD_DIRECTORS.MEMBER2.NAME', 
      point2: 'GHAYA_BOARD_DIRECTORS.MEMBER2.MAIN_POINTS.POINT2', 
      point3: 'GHAYA_BOARD_DIRECTORS.MEMBER2.MAIN_POINTS.POINT3', 
      point1: 'GHAYA_BOARD_DIRECTORS.MEMBER2.MAIN_POINTS.POINT1', 
      point4: 'GHAYA_BOARD_DIRECTORS.MEMBER2.MAIN_POINTS.POINT4', 
      point5: 'GHAYA_BOARD_DIRECTORS.MEMBER2.MAIN_POINTS.POINT5', 
      imageSrc: './assets/Images/Mostafa.jpg', 
      showMore: false 
    },
    {
      name: 'GHAYA_BOARD_DIRECTORS.MEMBER3.NAME', 
      point2: 'GHAYA_BOARD_DIRECTORS.MEMBER3.MAIN_POINTS.POINT2', 
      point3: 'GHAYA_BOARD_DIRECTORS.MEMBER3.MAIN_POINTS.POINT3', 
      point1: 'GHAYA_BOARD_DIRECTORS.MEMBER3.MAIN_POINTS.POINT1', 
      point4: 'GHAYA_BOARD_DIRECTORS.MEMBER3.MAIN_POINTS.POINT4', 
      point5: 'GHAYA_BOARD_DIRECTORS.MEMBER3.MAIN_POINTS.POINT5', 
      imageSrc: './assets/Images/Nancy.JPG', 
      showMore: false 
    }
    
  ];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  ngAfterViewInit() {
    this.hideLoaderWhenImagesLoaded();
  }

  private hideLoaderWhenImagesLoaded() {
    const loader = document.getElementById('loader');
    const images = document.querySelectorAll('img');
    let loadedImagesCount = 0;

    function checkAllImagesLoaded() {
      if (loadedImagesCount === images.length) {
        if (loader) {
          loader.style.display = 'none';
        }
      }
    }

    images.forEach(img => {
      if (img.complete) {
        loadedImagesCount++;
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', () => {
          loadedImagesCount++;
          checkAllImagesLoaded();
        });

        img.addEventListener('error', () => {
          loadedImagesCount++;
          checkAllImagesLoaded();
        });
      }
    });

    if (images.length === 0 && loader) {
      loader.style.display = 'none';
    }
  }

  toggleMemberVisibility(index: number): void {
    this.members[index].showMore = !this.members[index].showMore;
  }

}