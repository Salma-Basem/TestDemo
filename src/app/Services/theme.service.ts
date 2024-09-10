import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'dark' | 'light' = 'dark'; // Default theme

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme as 'dark' | 'light');
    } else {
      this.setTheme(this.theme); // Use default dark theme
    }
  }

  setTheme(theme: 'dark' | 'light'): void {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  getTheme(): 'dark' | 'light' {
    return this.theme;
  }
}
