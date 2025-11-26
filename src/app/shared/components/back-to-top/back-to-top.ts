import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css'
})
export class BackToTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}