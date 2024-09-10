import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  theme: 'dark' | 'light';
  iconColor: string = 'text-light'; // Default to light color

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    this.theme = this.themeService.getTheme();
  }
  
  ngAfterViewInit(): void {
    this.cdr.detectChanges(); // Ensure view is fully initialized
    this.updateIconColor();
  }
  

  ngOnInit(): void {
    this.updateIconColor(); // Ensure the icon color is set on initialization
  }


  toggleTheme(): void {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(newTheme);
    this.theme = newTheme;
    this.updateIconColor(); // Update the icon color after theme change
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.updateIconColor();
  }
  private updateIconColor(): void {
    setTimeout(() => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const firstSection = document.querySelector('#first-section') as HTMLElement;
      const firstSectionHeight = firstSection ? firstSection.clientHeight : 0;
  
      console.log('Scroll Position:', scrollPosition);
      console.log('First Section Height:', firstSectionHeight);
  
      const isInFirstSection = scrollPosition < firstSectionHeight;
      console.log('Is in First Section:', isInFirstSection);
  
      if (this.theme === 'light') {
        this.iconColor = isInFirstSection ? 'text-light' : 'text-black';
      } else {
        this.iconColor = isInFirstSection ? 'text-warning' : 'text-warning';
      }
    }, 0);
  }
  
  
}
