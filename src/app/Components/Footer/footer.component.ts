import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  language: string = 'en';

  constructor(private languageService: LanguageService) { }


  ngOnInit() {
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage); // Changes language and updates direction
  }
  showScrollToTopButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.showScrollToTopButton = window.scrollY > 300; // Adjust as needed
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  goToFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61563488381588&mibextid=ZbWKwL', '_blank');
  }
  goToInstagram()
  {
    window.open('https://www.instagram.com/ghayaeg/','_blank');
  }

  goToYoutube()
  {
    window.open('https://www.youtube.com/@Ghaya-7','_blank')
  }

  goToTikTok()
  {
    window.open('https://www.tiktok.com/@ghayaeg','_blank')
  }

  goToLinkedin()
  {
    window.open('https://www.linkedin.com/in/ghaya-eg-3b726531a/','_blank')
  }

  goToGmail()
  {
    window.open('ghayaeg@gmail.com','_blank')
  }
  goToGooglePlay()
  {
    window.open('https://play.google.com/store/games?hl=en','_blank')
  }

  goToAppStore()
  {
    window.open('https://www.apple.com/eg/app-store/','_blank')
  }

  
  goToMediaContact(): void {
    const toEmailAddress = 'media@ghayaeg.com';
    const subject = '';
    const body = '';

    // Construct mailto URL with subject and body
    const mailtoUrl = `mailto:${toEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }
  goToGeneralMail(): void {
    const toEmailAddress = 'info@ghayaeg.com';
    const subject = '';
    const body = '';

    // Construct mailto URL with subject and body
    const mailtoUrl = `mailto:${toEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }
}
