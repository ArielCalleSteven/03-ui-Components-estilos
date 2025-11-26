import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SimpsonsService } from '../simpsons/services/simpsons-service';
import { PaginationService } from '../../shared/services/pagination';
import { PaginationComponent } from '../../shared/components/pagination/pagination';
import { HeroSimpsonsComponent } from '../simpsons/components/hero-simpsons/hero-simpsons';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { BackToTopComponent } from '../../shared/components/back-to-top/back-to-top';
@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent, HeroSimpsonsComponent, BreadcrumbsComponent, BackToTopComponent], 
  templateUrl: './simpsons-page.html', 
  styleUrl: './simpsons-page.css'      
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  public paginationService = inject(PaginationService);
  private router = inject(Router);

  totalPages = signal(0);

  simpsonsResource = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
      map(res => res)
    ),
    { initialValue: null }
  );

  constructor() {
    effect(() => {
      const data = this.simpsonsResource();
      if (data) {
        this.totalPages.set(data.pages);
      }
    });
  }
}