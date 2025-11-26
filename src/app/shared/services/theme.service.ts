import { Injectable, inject, signal, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  
  private readonly THEME_KEY = 'app-theme';
  private readonly DEFAULT_THEME = 'light';


  currentTheme = signal<string>(this.getStoredTheme());

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      this.applyTheme(theme);
      this.saveTheme(theme);
    });
  }

  setTheme(theme: string) {
    this.currentTheme.set(theme);
  }

  private getStoredTheme(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.THEME_KEY) || this.DEFAULT_THEME;
    }
    return this.DEFAULT_THEME;
  }

  private applyTheme(theme: string) {
    if (this.document.documentElement) {
      this.document.documentElement.setAttribute('data-theme', theme);
    }
  }

  private saveTheme(theme: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }
}