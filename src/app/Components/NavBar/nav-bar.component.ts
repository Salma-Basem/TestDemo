import { ViewportScroller } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { LanguageService } from 'src/app/Services/language.service';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  language: string = 'en';
  theme: 'light' | 'dark' = 'dark'; // Default theme
  isScrolled = false;

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private themeService: ThemeService,
    private viewportScroller: ViewportScroller
  ) {
    // Subscribe to router events to handle route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.updateNavbarBackground());

    // Load the current theme on initialization
    this.loadTheme();
  }


  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.updateDirection();
    });

    // Initial navbar background update
    this.updateNavbarBackground();
  }

 
  @HostListener('window:scroll')
  onScroll(): void {
    this.updateNavbarBackground();
  }

  changeLanguage(newLanguage: string): void {
    this.languageService.setLanguage(newLanguage);
  }

  toggleTheme(): void {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(newTheme);
    this.theme = newTheme;
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  private updateNavbarBackground(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const firstSectionHeight = document.querySelector('#first-section')?.clientHeight || 0;
    const navbarHeight = document.querySelector('nav.navbar')?.clientHeight || 0;
    this.isScrolled = scrollPosition > firstSectionHeight - navbarHeight;
  }

  private updateDirection(): void {
    document.documentElement.setAttribute('dir', this.language === 'ar' ? 'rtl' : 'ltr');
  }

  private loadTheme(): void {
    const theme = this.themeService.getTheme();
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  scrollTo(id: string): void {
    // Navigate to the route without fragment
    this.router.navigate([], { queryParams: { scrollTo: id } }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          this.viewportScroller.scrollToPosition([0, element.offsetTop]);
        }
      }, 0);
    });
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }


 
 

 

}