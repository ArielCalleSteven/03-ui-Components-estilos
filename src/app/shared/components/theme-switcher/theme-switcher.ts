import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service'; // Asegúrate que la ruta sea correcta

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.css'
})
export class ThemeSwitcherComponent {
  private themeService = inject(ThemeService);

  themes = ['light', 'dark','abyss'];


  currentTheme = this.themeService.currentTheme;

  setTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }
}